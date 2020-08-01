import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>First</Text>
        <Text style={styles.paragraph}>Second</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8
  },
  paragraph: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center"
  }
});
