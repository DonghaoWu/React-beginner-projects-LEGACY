import React, { Component } from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import { Navigator, Route } from "./Navigator";

const Screen1 = props => (
  <View style={[styles.screen, { backgroundColor: "#59C9A5" }]}>
    <Text>This is Screen 1</Text>
    <Button
      title="Go to Screen 2"
      onPress={() => props.navigator.push("Screen2")}
    />
    <Button title="Pop" onPress={() => props.navigator.pop()} />
  </View>
);

const Screen2 = props => (
  <View style={[styles.screen, { backgroundColor: "#233958" }]}>
    <Text style={{ color: "white" }}>This is Screen 2</Text>
    <Button
      title="Go to Screen 3"
      onPress={() => props.navigator.push("Screen3")}
    />
    <Button title="Back to Screen 1" onPress={() => props.navigator.pop()} />
  </View>
);

const Screen3 = props => (
  <View style={[styles.screen, { backgroundColor: "#B9E3C6" }]}>
    <Text>This is Screen 3</Text>
    <Button title="Back to Screen 2" onPress={() => props.navigator.pop()} />
  </View>
);

export default class App extends Component {
  render() {
    return (
      <Navigator>
        <Route name="Screen1" component={Screen1} />
        <Route name="Screen2" component={Screen2} />
        <Route name="Screen3" component={Screen3} />
      </Navigator>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
