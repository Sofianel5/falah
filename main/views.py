from django.shortcuts import render
from geolocation.utils import getCityFromRequest

# Create your views here.
def index(request):
    context = {}
    context['user'] = request.user
    return render(request, 'main/landing.html', context)