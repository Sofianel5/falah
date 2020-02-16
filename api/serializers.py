from users.models import Account 
from falahprograms.models import Program, Venue, City, Coordinates
from rest_framework import serializers
from djoser.serializers import UserCreateSerializer as BaseUserRegistrationSerializer

class UserRegistrationSerializer(BaseUserRegistrationSerializer):
    class Meta(BaseUserRegistrationSerializer.Meta):
        fields = ('email', 'first_name', 'last_name', 'password')

class CoordinatesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Coordinates
        fields = "__all__"

class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = "__all__"
        depth = 1

class VenueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Venue 
        fields = "__all__"
        depth = 2 

class ExternalAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account 
        exclude = ["password", "last_login"]

class InternalAccountSerializer(serializers.ModelSerializer):
    #suggested_programs = program_set.all()
    class Meta:
        model = Account
        exclude = ["password", "last_login"]

class ProgramSerializer(serializers.ModelSerializer):
    creator = ExternalAccountSerializer()
    class Meta:
        model = Program
        exclude = ['attendees']
        depth = 3