from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from .forms import EventForm, NoteForm

@login_required(login_url='login')
def board(request):
    event_form = EventForm()
    note_form = NoteForm()

    events = request.user.profile.event_set.all()
    notes = request.user.profile.note_set.all()

    context = {'events': events, 'notes': notes, 'event_form': event_form, 'note_form': note_form}
    return render(request, 'notepad/board.html', context)

@login_required(login_url='login')
def addEvent(request):
    if request.method == 'POST':
        event = EventForm(request.POST)
        if event.is_valid():
            event = event.save(commit=False)
            event.owner = request.user.profile
            event.save()
            messages.success(request, 'Event '+ event.name + ' was created!')
        else:
            messages.error(request, 'Data in form is not valid!')

    return redirect('board')

@login_required(login_url='login')
def editEvent(request, pk):
    event = request.user.profile.event_set.get(id=pk)
    print(request.POST)
    if request.method == 'POST':
        form = EventForm(request.POST, instance=event)
        if form.is_valid():
            form.save()
        else:
            messages.error(request, 'Data in form is not valid!')
    return redirect('board')

@login_required(login_url='login')
def removeEvent(request, pk):
    event = request.user.profile.event_set.get(id=pk)
    name = event.name
    event.delete()
    messages.success(request, 'Event '+ event.name +' was deleted!')
    return redirect('board')

@login_required(login_url='login')
def addNote(request):
    if request.method == 'POST':
        event = NoteForm(request.POST)
        if event.is_valid():
            event = event.save(commit=False)
            event.owner = request.user.profile
            event.save()
        else:
            messages.error(request, 'Data in form is not valid!')
    return redirect('board')

@login_required(login_url='login')
def removeNote(request, pk):
    note = request.user.profile.note_set.get(id=pk)
    name = note.name
    note.delete()
    messages.success(request, 'Note '+ note.name +' was deleted!')
    return redirect('board')

@login_required(login_url='login')
def editNote(request, pk):
    note = request.user.profile.note_set.get(id=pk)
    print(request.POST)
    if request.method == 'POST':
        form = NoteForm(request.POST, instance=note)
        if form.is_valid():
            form.save()
        else:
            messages.error(request, 'Data in form is not valid!')
    return redirect('board')