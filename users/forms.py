from django import forms
from django.contrib.auth.models import User
from .models import Account
from django.contrib.auth.forms import UserCreationForm, PasswordResetForm as PasswordResetFormCore
from tasks.tasks import send_password_reset_form 

class UserRegisterForm(UserCreationForm):
    email = forms.EmailField()
    password2 = None
    class Meta:
        model = Account
        fields = ['first_name', 'last_name', 'email', 'password1']
    def clean_password2(self):
        return True
    def clean_email(self):
        email = self.cleaned_data.get('email')
        first_name = self.cleaned_data.get('first_name')
        last_name = self.cleaned_data.get('last_name')
        if email and Account.objects.filter(email=email).exclude(first_name=first_name).exclude(last_name=last_name).exists():
            raise forms.ValidationError(u'Email addresses must be unique.')
        return email


class PasswordResetForm(PasswordResetFormCore):
    email = forms.EmailField(max_length=254, widget=forms.TextInput(
        attrs={
            'class': 'form-control',
            'id': 'email',
            'placeholder': 'Email'
        }
    ))

    def send_mail(self, subject_template_name, email_template_name, context, 
                  from_email, to_email, html_email_template_name=None):
        context['user'] = context['user'].id

        send_password_reset_form.delay(subject_template_name=subject_template_name, 
                        email_template_name=email_template_name,
                        context=context, from_email=from_email, to_email=to_email,
                        html_email_template_name=html_email_template_name)