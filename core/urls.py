from django.urls import path
from .views import index
from .views import adminhome

app_name = "core"
urlpatterns = [
    path("" , index, name="index"),
    path("adminhome/", adminhome, name="adminhome"),
]