from django.shortcuts import render, redirect
from falahprograms.models import Program, Venue, Session 
from users.models import Account 
from django.views.generic import UpdateView
from django.contrib.auth.decorators import login_required
from .forms import ProgramUpdateForm
from django.utils.decorators import method_decorator 
from django.core.exceptions import PermissionDenied
import uuid
import os 
from datetime import datetime
import base64 
from falahprograms.utils import verifyImage
from django.core.files import File
from .models import Interest
from django.http import JsonResponse

# Create your views here.
@login_required
def me(request):
    me = request.user
    programs = me.programs.all()
    #print(programs)
    context = {}
    context["me"] = me
    context["active_programs"] = [program for program in programs if program.active]
    context["past_programs"] = [program for program in programs if not program.active]
    context["interests"] = [interest.subject for interest in me.interest_set.all()]
    context["my_programs"] = Program.objects.filter(creator=me)
    return render(request, "me/me.html", context) 

@login_required
def edit(request):
    context = {}
    if request.method == "GET":
        try:
            context["program"] = Program.objects.get(pk=request.GET["pk"])
            assert(context["program"].creator == request.user)
        except:
            return redirect("me")
        context["sessions"] = Session.objects.filter(program=context["program"])
        return render(request, "me/edit-program.html", context)
    else:
        return redirect("me")

@login_required
def deactivate(request):
    print("request received")
    if request.method == "GET":
        program = Program.objects.get(pk=request.GET["program"])
        if request.user != program.creator:
            print("permission denied")
            raise PermissionDenied()
        program.active = False 
        program.save()
        print("set as deactive")
        return redirect("me")
    else:
        program = Program.objects.get(pk=request.POST["program"])
        if request.user != program.creator:
            raise PermissionDenied()
        program.active = False 
        program.save()
        print("set as deactive")
        return redirect("me")

@login_required
def activate(request):
    print("request received")
    if request.method == "GET":
        program = Program.objects.get(pk=request.GET["program"])
        if request.user != program.creator:
            print("permission denied")
            raise PermissionDenied()
        program.active = True 
        program.save()
        print("set as active")
        return redirect("me")
    else:
        program = Program.objects.get(pk=request.POST["program"])
        if request.user != program.creator:
            print("permission denied")
            raise PermissionDenied()
        program.active = True 
        program.save()
        print("set as active")
        return redirect("me")

class ProgramUpdateView(UpdateView):
    model = Program 
    form_class = ProgramUpdateForm
    template_name = 'me/edit-program.html' 

    def get_context_data(self, **kwarg):
        context = super().get_context_data(**kwarg) 
        context["tags"] = context["program"].tags.split()
        context["sessions"] = [{"start": session.start.strftime("%m/%d/%Y %I:%M %p"), "stop":session.stop.strftime("%m/%d/%Y %I:%M %p")} for session in Session.objects.filter(program=context["program"])]
        return context

    @method_decorator(login_required)
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)
    
    def get_object(self, *args, **kwargs):
        obj = super(ProgramUpdateView, self).get_object(*args, **kwargs)
        if obj.creator != self.request.user:
            raise PermissionDenied() #or Http404
        return obj

    def form_valid(self, form):
        # Save new sessions here
        result = form.save(commit=False)
        print(self.request.POST)
        if self.request.POST["mainFile"] != "":
            imgdata = self.request.POST["mainFile"]
            imgType = verifyImage(imgdata)
            print(imgType)
            if imgType != None:
                imgdata = base64.b64decode(imgdata)
                img = str(uuid.uuid4()) + "." + imgType
                img = os.path.join(os.path.abspath(os.curdir), "media", img)
                print(img)
                with open(img, 'wb') as f:
                    f.write(imgdata)
                with open(img, 'rb') as f:
                    img = str(uuid.uuid4()) + "." + imgType
                    result.img.save(img, File(f), save=True)
        session_num = len(result.session_set.all())*2
        print(session_num)
        while "date"+str(session_num) in self.request.POST and "date"+str(session_num+1) in self.request.POST:
            try:
                session = Session(start=datetime.strptime(self.request.POST["date"+str(session_num)], "%m/%d/%Y %I:%M %p"), stop=datetime.strptime(self.request.POST["date"+str(session_num+1)], "%m/%d/%Y %I:%M %p"), program = result)
                session.save()
                session_num += 2
            except:
                continue
        result.save()
        return redirect("me")

def addInterest(request):
    if request.method == "GET":
        print("request recieved to add "+request.GET["subject"])
        user = request.user 
        subject = request.GET["subject"] 
        interest = Interest.objects.create(subject=subject, account=user)
        interest.save()
        print(user.interest_set.all())
        return JsonResponse({"success": True})

def removeInterest(request):
    if request.method == "GET":
        print("request recieved to delete "+request.GET["subject"])
        user = request.user 
        subject = request.GET["subject"] 
        interest = user.interest_set.filter(subject=subject)
        interest.delete()
        print(user.interest_set.all())
        return JsonResponse({"success": True})
