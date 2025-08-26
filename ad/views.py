from django.shortcuts import render , redirect, get_object_or_404
from .models import Recipie
from .models import Ingredient
from django.contrib import messages
from django.urls import reverse
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from .forms import RecipieForm
import json
from django.http import HttpResponseForbidden, JsonResponse
# Create your views here.
def userhome (request):
    return render (request, 'recipies/userhome.html',  {'recipies': Recipie.objects.all()})

def eachrecipie(request, title):
    recipe = get_object_or_404(Recipie, title=title)
    ingredients = Ingredient.objects.filter(Recipie_of_ingredient=title)
    return render(request, 'recipies/eachrecipie.html', {'recipe': recipe, 'ingredients': ingredients})

def eachrecipieadmin(request, title):
    recipe = get_object_or_404(Recipie, title=title)
    ingredients = Ingredient.objects.filter(Recipie_of_ingredient=title)
    return render(request, 'recipies/eachrecipieadmin.html', {'recipe': recipe, 'ingredients': ingredients})

def toggle_favorites(request, title):
    recipie= Recipie.objects.get(title=title)
    recipie.is_fav = True
    recipie.save()
    return redirect (reverse ('home:userhome'))

def not_favorites(request, title):
    recipie= Recipie.objects.get(title=title)
    recipie.is_fav = False
    recipie.save()
    return redirect (reverse ('home:userhome'))

def favourites(request):
    fav_recipes = Recipie.objects.filter(is_fav=True)

    if fav_recipes.exists():
        # Pass the favorite recipes to the template if there are any
        return render(request, 'recipies/favorites.html', {'recipes': fav_recipes})
    else:
        # If there are no favorite recipes, render the template without passing any data
        return render(request, 'recipies/favorites.html')

def index(request):
    return render(request,'admin/main.html',{'recipies':Recipie.objects.all()})

def delete_recipe(request, recipe_id):
    if request.method == "POST":
        if request.user.username == "demo_account": 
                messages.error(request, "🚫 Demo account cannot perform changes.")
                return redirect(request.META.get("HTTP_REFERER", "/"))
        recipe = get_object_or_404(Recipie, id=recipe_id)
        
        recipe.delete()
        return redirect('home:adminpage')  # Redirect to the admin page or any other page you want
    else:
        recipe = get_object_or_404(Recipie, id=recipe_id)
        return render(request, 'admin/delete.html', {'recipe_id': recipe_id})
    
def edit(request, recipe_id):
    recipe = get_object_or_404(Recipie, id=recipe_id)

    if request.method == "POST":
        if request.user.username == "demo_account": 
                messages.error(request, "🚫 Demo account cannot perform changes.")
                return redirect(request.META.get("HTTP_REFERER", "/"))
        form = RecipieForm(request.POST, request.FILES, instance=recipe)
        if form.is_valid():
            form.save()
            return redirect('home:adminpage')  # Redirect to a success page or any other page
    else:
        form = RecipieForm(instance=recipe)  # Pass the instance to the form

    context = {
        'form': form,
    }
    return render(request, 'admin/edit.html', context) 

def adminhome(request):
     context={
        'Recipie':Recipie.objects.all()
     }
     return render(request,'admin/adminpage.html',context) 

def addrecipe(request):
    if request.method == 'POST':
        # if request.user.username == "demo_account": 
        #         messages.error(request, "🚫 Demo account cannot perform changes.")
        #         return redirect(request.META.get("HTTP_REFERER", "/"))
        title = request.POST.get('recipename', '')
        ingredients = request.POST.get('ingredients', '')
        instructions = request.POST.get('instructions', '')
        protein = request.POST.get('protein', 0)
        authername = request.POST.get('authername', 'Unknown Author')
        serving = request.POST.get('serving', '1 serving')
        total = request.POST.get('total', '0 min')
        prep = request.POST.get('prep', '0 min')
        cook = request.POST.get('cook', '0 min')
        method=request.POST.get('method','no thing')
        fats=request.POST.get('fats')
        carbs=request.POST.get('carbs')
        calories=request.POST.get('calories')
        course = request.POST.get('course', 'main_course') 
        image=request.FILES.get('image', 'noimage.png') 
        # Create a Recipe instance
        recipe = Recipie(
            title=title,
            protein=protein,
            fats=fats,
            carbs=carbs,
            calories=calories,
            authername=authername,
            serving=serving,
            total=total,
            prep=prep,
            cook=cook,
            method=method,
            course=course,
            image=image
        )
        recipe.save()  
        url = reverse('home:adding') + f"?title={title}"
        return redirect(url)
    return render(request,'admin/addrecipe.html')

def adding(request):
        title = request.GET.get('title', '')  # Extract the title from query parameters

        if request.method == 'POST':
            if request.user.username == "demo_account": 
                messages.error(request, "🚫 Demo account cannot perform changes.")
                return redirect(request.META.get("HTTP_REFERER", "/"))
            # Process and save ingredients
            recipe = request.POST.get('recipe')
            quantities = request.POST.getlist('ingredient_quantity[]')
            units = request.POST.getlist('ingredient_unit[]')
            ingredients = request.POST.getlist('ingredient_itself[]')

            for quantity, unit, ingredient in zip(quantities, units, ingredients):
                Ingredient.objects.create(
                    Recipie_of_ingredient=recipe,
                    Ingredient_quantity=quantity,
                    Ingredient_unit=unit,
                    Ingredient_itself=ingredient
                )
            return redirect('home:adminpage')
        return render(request,'admin/addingredients.html', {'title': title})


def search_bar (request):
    if request.method == 'POST':
        search_str= json.loads(request.body).get('searchText')
        if (search_str):
            selected_recipies =  Recipie.objects.filter (
                title__icontains= search_str ) | Recipie.objects.filter (
                course__icontains = search_str) | Recipie.objects.filter (
                authername__icontains = search_str)
            selected_data = list(selected_recipies.values())  # Convert queryset to list of dictionaries
        else:
            selected_recipies = Recipie.objects.all()
            selected_data = list(selected_recipies.values())  # Convert queryset to list of dictionaries
        return JsonResponse(list (selected_data), safe=False)
       
