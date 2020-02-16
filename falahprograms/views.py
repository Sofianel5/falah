from django.shortcuts import render, redirect
from django.core.files import File
from django.core import serializers
from .forms import CreateProgramForm
from .utils import verifyImage, getSubtitle
from .models import Session, City, Program, Venue
import uuid
import os 
from datetime import datetime
from geolocation.utils import getCityFromRequest
import base64 
from django.contrib.auth.decorators import login_required

DEFAULT_CITY_NAME = "New York"

# Create your views here.
@login_required
def create(request):
    context = {}
    if request.method == "GET":
        context["form"] = CreateProgramForm()
    else:
        context["form"] = CreateProgramForm(request.POST)
        print(context["form"].errors)
        form = context["form"]
        if form.is_valid():
            result = form.save(commit=False)
            result.creator = request.user 
            # saving and setting image
            if request.POST["mainFile"]:
                imgdata = request.POST["mainFile"]
                imgType = verifyImage(imgdata)
                print(imgType)
                if imgType == None:
                    result.img = None
                else:
                    imgdata = base64.b64decode(imgdata)
                    img = str(uuid.uuid4()) + "." + imgType
                    img = os.path.join(os.path.abspath(os.curdir), "media", img)
                    print(img)
                    with open(img, 'wb') as f:
                        f.write(imgdata)
                    with open(img, 'rb') as f:
                        img = str(uuid.uuid4()) + "." + imgType
                        result.img.save(img, File(f), save=True)
            # creating associated session objects
            result.save()
            session_num = 0
            while "date"+str(session_num) in request.POST and "date"+str(session_num+1) in request.POST:
                session = Session(start=datetime.strptime(request.POST["date"+str(session_num)], "%m/%d/%Y %I:%M %p"), stop=datetime.strptime(request.POST["date"+str(session_num+1)], "%m/%d/%Y %I:%M %p"), program = result)
                session.save()
                session_num += 2
            return redirect("me")
    return render(request, "falahprograms/create.html", context)

def browse(request):
    context = {}
    if request.method == "GET":
        context["cities"] = City.objects.all()
        if "city" in request.GET:
            try:
                context["city"] = City.objects.get(name=request.GET["city"])
            except City.DoesNotExist:
                try:
                    context["city"] = City.objects.get(name=getCityFromRequest(request))
                except:
                    context["city"] = City.objects.get(name=DEFAULT_CITY_NAME)
        else:
            try:
                context["city"] = City.objects.get(name=getCityFromRequest(request))
            except:
                context["city"] = City.objects.get(name=DEFAULT_CITY_NAME)
        request.user.city = context["city"]
        request.user.save()
        context["coordinates"] = serializers.serialize('json', [context["city"].coordinates])
        venues = Venue.objects.filter(city=context["city"])
        context["venues"] = {}
        for venue in venues:
            context["venues"][str(venue.pk)] = {"title": venue.title, "coordinates": {"lat": venue.coordinates.lat, "lng": venue.coordinates.lng}}
        context["programs"] = Program.objects.filter(session__start__gte=datetime.today(), venue__city=context["city"])
        for program in context["programs"]:
            program.subtitle = getSubtitle(program.session_set.all()) + " at " + program.venue.title
        context["programsJSON"] = serializers.serialize('json', context["programs"])
    return render(request, "falahprograms/browse.html", context)

def program(request):
    context = {}
    try:
        program = Program.objects.get(pk=request.GET["id"])
    except:
        return redirect("browse")
    context["program"] = program
    context["sessions"] = program.session_set.all()
    return render(request, "falahprograms/program.html", context)

@login_required
def register(request):
    user = request.user
    try:
        program = Program.objects.get(pk=request.GET["program"])
        if program.max_attendees >=  len(program.attendees)+ 1:
            program.attendees.add(user)
        else:
            context["program"] = program 
            context["sessions"] = program.session_set.all()
            return render(request, "falahprograms/program.html", context)
    except:
        print("invalid program ID")
        return redirect("browse")
    return redirect("me")