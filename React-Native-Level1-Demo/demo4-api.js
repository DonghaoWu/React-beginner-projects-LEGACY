import React, { Component } from "react";
import { AppRegistry, FlatList, StyleSheet, Text, View } from "react-native";

export default class FlatListBasics extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: []
    };
  }

  displayItems = item => {
    return <Text style={styles.item}>{item.name}</Text>;
  };

  async componentDidMount() {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=50`);
      const data = await res.json();
      console.log(data);
      this.setState({
        pokemons: data.results
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.pokemons}
          renderItem={({ item }) => this.displayItems(item)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    textAlign: "center"
  }
});

// skip this line if using Create React Native App
AppRegistry.registerComponent("AwesomeProject", () => FlatListBasics);
