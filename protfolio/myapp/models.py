from django.db import models

# Create your models here.


class ProjectModel(models.Model):
    project_name = models.CharField(max_length=200)
    project_description = models.TextField()
    project_link = models.TextField()



class BlogModel(models.Model):
    blog_title = models.CharField(max_length=200)
    blog_content = models.TextField()
    author = models.CharField(max_length=100)
    date_published = models.DateTimeField(auto_now_add=True)
    last_edited = models.DateTimeField(auto_now=True)