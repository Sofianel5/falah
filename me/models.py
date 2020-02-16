from django.db import models
from users.models import Account
# Create your models here.
class Interest(models.Model):
    SUBJECTS = (
        ("math", "Math"),
        ("english", "English"),
        ("foreign_language", "Foreign Language"),
        ("science", "Science"),
        ("social_science", "Social Science"),
        ("political", "Political"),
        ("skills", "Skills"),
        ("other", "Other"),
    )
    subject = models.CharField(max_length=50, choices=SUBJECTS)
    intensity = models.FloatField(default=1.00)
    account = models.ForeignKey(Account, on_delete=models.CASCADE)
    def __str__(self):
        return self.subject + " of " + str(self.intensity)
    