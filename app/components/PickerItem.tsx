import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { ICategoryItem } from '../config/interfaces';

import AppText from './AppText';

interface IProps {
    onPress: () => void;
    item: ICategoryItem;
}

function PickerItem({ onPress, item }: IProps) {
    return (
        <TouchableOpacity onPress={onPress}>
            <AppText style={styles.text}>{item.label}</AppText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        padding: 20,
    },
})

export default PickerItem;