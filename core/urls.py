from django.urls import path
from . import views

app_name = "core"

urlpatterns = [
    path("", views.firstscreen, name="home"),
    path("about/", views.about, name="about"),
    path("collage/", views.collage, name="collage"),

    
    
    
]
