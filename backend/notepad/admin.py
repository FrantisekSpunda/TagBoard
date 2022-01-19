from django.contrib import admin

from .models import Note, Event

admin.site.register(Event)
admin.site.register(Note)