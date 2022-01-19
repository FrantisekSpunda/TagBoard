from django import forms
from django.forms import ModelForm, fields
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from .models import Profile

class CustomUserCreationForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']

    def __init__(self, *args, **kwargs):
        super(CustomUserCreationForm, self).__init__(*args, **kwargs)

        for name,field in self.fields.items():
            field.widget.attrs.update({'class':'layout--input', 'type': 'text'})

        for key in self.fields:
            self.fields[key].required = True

        self.fields['username'].widget.attrs.update({'placeholder':'pepa.mlaticka'})
        self.fields['email'].widget.attrs.update({'placeholder':'pepamlaticka@email.com', 'type': 'email'})
        self.fields['password1'].widget.attrs.update({'placeholder':'*********', 'type': 'password'})
        self.fields['password2'].widget.attrs.update({'placeholder':'*********', 'type': 'password'})

class ProfileForm(ModelForm):
    class Meta:
        model = Profile
        fields = '__all__'
        exclude = ['user']

    def __init__(self, *args, **kwargs):
        super(ProfileForm, self).__init__(*args, **kwargs)

        for name,field in self.fields.items():
            field.widget.attrs.update({'class':'layout--input', 'placeholder': name, 'type': 'text'})