from django.shortcuts import render
from .models import ProjectModel,BlogModel
# Create your views here.


def home(request):
    return render(request,'myapp/home.html')


def projects(request):
    data = ProjectModel.objects.all()
    context = {'data':data}
    return render(request,'myapp/projects.html',context=context)


from django.core.mail import send_mail
from django.conf import settings

def contact(request):
    message_sent = False
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')
        full_message = f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}"
        send_mail(
            subject=f"Portfolio Contact Form from {name}",
            message=full_message,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[settings.CONTACT_EMAIL],
            fail_silently=False,
        )
        message_sent = True
    return render(request, 'myapp/contact.html', {'message_sent': message_sent})



def blog(request):
    data = BlogModel.objects.all()
    context = {'data': data}
    return render(request, 'myapp/blog.html', context=context)


def read_blog(request, title:str):
    from django.shortcuts import get_object_or_404
    blog = get_object_or_404(BlogModel, blog_title=title)
    return render(request, 'myapp/read_blog.html', {'blog': blog})