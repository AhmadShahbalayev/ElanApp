import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { EColor } from '../config/enums';

interface IProps {
    title: string;
    onPress: () => void;
    color?: string;
}

function AppButton({ title, onPress, color = EColor.PRIMARY }: IProps) {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: color }]}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%',
        marginVertical: 10,
    },
    text: {
        color: EColor.WHITE,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    }
})

export default AppButton;