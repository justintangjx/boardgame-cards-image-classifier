import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [originalText, nextStateChange] = useState('hehe FIRST-IN')
  return (
    <View style={styles.container}>
      <Text>{originalText}</Text>
      <Button title="change text" onPress={ () => nextStateChange('changed to LALALAND') }/>

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
