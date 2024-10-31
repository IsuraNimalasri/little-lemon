import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { View,StyleSheet } from 'react-native';
import MarkdownRenderer from '@/components/MarkdownRendererv1';
import ParallaxScrollView from '@/components/ParallaxScrollView';

export default function Home() {

  

  return (
    <ParallaxScrollView 
    headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
    headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}
    >
    
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10 }}>
     
    <MarkdownRenderer pageName="biology_cell" />
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

