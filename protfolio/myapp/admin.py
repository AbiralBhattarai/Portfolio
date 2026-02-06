from django.contrib import admin
from .models import ProjectModel, BlogModel

@admin.register(ProjectModel)
class ProjectModelAdmin(admin.ModelAdmin):
	list_display = [field.name for field in ProjectModel._meta.fields]

@admin.register(BlogModel)
class BlogModelAdmin(admin.ModelAdmin):
	list_display = ('id','blog_title', 'blog_content', 'author')