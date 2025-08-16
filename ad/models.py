from django.db import models
# Create your models here.

class Recipie (models.Model):
    y=[
        ('g', 'g'),
        ('mg', 'mg')
    ]
    COURSE_CHOICES = [
        ('main course', 'Main Course'),
        ('appetizers', 'Appetizers'),
        ('dessert', 'Dessert')
    ]
    authername = models.CharField(max_length=100, default="Unknown Author")
    title= models.CharField(max_length=100, null=True, blank=True)
    image= models.ImageField(upload_to='recipie/photos/')
    is_fav = models.BooleanField(default=False)
    serving = models.CharField(max_length=100, default="1 serving")
    total = models.CharField(max_length=100, default="0 min")
    prep = models.CharField(max_length=100, default="0 min")
    cook = models.CharField(max_length=100, default="0 min")
    serving_Hours = models.IntegerField(max_length=2, default=2)
    serving_minutes = models.IntegerField(max_length=2, default=00)
    serving_seconds = models.IntegerField(max_length=2, default=00)
    method = models.TextField(default='unknown')
    calories = models.DecimalField(max_digits=5, decimal_places=2, default=1)
    calories_unit = models.CharField(max_length=10, choices=y, default='g')
    fats = models.DecimalField(max_digits=5, decimal_places=2,default=1)
    fats_unit = models.CharField(max_length=10, choices=y, default='g')
    carbs = models.DecimalField(max_digits=5, decimal_places=2,default=1)
    carbs_unit = models.CharField(max_length=10, choices=y, default='g')
    protein = models.DecimalField(max_digits=5, decimal_places=2,default=1)
    protien_unit = models.CharField(max_length=10, choices=y, default='g')
    course = models.CharField(max_length=20, choices=COURSE_CHOICES, default='main_course')

    def _str_ (self):
        return self.title


class Ingredient(models.Model):
    x=[
        ('teaspoon', 'teaspoon'),
        ('clove', 'clove'),
        ('ounce', 'ounce'),
        ('kg', 'kg'),
        ('piece', 'piece')
    ]
    Recipie_of_ingredient = models.CharField(max_length=100, null=True, blank=True)
    Ingredient_quantity = models.CharField(max_length=100)
    Ingredient_unit = models.CharField(max_length=20, choices=x, default='teaspoon')
    Ingredient_itself = models.CharField(max_length=100)


