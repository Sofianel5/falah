from django.db import models
from users.models import Account
from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFill

# Create your models here.
class Coordinates(models.Model):
    lat = models.FloatField()
    lng = models.FloatField()
    def __str__(self):
        return "{'lat': " + str(self.lat) + ", 'lng':"+ str(self.lng)+ "}"

class Country(models.Model):
    coordinates = models.ForeignKey(Coordinates, verbose_name="Coordinates", on_delete=models.CASCADE)
    country_code = models.CharField(max_length=10)
    country_name = models.CharField(max_length=50)
    img = ProcessedImageField(upload_to='countries', default="country.jpg", processors=[ResizeToFill(1000, 500)], format='JPEG', options={'quality': 60})
    def __str__(self):
        return self.country_name

class City(models.Model):
    name = models.CharField(verbose_name="City name", max_length=50)
    verbose_name = models.CharField(verbose_name="City verbose name",max_length=70)
    country = models.ForeignKey("falahprograms.Country", verbose_name="country", on_delete=models.CASCADE)
    img = ProcessedImageField(upload_to='cities', default="city.jpg", processors=[ResizeToFill(1000, 500)], format='JPEG', options={'quality': 60})
    coordinates = models.ForeignKey(Coordinates, verbose_name="Coordinates", on_delete=models.CASCADE)
    def __str__(self):
        return self.verbose_name
    

class Venue(models.Model):
    title = models.CharField(max_length=50)
    coordinates = models.ForeignKey(Coordinates, on_delete=models.CASCADE)
    value = models.CharField(max_length=15)
    city = models.ForeignKey(City, on_delete=models.CASCADE)
    img = ProcessedImageField(upload_to='venues', default="venue.jpg", processors=[ResizeToFill(1000, 500)], format='JPEG', options={'quality': 60})
    def __str__(self):
        return self.title
    

class Program(models.Model):
    TYPES = (
        ("recurringClass", "Recurring class"),
        ("oneTime", "One time event"),
    )
    PRIMARY_SUBJECTS = (
        ("math", "Math"),
        ("english", "English"),
        ("foreign_language", "Foreign Language"),
        ("science", "Science"),
        ("social_science", "Social Science"),
        ("political", "Political"),
        ("skills", "Skills"),
        ("other", "Other"),
    )
    SECONDARY_SUBJECTS = (
        ("elementry", "Elementry school"),
        ("preAlgebra", "Pre-algebra"),
        ("algebra", "Algebra"),
        ("geometry", "Geometry"),
        ("basicApp", "Basic Applications"),
        ("preCalculus", "Pre-calculus"),
        ("calculus", "Calculus"),
        ("mcalc", "Multivariable calculus"),
        ("lalgebra", "Linear algebra"),
        ("advancedApp", "Advanced applications"),
        ("astro", "Astrophysics"),
        ("bio", "Biology"),
        ("chem", "Chemistry"),
        ("cs", "Computer science"),
        ("orgo", "Organic chemistry"),
        ("physics", "Physics"),
        ("medicine", "Medicine"),
        ("zoology", "Zoology"),
        ("fiction", "Fiction"),
        ("nonfiction", "Non-fiction"),
        ("poetry", "Poetry"),
        ("spanish", "Spanish"),
        ("german", "German"),
        ("french", "French"),
        ("russian", "Russian"),
        ("arabic", "Arabic"),
        ("chinese", "Chinese"),
        ("econ", "Economics"),
        ("history", "History"),
        ("polsci", "Political science"),
        ("sociology", "Sociology"),
        ("psych", "Psychology"),
        ("voting", "Voting"),
        ("immigration", "Immigration law"),
        ("taxes", "Taxes"),
        ("sports", "Sports"),
        ("woodworking", "Woodworking"),
        ("fishing", "Fishing/Hunting"),
        ("other", "Other")
    )
    creator = models.ForeignKey(Account, verbose_name="Creator", on_delete=models.CASCADE)
    img = ProcessedImageField(upload_to='programs', default="program.jpg", processors=[ResizeToFill(1000, 550)], format='JPEG', options={'quality': 60})
    #img = models.ImageField(default="default.jpg", upload_to="images")
    description = models.TextField(blank=False)
    type = models.CharField(blank=False, max_length=50, choices=TYPES)
    primary_subject = models.CharField(blank=False, max_length=50, choices=PRIMARY_SUBJECTS)
    secondary_subject = models.CharField(blank=False, max_length=50, choices=SECONDARY_SUBJECTS)
    name = models.CharField(max_length=50)
    tags = models.TextField(blank=True)
    venue = models.ForeignKey(Venue, verbose_name="Venue", on_delete=models.CASCADE)
    attendees = models.ManyToManyField(Account, related_name="programs")
    active = models.BooleanField(default=True)
    max_attendees = models.IntegerField(blank=True)

    def __str__(self):
        return self.name

    @property 
    def is_full(self):
        return len(self.attendees) >= self.max_attendees 
    
    @property 
    def num_attendees(self):
        return len(self.attendees)
    

class Session(models.Model):
    start = models.DateTimeField(auto_now=False, auto_now_add=False)
    stop = models.DateField(auto_now=False, auto_now_add=False)
    program = models.ForeignKey(Program, on_delete=models.CASCADE)
    def __str__(self):
        return "From " + self.start.strftime("%a, %b %d, %I %p") + " to " + self.stop.strftime("%a, %b %d, %I %p") 
     
    
