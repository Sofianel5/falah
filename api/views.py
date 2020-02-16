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
from .serializers import ProgramSerializer

class ProgramsView(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request):
        programs = request.user.programs.all()
        programs = [ProgramSerializer(program).data for program in programs]
        return JsonResponse(programs, safe=False)


