import React from 'react';
import { Text, Platform, StyleSheet } from 'react-native';

interface IProps {
    children: string;
    style?: object;
}

function AppText({ children, style }: IProps) {
    return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
    text: {
        ...Platform.select({
            ios: {
                fontSize: 20,
                fontFamily: 'Avenir',
            },
            android: {
                fontSize: 18,
                fontFamily: 'Roboto',
            }
        }), 
    },
});

export default AppText;