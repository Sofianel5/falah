from django.db import models

# Create your models here.
class MobileToken(models.Model):
    STATUSES = (
        ("INVALID", "INVALID"),
        ("AUTHENTICATED", "AUTHENTICATED")
    )
    token = models.CharField(max_length=150)
    status = models.CharField(choices=STATUSES, max_length=40)
    applicationId = models.CharField(max_length=30)
    userId = models.CharField(max_length=100)
    sand = models.CharField(max_length=30)
    deviceId = models.CharField(max_length=100)