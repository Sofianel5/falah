from django.contrib.gis.geoip2 import GeoIP2
from falahprograms.models import City, Coordinates, Venue
import math  

def get_client_ip(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip

def getCityFromRequest(request):
    try:
        user = request.user
        ip = get_client_ip(request)
        g = GeoIP2()
        city = g.city(ip)
        print(city)
        if city is not None:
            try:
                _usercity = City.objects.get(name=city)
            except City.DoesNotExist:
                _country = g.country(ip)
                _usercity = City.objects.create(name=city, verbose_name=city, country_name=_country["country_name"], country_code=_country["country_code"])

    except Exception as e:
        print(e)
        return

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