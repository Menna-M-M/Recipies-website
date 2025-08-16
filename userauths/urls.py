from django.urls import path
from . import views

app_name = "userauths"
urlpatterns = [
    path("sign-up/" , views.register_view, name="sign-up"),
    path("sign-in/" , views.login_view, name="sign-in"),
    path("sign-out/" , views.logout_view, name="sign-out"),
    path('userprofile/', views.user_profile, name='userprofile'),
    path('save_profile/', views.save_profile, name='save_profile'),
    path('adprofile/',views.adprofile,name='adprofile'),
    path('update-name/', views.UpdateNameView.as_view(), name='update_name'),
]