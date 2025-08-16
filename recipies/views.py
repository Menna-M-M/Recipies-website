from django.shortcuts import render, redirect
from django.contrib import messages
from django.urls import reverse
from .models import Recipie
from .models import Ingredient
from .models import User_Profile
from django.http import JsonResponse
from django.http import HttpResponse
from django.views.decorators.http import require_POST
from django.shortcuts import get_object_or_404
# Create your views here.
'app/model_viewtype'
'recipies/eachrecipie'

def userhome (request):
    return render (request, 'recipies/userhome.html',  {'recipies': Recipie.objects.all()})

def eachrecipie(request, title):
    recipe = get_object_or_404(Recipie, title=title)
    ingredients = Ingredient.objects.filter(recipe=recipe)
    return render(request, 'recipies/eachrecipie.html', {'recipe': recipe, 'ingredients': ingredients})

def toggle_favorites(request, title):
    recipie= Recipie.objects.get(title=title)
    recipie.is_fav = True
    recipie.save()
    messages.add_message(request, messages.SUCCESS,"This recipie is added to your favourites successfully!" )
    return redirect (reverse ('recipies:userhome'))

def not_favorites(request, title):
    recipie= Recipie.objects.get(title=title)
    recipie.is_fav = False
    recipie.save()
    messages.add_message(request, messages.SUCCESS,"This recipie is added to your favourites successfully!" )
    return redirect (reverse ('recipies:userhome'))

def favourites(request):
    fav_recipes = Recipie.objects.filter(is_fav=True)

    if fav_recipes.exists():
        # Pass the favorite recipes to the template if there are any
        return render(request, 'recipies/favorites.html', {'recipes': fav_recipes})
    else:
        # If there are no favorite recipes, render the template without passing any data
        return render(request, 'recipies/favorites.html')
           
def user_profile(request):
    return render(request, 'recipies/userindex.html')

def save_profile(request):
    if request.method == 'POST':
        user_profile = request.user.profile
        user_profile.about_me = request.POST.get('about_me')
        user_profile.email = request.POST.get('email')
        user_profile.location = request.POST.get('location')
        user_profile.facebook = request.POST.get('facebook')
        user_profile.twitter = request.POST.get('twitter')
        user_profile.instagram = request.POST.get('instagram')
        if 'profile_picture' in request.FILES:
            user_profile.profile_picture = request.FILES['profile_picture']
        user_profile.save()
        return redirect('recipies:userprofile')
        user_profile.save()
    return render(request, 'recipies/userindex.html')