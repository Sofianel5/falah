from django.contrib import admin
from django.urls import path, include
from . import views
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path("auth/", include('djoser.urls')),
    path("auth/", include("djoser.urls.authtoken")),
    path("getprograms/", views.ProgramsView.as_view(), name="get-programs-api"),

]