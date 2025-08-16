from django.db import models
from django.contrib.auth.models import User
from django.conf import settings

# Create your models here.

class Recipie (models.Model):
    y=[
        ('g', 'g'),
        ('mg', 'mg')
    ]
    title= models.CharField(max_length=100)
    image= models.ImageField(upload_to='photos/%y/%m/%d')
    is_fav = models.BooleanField(default=False)
    serving_Hours = models.IntegerField(max_length=2, default=2)
    serving_minutes = models.IntegerField(max_length=2, default=00)
    serving_seconds = models.IntegerField(max_length=2, default=00)
    method = models.TextField()
    calories = models.DecimalField(max_digits=5, decimal_places=2, default=1)
    calories_unit = models.CharField(max_length=10, choices=y, default='g')
    fats = models.DecimalField(max_digits=5, decimal_places=2,default=1)
    fats_unit = models.CharField(max_length=10, choices=y, default='g')
    carbs = models.DecimalField(max_digits=5, decimal_places=2,default=1)
    carbs_unit = models.CharField(max_length=10, choices=y, default='g')
    protein = models.DecimalField(max_digits=5, decimal_places=2,default=1)
    protein_unit = models.CharField(max_length=10, choices=y, default='g')
    def __str__ (self):
        return self.title
    

# class Recipiedetails (models.Model):
#     servingTime= models.TimeField()
#     method= models.TextField()
#     ingredient_quantity = models.CharField(max_length=100)
#     ingredient_itself= models.CharField(max_length=100)
#     calories = models.DecimalField(max_digits=5, decimal_places=2)
#     fats = models.DecimalField(max_digits=5, decimal_places=2)
#     carbs = models.DecimalField(max_digits=5, decimal_places=2)
#     protein = models.DecimalField(max_digits=5, decimal_places=2)



class Ingredient(models.Model):
    x=[
        ('teaspoon', 'teaspoon'),
        ('clove', 'clove'),
        ('ounce', 'ounce'),
        ('kg', 'kg'),
        ('piece', 'piece')
    ]
    recipe = models.ForeignKey(Recipie, related_name='ingredients', on_delete=models.CASCADE)
    Ingredient_quantity = models.CharField(max_length=100)
    Ingredient_unit = models.CharField(max_length=20, choices=x, default='teaspoon')
    Ingredient_itself = models.CharField(max_length=100)
    def __str__ (self):
        return self.recipe.title + ' ingredient'

    
class User_Profile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='profile', null = True, default=1)
    about_me = models.TextField(blank=True)
    email = models.EmailField(blank=True)
    location = models.CharField(max_length=100, blank=True)
    facebook = models.URLField(blank=True)
    twitter = models.URLField(blank=True)
    instagram = models.URLField(blank=True)
    profile_picture = models.ImageField(upload_to='profile_pictures/', blank=True)
    joined_date = models.DateField(auto_now_add=True)
    

    def __str__(self):
        return self.user.username