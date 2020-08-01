import React, { useState, useEffect } from "react";
import { Animated, Text, View, StyleSheet } from "react-native";

const FadeInVIew = props => {
  const [fadeAnim, changeFade] = useState(new Animated.Value(0));

  useEffect(() =>
    Animated.timing(fadeAnim, { toValue: 1, duration: 10000 }).start()
  );

  return (
    <Animated.View
      style={{
        width: 250,
        height: 50,
        backgroundColor: "blue",
        opacity: fadeAnim,
        transform: [
          {
            translateY: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [150, 0]
            })
          }
        ]
      }}
    >
      {props.children}
    </Animated.View>
  );
};

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <FadeInVIew>
          <Text style={{ fontSize: 28, textAlign: "center", margin: 18 }}>
            Fadding in
          </Text>
        </FadeInVIew>
      </View>
    );
  }
}
