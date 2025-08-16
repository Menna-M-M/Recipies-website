from django.urls import path 
from . import views
from .views import delete_recipe
from django.views.decorators.csrf import csrf_exempt

app_name = "home"
#/2
urlpatterns = [
    path('userhome/', views.userhome, name='userhome'),#''34an awal ma yd5ol al app user y display user home directly no need to type user/userhome I want it to be the main page for user app
    path('recipe/<str:title>/', views.eachrecipie, name='eachrecipie'),  # Add this line
    path('eachrecipieadmin/<str:title>/', views.eachrecipieadmin, name='eachrecipieadmin'),  # Add this line
    path('toggle_favorites/', views.toggle_favorites, name='toggle_favorites'),
    path('favorites/', views.favourites, name='favs'),
    path('toggle_favorites/<str:title>/', views.toggle_favorites, name='toggle_favorites'),
    path('not_favorites/<str:title>/', views.not_favorites, name='not_favorites'),
    path('adminpage/', views.index,name='adminpage'),
    path('edit/<int:recipe_id>/', views.edit, name='edit'),
    path('delete_recipe/<int:recipe_id>/',  views.delete_recipe, name='delete_recipe'),
    path('add/',views.addrecipe,name='add'),
    path('adding/',views.adding,name='adding'),
    path('home/',views.adminhome,name='adminhome'),
    path ('search-bar/', csrf_exempt(views.search_bar), name ='searchbar')
]