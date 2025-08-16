from django.urls import path
from . import views
app_name = "recipies"
urlpatterns = [
    path('userprofile/', views.user_profile, name='userprofile'),
    path('save_profile/', views.save_profile, name='save_profile'),
    path('userprofile/favourites/', views.favourites, name='favs'),
]