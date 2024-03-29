# Generated by Django 2.2.1 on 2019-12-23 23:06

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('falahprograms', '0002_auto_20191222_0714'),
    ]

    operations = [
        migrations.AddField(
            model_name='program',
            name='active',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='program',
            name='attendees',
            field=models.ManyToManyField(related_name='programs', to=settings.AUTH_USER_MODEL),
        ),
    ]
