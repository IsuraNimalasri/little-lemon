# api/utils.py
import os
import markdown
from django.conf import settings

def convert_md_to_json(file_name):
    """
    Reads a Markdown file, converts it to JSON format, and returns it.
    """
    file_path = os.path.join(settings.BASE_DIR, 'markdown_files', file_name)
    
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()  # Read the raw Markdown content

            return {
                "page_name": file_name.replace(".md", ""),
                "content": content,  # Return raw Markdown content
            }
    except FileNotFoundError:
        return {"error": "File not found"}
