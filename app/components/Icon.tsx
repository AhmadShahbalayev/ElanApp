import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface IProps {
    name: string;
    size?: number;
    backgroundColor?: string;
    iconColor?: string;
}

function Icon({
    name,
    size = 40,
    backgroundColor = '#000000',
    iconColor = '#ffffff',
}: IProps) {
    return (
        <View style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <MaterialCommunityIcons
                // @ts-ignore
                name={name}
                color={iconColor}
                size={size * 0.5}
            />
        </View>
    );
}

export default Icon;