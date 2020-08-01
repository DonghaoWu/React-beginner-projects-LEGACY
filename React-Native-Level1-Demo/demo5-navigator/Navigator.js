import React, { Component } from "react";
import { StyleSheet, View, Button } from "react-native";
export const Route = () => null;
const buildScenrConfig = (children = []) => {
  const config = {};
  children.forEach(child => {
    config[child.props.name] = {
      key: child.props.name,
      component: child.props.component
    };
  });
  return config;
};
export class Navigator extends Component {
  constructor(props) {
    super(props);
    const sceneConfig = buildScenrConfig(props.children);
    const initialSceneName = props.children[0].props.name;

    this.state = {
      sceneConfig: sceneConfig,
      stack: [sceneConfig[initialSceneName]]
    };
  }

  handlePush = sceneName => {
    this.setState(prevState => ({
      ...prevState,
      stack: [...prevState.stack, prevState.sceneConfig[sceneName]]
    }));
  };

  handlePop = () => {
    this.setState(prevState => {
      const { stack } = prevState;
      if (stack.length > 1) {
        return {
          stack: stack.slice(0, stack.length - 1)
        };
      }
      return prevState;
    });
  };
  render() {
    return (
      <View style={styles.container}>
        {this.state.stack.map((scene, index) => {
          const CurrentScene = scene.component;
          return (
            <View style={styles.scene}>
              <CurrentScene
                key={scene.key}
                navigator={{ push: this.handlePush, pop: this.handlePop }}
              />
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  scene: {
    ...StyleSheet.absoluteFillObject,
    flex: 1
  }
});
