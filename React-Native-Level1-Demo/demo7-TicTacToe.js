import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      gameState: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
      currentPlayer: 1,
      gameEnd: false
    };
  }

  renderIcon = (row, column) => {
    const value = this.state.gameState[row][column];
    switch (value) {
      case 1:
        return <Icon name="close" style={styles.tileX} />;
      case -1:
        return <Icon name="circle-outline" style={styles.tileO} />;
      default:
        return <View />;
    }
  };

  onTilePress = (row, column) => {
    const value = this.state.gameState[row][column];
    if (value === 0 && !this.state.gameEnd) {
      const { currentPlayer } = this.state;

      let nextPlayer = 0;
      if (currentPlayer === 1) nextPlayer = -1;
      if (currentPlayer === -1) nextPlayer = 1;
      //let arr = this.state.gameState;
      let arr = [];
      for (let i = 0; i < this.state.gameState.length; i++) {
        arr.push([...this.state.gameState[i]]);
      }
      arr[row][column] = currentPlayer;

      this.setState({
        gameState: arr,
        currentPlayer: nextPlayer
      });
    }
  };

  getWinner = () => {
    let { gameState } = this.state;
    let sum = 0;
    let message = "";
    //check column
    for (let i = 0; i < 3; i++) {
      sum = gameState[i][0] + gameState[i][1] + gameState[i][2];
      if (sum === 3) message = `player 1 win`;
      else if (sum === -3) message = `player 2 win`;
    }
    //check row
    for (let i = 0; i < 3; i++) {
      sum = gameState[0][i] + gameState[1][i] + gameState[2][i];
      if (sum === 3) message = `player 1 win`;
      else if (sum === -3) message = `player 2 win`;
    }

    sum = gameState[0][0] + gameState[1][1] + gameState[2][2];
    if (sum === 3) message = `player 1 win`;
    else if (sum === -3) message = `player 2 win`;

    sum = gameState[2][0] + gameState[1][1] + gameState[0][2];
    if (sum === 3) message = `player 1 win`;
    else if (sum === -3) message = `player 2 win`;

    if (message !== "") {
      console.log("hello");
      Alert.alert(message);
      this.setState({
        gameState: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
        currentPlayer: 1
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View>{this.getWinner()}</View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.tile}
            onPress={() => this.onTilePress(0, 0)}
          >
            {this.renderIcon(0, 0)}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tile}
            onPress={() => this.onTilePress(0, 1)}
          >
            {this.renderIcon(0, 1)}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tile}
            onPress={() => this.onTilePress(0, 2)}
          >
            {this.renderIcon(0, 2)}
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.tile}
            onPress={() => this.onTilePress(1, 0)}
          >
            {this.renderIcon(1, 0)}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tile}
            onPress={() => this.onTilePress(1, 1)}
          >
            {this.renderIcon(1, 1)}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tile}
            onPress={() => this.onTilePress(1, 2)}
          >
            {this.renderIcon(1, 2)}
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.tile}
            onPress={() => this.onTilePress(2, 0)}
          >
            {this.renderIcon(2, 0)}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tile}
            onPress={() => this.onTilePress(2, 1)}
          >
            {this.renderIcon(2, 1)}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tile}
            onPress={() => this.onTilePress(2, 2)}
          >
            {this.renderIcon(2, 2)}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  },
  tile: {
    borderWidth: 1,
    width: 100,
    height: 100
  },
  tileX: {
    color: "red",
    fontSize: 95
  },
  tileO: {
    color: "green",
    fontSize: 95
  }
});
