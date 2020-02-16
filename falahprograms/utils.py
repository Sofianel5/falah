import imghdr
import base64 
from datetime import datetime
from django.utils import timezone
from falahprograms.models import Program


PROGRAM_LIST_LENGTH = 5

def verifyImage(imgData):
    sample = base64.b64decode(imgData[:44])
    for tf in imghdr.tests:
        res = tf(sample, None)
        if res:
            return res

def getSubtitle(sessions):
    i = 0
    while i < len(sessions):
        if sessions[i].start > timezone.now():
            return sessions[0].start.strftime("%a, %b %d, %I %p")
        i += 1
    return "No sessions scheduled |"

def getSuggestedPrograms(user):
    interests = user.interest_set.all().values_list('subject', flat=True)
    programs = Program.objects.filter(primary_subject__in=interests, venue__city__value=user.city)
    return programs

def getProgramList(user):
    sug_programs = getSuggestedPrograms(user)
    if len(sug_programs) > PROGRAM_LIST_LENGTH:
        return sug_programs 
    else:
        return sug_programs + Program.objects.filter()[:PROGRAM_LIST_LENGTH-len(sug_programs)]