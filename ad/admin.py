from django.contrib import admin

# Register your models here.

from .models import Recipie
from .models import Ingredient
# Register your models here.

admin.site.register(Recipie)
admin.site.register(Ingredient)