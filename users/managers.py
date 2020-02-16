from django.contrib.auth.base_user import BaseUserManager
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
#from tasks.tasks import send_account_confirmation_email
class MyAccountManager(BaseUserManager):
    def create_user(self, email, first_name, last_name, password):
        if not email:
            raise ValueError("Users must have an email.")
        if not (first_name or last_name):
            raise ValueError("Users must have a full name.")
        user = self.model(
            email=self.normalize_email(email),
            first_name=first_name,
            last_name=last_name
        )
        user.first_name = user.first_name.strip().capitalize()
        user.last_name = user.last_name.strip().capitalize()
        user.set_password(password)
        user.save(using=self._db)
        #send_account_confirmation_email.delay(user.get_full_name(), user.email)
        return user
    def create_superuser(self, email, first_name, last_name, password):
        user = self.model(
            email = self.normalize_email(email),
            password = password,
            first_name = first_name,
            last_name = last_name
        )
        user.set_password(password)
        user.is_admin = True
        user.is_staff = True
        user.save(using=self._db)