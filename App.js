import { StyleSheet, Text, TextInput, View,Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Age</Text>
      <TextInput 
        keyboardType='numeric' 
      />
      <Text>Limits</Text>
      <Text></Text>
      <Button title="Calculate" />
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
