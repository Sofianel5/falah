from django.contrib import admin
from .models import Program, Coordinates, Venue, City, Session, Country
# Register your models here.
admin.site.register(Program)
admin.site.register(Country)
admin.site.register(Coordinates)
admin.site.register(Venue)
admin.site.register(City)
admin.site.register(Session)

