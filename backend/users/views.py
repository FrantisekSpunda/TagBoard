from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.models import User
from django.contrib import messages

from .forms import CustomUserCreationForm



def loginUser(request):
    
    if request.user.is_authenticated:
        return redirect('board')

    if request.method == 'POST':
        username = request.POST['username'].lower()
        password = request.POST['password']
        try:
            user = User.objects.get(username=username)
        except:
            messages.error(request, 'Username does not exist.')
        
        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            messages.info(request, 'User was logged.')
            return redirect('board')
        else:
            messages.error(request, 'Username or password is incorret.')

    context = {'page': 'login'}
    return render(request, 'users/login_register.html', context)

def registerUser(request):
    form = CustomUserCreationForm()

    if request.user.is_authenticated:
        return redirect('board')

    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.username = user.username.lower()
            user.save()
                       
            messages.success(request, 'User account was created!')
            login(request, user)
            return redirect('board')

    context = {'form':form, 'page': 'register'}
    return render(request, 'users/login_register.html', context)

def logoutUser(request):
    logout(request)
    messages.info(request, 'User was logged out!')
    return redirect('login')