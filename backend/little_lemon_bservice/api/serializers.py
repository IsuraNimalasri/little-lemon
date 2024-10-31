# api/serializers.py
from rest_framework import serializers

class MarkdownSerializer(serializers.Serializer):
    page_name = serializers.CharField()
    content = serializers.CharField()
