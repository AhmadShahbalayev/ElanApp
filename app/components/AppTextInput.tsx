import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native';

import { EColor } from '../config/enums';
import { defaultStyles } from '../config/styles';

interface IProps {
    icon?: string;
    placeholder?: string;
}

function AppTextInput({ icon, ...otherProps }: IProps) {
    return (
        <View style={styles.container}>
            {icon && 
            <MaterialCommunityIcons
                // @ts-ignore
                name={icon}
                size={20}
                color={EColor.MEDIUM}
                style={styles.icon}
            />}
            <TextInput style={defaultStyles.text} {...otherProps} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: EColor.LIGHT,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
    },
})

export default AppTextInput;