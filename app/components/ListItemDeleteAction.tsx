import React from 'react';
import { View, StyleSheet } from 'react-native';
import { EColor } from '../config/enums';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

interface IProps {
    onPress: () => void;
}

function ListItemDeleteAction({ onPress }: IProps) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons
                    name='trash-can'
                    size={35}
                    color='white'
                />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 70,
        height: '100%',
        backgroundColor: EColor.DANGER,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default ListItemDeleteAction;
