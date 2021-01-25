import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ICategoryItem } from '../config/interfaces';
import AppText from './AppText';
import Icon from './Icon';

interface IProps {
    onPress: () => void;
    item: ICategoryItem;
}

function CategoryPickerItem({ onPress, item }: IProps) {
    return (
        <View style={styles.container}>
            <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
            <AppText style={styles.label}>{item.label}</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: '5%',
        paddingVertical: 15,
        alignItems: 'center',
        width: '33%',
    },
    label: {
        marginTop: 5,
        textAlign: 'center',
    },
})

export default CategoryPickerItem;