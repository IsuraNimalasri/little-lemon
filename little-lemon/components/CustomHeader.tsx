// CustomHeader.tsx
import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function CustomHeader() {
  return (
    <View style={styles.headerContainer}>
      {/* Logo on the left */}
      <Image source={require('@/assets/images/icon.png')} style={styles.logo} />

      {/* Notification and Profile Picture on the right */}
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image source={require('@/assets/images/icon.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('@/assets/images/icon.png')} style={styles.profilePicture} />
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
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#f5f5f5', // Change color as desired
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  logo: {
    width: 100,
    height: 30,
    resizeMode: 'contain',
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

