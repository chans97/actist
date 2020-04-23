from django.core.paginator import Paginator
import os
import requests, json
from django.contrib.auth.views import PasswordChangeView
from django.shortcuts import render, redirect, reverse
from django.urls import reverse_lazy
from django.views import View
from django.views.generic import (
    ListView,
    DetailView,
    View,
    UpdateView,
    CreateView,
    FormView,
)

from django.contrib.auth import authenticate, login, logout
from django.core.files.base import ContentFile
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from . import models
from django.contrib.messages.views import SuccessMessageMixin
import urllib.request
from django.db.models import Q
from django.http import HttpResponse
import math


def firstscreen(request):
    return render(
        request, "screen/firstscreen.html", 
    )

def about(request):
    return render(
        request, "screen/about.html", 
    )

def collage(request):
    return render(
        request, "screen/collage.html", 
    )

def example(request):
    return render(
        request, "screen/example.html", 
    )