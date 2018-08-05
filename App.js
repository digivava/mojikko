import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 50, fontSize: 50 }}>バス</Text>
        <TextInput
          style={{ width: 200, height: 50, borderColor: 'gray', borderWidth: 1, textAlign: 'center', fontSize: 30 }}
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
