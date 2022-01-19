from django.db.models.base import ModelStateFieldsCacheDescriptor
from django.db import models
from django.contrib.auth.models import User
import uuid

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
    username = models.CharField(max_length=128, null=True, unique=True)
    email = models.EmailField(max_length=128, null=True, unique=True)
    color = models.TextField(max_length=7, null=True, blank=True)
    
    profile_image = models.ImageField(blank=True, upload_to='profiles/', default='profiles/user-default.png')

    created = models.DateTimeField(auto_now_add=True)
    id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True, editable=False)

    def __str__(self):
        return str(self.username)