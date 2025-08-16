from django.contrib import admin
from .models import Recipie
from .models import Ingredient
from .models import User_Profile

# Register your models here.

admin.site.register(Recipie)
admin.site.register(Ingredient)
@admin.register(User_Profile)
class UserProfileAdmin(admin.ModelAdmin):
   list_display = ('user', 'email', 'location', 'joined_date')
   search_fields = ('user__username', 'email','location')


