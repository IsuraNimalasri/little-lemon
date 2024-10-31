# api/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .utils import convert_md_to_json
from .serializers import MarkdownSerializer

class MarkdownView(APIView):
    def get(self, request, file_name):
        data = convert_md_to_json(file_name)
        if "error" in data:
            return Response(data, status=status.HTTP_404_NOT_FOUND)

        serializer = MarkdownSerializer(data)
        return Response(serializer.data, status=status.HTTP_200_OK)
