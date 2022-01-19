from django.db.models.base import ModelStateFieldsCacheDescriptor
from django.db import models
from django.db.models.deletion import CASCADE
from users.models import Profile
import uuid

class Event(models.Model):
    owner = models.ForeignKey(Profile, null=True, blank=True, on_delete=CASCADE)
    name = models.CharField(max_length=64)
    date = models.DateField(null=True)
    time = models.TimeField(null=True)

    created = models.DateTimeField(auto_now_add=True)
    id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True, editable=False)

    def __str__(self):
        return str(self.name)

class Note(models.Model):
    owner = models.ForeignKey(Profile, null=True, blank=True, on_delete=CASCADE)
    name = models.CharField(max_length=40)
    text = models.TextField(null=True)

    created = models.DateTimeField(auto_now_add=True)
    id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True, editable=False)
    
    def __str__(self):
        return str(self.name)