import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [name, setFirstName] = useState('');

  return (
    <View style={styles.container}>
      <Text style={{ margin:10 }}>Welcome to the best React Native project.</Text>

      <TextInput
        style={{ width: 250, height: 40, borderColor: "gray", borderWidth: 1, margin:10 }}
        placeholder="Enter your name"
        onChangeText={text => setFirstName(text)}
        value={name}
      />
      <StatusBar style="auto" />


      <Button title="Check your Name" onPress={() => {
        if (name === '') {
          alert('Please enter your name');
        } else {
          alert(`Hello ${name}`);
        }
        }
      }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
