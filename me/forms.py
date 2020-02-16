from django import forms
from falahprograms.models import Program, Session 

class ProgramUpdateForm(forms.ModelForm):
    class Meta:
        model = Program
        fields = ['description', 'max_attendees', 'type', 'primary_subject', 'secondary_subject', 'name', 'tags', 'venue']

