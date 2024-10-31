# api/urls.py
from django.urls import path
from .views import MarkdownView

urlpatterns = [
    path('markdown/<str:file_name>/', MarkdownView.as_view(), name='markdown'),
]
