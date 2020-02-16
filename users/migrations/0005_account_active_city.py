# Generated by Django 2.2.1 on 2020-01-03 18:00

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('falahprograms', '0004_program_max_attendees'),
        ('users', '0004_remove_account_interests'),
    ]

    operations = [
        migrations.AddField(
            model_name='account',
            name='active_city',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.DO_NOTHING, to='falahprograms.City'),
            preserve_default=False,
        ),
    ]