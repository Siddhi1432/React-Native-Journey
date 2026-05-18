import { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

export default function App() {

  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Name 👇</Text>

      <TextInput
        style={styles.input}
        placeholder="Type here..."
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.output}>
        Hello {name} 👋
      </Text>

      <Button title="Clear" onPress={() => setName("")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    width: 200,
    padding: 10,
    marginBottom: 10,
  },
  output: {
    fontSize: 18,
    marginBottom: 10,
  },
});