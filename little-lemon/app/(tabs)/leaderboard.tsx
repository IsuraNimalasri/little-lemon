import { View, Text, StyleSheet } from 'react-native';

export default function LeadScreen() {
  return (
    <View style={styles.container}>
      <Text>LeaderBoard</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});