import { StatusBar } from 'expo-status-bar';
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simple React Native App ☘️ </Text>
      <TouchableOpacity onPress={() => Linking.openURL('https://github.com/ccosnett')}>
        <Text style={styles.link}>github.com/ccosnett</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d4f1c4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  link: {
    fontSize: 16,
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
});
