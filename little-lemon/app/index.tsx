import { View, StyleSheet } from "react-native";

import Button from '@/components/Button'; 
import ImageViewer from '@/components/ImageViewer';

const PlaceholderImage = require("@/assets/images/user_bar.png");

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a photo" />
        <Button label="Use this photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 28,
  },
  /* @tutinfo Add the styles the following styles. */
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
