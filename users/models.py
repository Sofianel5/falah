from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from django.contrib.auth.validators import UnicodeUsernameValidator
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from .managers import MyAccountManager
from datetime import datetime
from rest_framework.authtoken.models import Token
from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFill
from django.utils import timezone

# Create your models here.
class Account(AbstractBaseUser):
    username = None 
    email = models.EmailField(verbose_name="Email", max_length=150, unique=True)
    first_name = models.CharField(verbose_name="First Name", max_length=50)
    last_name = models.CharField(verbose_name="Last Name", max_length=50)
    last_login = models.DateTimeField(verbose_name="Last login", default=timezone.now)
    active_city = models.ForeignKey("falahprograms.City", on_delete=models.DO_NOTHING, blank=True, null=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    profile_pic = ProcessedImageField(upload_to='pfps', default="default-pfp.png", processors=[ResizeToFill(100, 100)], format='JPEG', options={'quality': 60})
    is_admin = models.BooleanField(default=False)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']
    objects = MyAccountManager()
    def __str__(self):
        return self.first_name + " " + self.last_name
    def has_perm(self, perm, obj=None):
        return self.is_admin 
    def has_module_perms(self, app_label):
        return True 
    def save(self, *args, **kwargs):
        for field_name in ['first_name', 'last_name']:
            val = getattr(self, field_name, False)
            if val:
                setattr(self, field_name, val.capitalize())
        super(Account, self).save(*args, **kwargs)
    def get_full_name(self):
        """
        Return the first_name plus the last_name, with a space in between.
        """
        full_name = '%s %s' % (self.first_name, self.last_name)
        return full_name.strip()
    
    def get_suggested_programs(self):
        pass


    