import React, {useEffect, useState} from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Text, StyleSheet } from 'react-native';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import ParallaxScrollView from '@/components/ParallaxScrollView';


const markdownContent = `
# Welcome to the Markdown Renderer

This is an example of **bold text**, *italic text*, and a [link](https://www.example.com).

## Lists

- Item 1
- Item 2
- Item 3

![](https://media.istockphoto.com/id/1405605956/vector/anatomy-of-animal-cell.jpg?s=612x612&w=0&k=20&c=cyVt6CT3Sr0R7MRvSe4C3wNYtYnynNguHlhZcF4bxmY=)

> This is a blockquote.
`; 


export default function Home() {

  

  return (
    <ParallaxScrollView 
    headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
    // headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}
    >
    
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10 }}>
     
      <MarkdownRenderer content={markdownContent} />
      <MarkdownRenderer content={markdownContent} />
      <MarkdownRenderer content={markdownContent} />
      <MarkdownRenderer content={markdownContent} />
    </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});