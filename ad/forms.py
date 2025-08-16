from django import forms
from .models import Recipie, Ingredient

class RecipieForm(forms.ModelForm):
    class Meta:
        model = Recipie
        fields = ['title', 'image', 'prep', 'cook', 'total','course','serving',
                  'method', 'calories', 'calories_unit', 'fats', 'fats_unit', 'carbs', 'carbs_unit',
                  'protein', 'protien_unit']

class IngredientForm(forms.ModelForm):
    class Meta:
        model = Ingredient
        fields = ['Ingredient_quantity', 'Ingredient_unit', 'Ingredient_itself']
