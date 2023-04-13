import React, {useState, useCallback} from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [fontsLoaded] = Font.useFonts({
        'Lobster-Regular': require('../assets/fonts/Roboto/Lobster-Regular.ttf')
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (<View onLayout={onLayoutRootView}><Text style={styles.text}>Работай уже!</Text></View>)
}

const styles = StyleSheet.create({

    text: {
        color: '#fff',
        fontSize: 45,
        fontFamily: 'Lobster',
        justifyContent: 'center',
    }
})