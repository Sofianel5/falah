from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from .models import Account
from .forms import UserRegisterForm
from django.http import JsonResponse
from django.contrib.auth import login
from tasks.tasks import send_email, send_account_confirmation_email
# Create your views here.
def signup(request):
    context = {}
    if request.method == "GET":
        context["form"] = UserRegisterForm()
        if "email" in request.GET:
            context["form"].email = request.GET["email"]
    else:
        form = UserRegisterForm(request.POST)
        context["form"] = form
        if form.is_valid():
            user = form.save()
            login(request, user, backend='django.contrib.auth.backends.ModelBackend')
            send_account_confirmation_email.delay(user.get_full_name(), user.email)
            return redirect('main-landing')
        else:
            print(form.errors)
            print(form)
            print("form is invalid")
    return render(request, 'users/signup.html', context)

def checkEmail(request):
    email = request.GET["email"]
    if len(Account.objects.filter(email=email)) == 0:
        return JsonResponse({"redirect": True, "url": "/signup?email="+email})
    else:
        return JsonResponse({"redirect": False, "url": "/signin"})

    