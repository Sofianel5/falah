# Generated by Django 2.2.1 on 2019-12-24 17:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('me', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='interest',
            name='intensity',
            field=models.FloatField(default=1.0),
        ),
    ]