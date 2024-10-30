import React from 'react';
import { View, StyleSheet } from 'react-native';
import Markdown from 'react-native-markdown-display';

interface MarkdownRendererProps {
  content: string; // Markdown content to render
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    
    <View style={styles.container}>
      <Markdown style={markdownStyles}>{content}</Markdown>
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
