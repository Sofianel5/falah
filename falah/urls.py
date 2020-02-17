"""falah URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.contrib.auth import views as auth_views
from django.conf import settings
from django.conf.urls.static import static
from users import views as user_views
from falahprograms import views as program_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", include("main.urls")),
    path("signup/", user_views.signup, name="signup"),
    path("signin/", auth_views.LoginView.as_view(template_name="users/signin.html"), name="signin"),
    path("signout/", auth_views.LogoutView.as_view(template_name="main/landing.html"), name="signout"),
    path("passwordreset/", auth_views.PasswordResetView.as_view(template_name="users/password_reset_form.html"), name="password_reset"),
    path("passwordreset/<uidb64>/<token>/", auth_views.PasswordResetConfirmView.as_view(), name="password_reset_confirm"),
    path("passwordreset/complete/", auth_views.PasswordResetCompleteView.as_view(), name="password_reset_complete"),
    path("passwordreset/done/", auth_views.PasswordResetDoneView.as_view(template_name="users/password_reset_done.html"), name="password_reset_done"),
    path("checkEmail/", user_views.checkEmail),
    path("create/", program_views.create, name="create-program"),
    path("browse/", program_views.browse, name="browse"),
    path("program/", program_views.program, name="program"),
    path("mycity/", program_views.get_city, name="getcity"),
    path("register/", program_views.register, name="register"),
    path("me/", include("me.urls")),
    path("api/", include("api.urls")),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
