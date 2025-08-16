from django.shortcuts import redirect, render
from .forms import UserRegisterForm
from django.contrib.auth import login,authenticate,logout
from django.contrib import messages
from django.conf import settings
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import login_required
from django.views import View
import json

User = settings.AUTH_USER_MODEL

def register_view(request):
    if request.method == "POST":
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            new_user = form.save()
            username= form.cleaned_data.get("username")
            new_user = authenticate(username=form.cleaned_data['email'],password = form.cleaned_data['password1'])
            login(request , new_user)
            return redirect('home:userhome') 
    else:
        form = UserRegisterForm()

    context = {
        'form':form,
    }
    return render(request, "userauths/sign-up.html" , context)


def login_view(request):

    #if request.user.is_authenticated:
     #    messages.warning(request, "you are already logged in")
     #   return redirect("core:index")
    if request.method == "POST":
        email = request.POST.get("email")
        password = request.POST.get("password")
        
        try:
            user = User.objects.get(email=email , password=password)
        except:
            messages.warning(request, f" ")
        
        user = authenticate(request, email=email, password=password)

        if user is not None:
            request.session['user_id'] = user.id
            login(request, user)
            if user.is_superuser:
                return redirect('home:adminpage')  # Redirect admin to admin page
            else:
                return redirect('home:userhome')    # Redirect normal user to core page
        else:
            messages.warning(request, "user doesn't exist, create an account")

    return render(request, "userauths/sign-in.html")



#def login_view(request):

    #if request.user.is_authenticated:
     #    messages.warning(request, "you are already logged in")
     #   return redirect("core:index")
    if request.method == "POST":
        email = request.POST.get("email")
        password = request.POST.get("password")

        try:
            user = User.objects.get(email=email , password=password)
        except:
            messages.warning(request, f" ")
        
        user = authenticate(request, email=email, password=password)

        if user is not None:
            login(request, user)
            return redirect("core:index")
        else:
            messages.warning(request, "user doesn't exist, create an account")

    return render(request, "userauths/sign-in.html")


def logout_view(request):
    logout(request)
    messages.success(request, "you logged out.")
    return redirect("userauths:sign-in")


def user_profile(request):
    return render(request, 'recipies/userindex.html', {'user': request.user})

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

def adprofile(request):
    return render(request,'admin/adprofile.html', {'admin': request.user})



class UpdateNameView(View):
  @method_decorator(csrf_exempt)
  @method_decorator(login_required)
  def post(self, request):
        data = json.loads(request.body)
        new_name = data.get('new_name')

        if new_name:
            request.user.username = new_name
            request.user.save()
            return JsonResponse({'success': True})

        return JsonResponse({'success': False}, status=400)