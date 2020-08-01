import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';


export default function App() {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Text>you click {count} times</Text>
            <Button
                onPress={() => setCount(count + 1)}
                title='click me'
                color='red'
                accessibilityLabel='click this button'
            />
            <Button
                onPress={() => setCount(0)}
                title='reset'
                color='blue'
                accessibilityLabel='click this button'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})