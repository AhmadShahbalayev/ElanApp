import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { EColor } from '../config/colors';

function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon} />
            <View style={styles.deleteIcon} />
            <Image
                resizeMode='contain'
                style={styles.image}
                source={require('../assets/chair.jpg')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: EColor.BLACK,
        flex: 1,
    },
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: EColor.PRIMARY,
        position: 'absolute',
        top: 40,
        left: 30,
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: EColor.SECONDARY,
        position: 'absolute',
        top: 40,
        right: 30,
    },
    image: {
        width: '100%',
        height: '100%',
    },
})

export default ViewImageScreen;