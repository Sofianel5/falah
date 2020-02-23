from django.shortcuts import render
from users.models import Account
from .utils import generateHandshakeToken, decryptToken
from django.http import JsonResponse
from datetime import datetime, timedelta, date, time
from django.http import HttpResponseForbidden
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.core import serializers
from .serializers import *
from falah.settings import GOOGLE_API_KEY
from falahprograms.models import *

class ProgramsView(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request):
        programs = request.user.programs.all()
        programs = [ProgramSerializer(program).data for program in programs]
        return JsonResponse(programs, safe=False)

def getGoogleApiKey(request):
    return JsonResponse({"key": GOOGLE_API_KEY}, safe=False)

def getCountries(request):
    countries = [CountrySerializer(country) for country in Country.objects.all()]
    return JsonResponse(countries, safe=False)

def getCities(request):
    country = request.GET["country"]
    cities = [CitySerializer(city) for city in City.objects.filter(country__name=country)]
    return JsonResponse(cities, safe=False)

def getVenues(request):
    city = request.GET["city"]
    venues = [VenueSerializer(venue) for venue in Venue.objects.filter(city__name=city)]
    return JsonResponse(venues, safe=False)