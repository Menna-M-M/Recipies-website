from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'core/index.html')
def userhome(request):
    return render(request, 'core/userhome.html')
def adminhome(request):
    return render(request, 'core/adminhome.html')
