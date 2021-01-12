import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native';
import { EColor } from '../config/colors';

function WelcomeScreen() {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/background.jpg')}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')} />
                <Text>Sell What You Don't Need</Text>
            </View>
            <View style={styles.loginButton} />
            <View style={styles.registerButton} />
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: EColor.PRIMARY,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: EColor.SECONDARY,
    },
});

export default WelcomeScreen;