from django.urls import path
from . import views

urlpatterns = [
    path('', views.board, name='board'),

    path('add-event/', views.addEvent, name='add-event'),
    path('remove-event/<str:pk>/', views.removeEvent, name='remove-event'),
    path('edit-event/<str:pk>/', views.editEvent, name='edit-event'),

    path('add-note/', views.addNote, name='add-note'),
    path('remove-note/<str:pk>', views.removeNote, name='remove-note'),
    path('edit-note/<str:pk>', views.editNote, name='edit-note')
]