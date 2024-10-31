import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import Markdown from 'react-native-markdown-display';

interface MarkdownRendererProps {
  pageName?: string; // Optional page name for fetching content
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ pageName }) => {
  const [content, setContent] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Default fallback content if pageName is not provided or fetch fails
  const defaultContent = `
# Content Not Available

It seems the content you're looking for could not be loaded.
Please try again later or check your connection.

![](https://blog.fluidui.com/assets/images/posts/imageedit_1_9273372713.png)
  `;

  useEffect(() => {
    const fetchContent = async () => {
      if (!pageName) {
        setContent(defaultContent);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await fetch(`http://192.168.0.25:8000/api/markdown/${pageName}.md`);
        if (!response.ok) throw new Error('Content not found');

        const data = await response.json();
        setContent(data.content);
      } catch (error) {
        console.error('Error fetching content:', error);
        setContent(defaultContent);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [pageName]);

  if (loading) {
    return <ActivityIndicator size="large" color="#1D4ED8" />;
  }

  return (
    <View style={styles.container}>
      <Markdown style={markdownStyles}>{content || defaultContent}</Markdown>
    </View>
  );
};

export default MarkdownRenderer;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
  },
});

const markdownStyles = {
  body: {
    color: '#333',
    fontSize: 16,
    lineHeight: 24,
  },
  heading1: {
    fontSize: 24,
    color: '#1D4ED8',
    marginBottom: 10,
  },
  heading2: {
    fontSize: 20,
    color: '#1D4ED8',
    marginBottom: 8,
  },
  link: {
    color: '#1E90FF',
  },
  listItem: {
    marginVertical: 4,
  },
};
