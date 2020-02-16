from django import forms
from django.contrib.auth.models import User
from falahprograms.models import Program
from django.contrib.auth.forms import UserCreationForm


class CreateProgramForm(forms.ModelForm):

    class Meta:
        model = Program
        fields = ['img', 'description', 'max_attendees', 'type', 'primary_subject', 'secondary_subject', 'name', 'tags', 'venue']
