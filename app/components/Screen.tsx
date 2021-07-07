import React, { ReactNode } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import Constans from 'expo-constants';

interface IProps {
    children: ReactNode;
    style?: object;
}

function Screen({ children, style }: IProps) {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            <View style={[styles.view, style]}>
                {children}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constans.statusBarHeight,
        flex: 1,
    },
    view: {
        flex: 1,
    },
})

export default Screen;