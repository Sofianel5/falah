from django.contrib.gis.geoip2 import GeoIP2
from falahprograms.models import City, Coordinates, Venue, Country
import math  
from django.core.exceptions import PermissionDenied
from geopy.geocoders import Nominatim

geolocator = Nominatim(user_agent="falah")

def get_client_ip(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip

def getCityFromRequest(request):
    user = request.user
    ip = get_client_ip(request)
    g = GeoIP2()
    city = g.city(ip)
    if city is not None:
        try:
            _usercity = City.objects.get(name=city["city"])
        except City.DoesNotExist:
            _country = g.country(ip)
            try:
                _country = Country.objects.get(country_code=_country["country_code"])
            except Country.DoesNotExist:
                loc = geolocator.geocode(_country["country_name"])
                if _country["country_name"] == "Israel":
                    raise PermissionDenied
                _country_coords = Coordinates.objects.create(lat=loc.latitude, lng=loc.longitude)
                _country = Country.objects.create(coordinates=_country_coords, country_name=_country["country_name"], country_code=_country["country_code"])
            city_coords = Coordinates.objects.create(lat=city["latitude"], lng=city["longitude"])
            _usercity = City.objects.create(name=city["city"], verbose_name=city["city"], country=_country, coordinates=city_coords)
    return _usercity

def distanceInMetersFromCoordinates(lat1, lat2, lng1, lng2):
    lat1 = lat1 * math.pi / 180
    lat2 = lat2 * math.pi / 180
    lng1 = lng1 * math.pi / 180
    lng2 = lng2 * math.pi / 180
    dlng = abs(lng1 - lng2)
    dlat = abs(lat1 - lat2)
    a = math.sin(dlat/2)**2 + math.cos(lat1) * math.cos(lat2) * math.sin(dlng/2)**2
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1-a))
    R = 6371000
    return R * c
