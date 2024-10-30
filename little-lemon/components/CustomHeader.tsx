// CustomHeader.tsx
import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function CustomHeader() {
  return (
    <View style={styles.headerContainer}>
      {/* Logo on the left */}
      <Image source={require('@/assets/images/banner.png')} style={styles.logo} />

      {/* Notification and Profile Picture on the right */}
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image source={require('@/assets/images/react-logo.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('@/assets/images/user.png')} style={styles.profilePicture} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#ffffff', // Change color as desired
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  logo: {
    width: 120,
    height: 70,
    resizeMode: 'stretch',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 15,
  },
  profilePicture: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginLeft: 15,
  },
});

