from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path("", views.me, name="me"),
    path("edit/<int:pk>", views.ProgramUpdateView.as_view(), name="edit"),
    path("deactivate/", views.deactivate, name="deactivate"),
    path("activate/", views.activate, name="activate"),
    path("addInterest/", views.addInterest, name="addInterest"),
    path("removeInterest/", views.removeInterest, name="removeInterest"),
]