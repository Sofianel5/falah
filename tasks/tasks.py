from celery import shared_task
from django.core.mail import EmailMultiAlternatives, send_mail
from django.template.loader import get_template
from django.contrib.auth.forms import PasswordResetForm 
from users.models import Account

FROM_EMAIL = "accounts@falah.world"
@shared_task
def send_email(to, template_name, context, subject):
    plaintext = get_template("tasks/"+template_name + ".txt")
    html = get_template("tasks/"+template_name+".html")
    text_content = plaintext.render(c)
    html_content = html.render(context)
    msg = EmailMultiAlternatives(subject, text_content, FROM_EMAIL, [to])
    msg.attach_alternative(html_content, "text/html")
    msg.send()
    print("message sent")

@shared_task
def send_account_confirmation_email(name, email):
    plaintext = get_template("tasks/account_created.txt")
    html = get_template("tasks/account_created.html")
    c = {"name": name}
    text_content = plaintext.render(c)
    html_content = html.render(c)
    msg = EmailMultiAlternatives("Welcome to Falah, {}".format(name), text_content, FROM_EMAIL, [email])
    msg.attach_alternative(html_content, "text/html")
    msg.send()
    print("message sent")

@shared_task
def send_password_reset_form(subject_template_name, email_template_name, context,
              from_email, to_email, html_email_template_name):
    context['user'] = Account.objects.get(pk=context['user'])
    PasswordResetForm.send_mail(
        None,
        subject_template_name,
        email_template_name,
        context,
        from_email,
        to_email,
        html_email_template_name
    )