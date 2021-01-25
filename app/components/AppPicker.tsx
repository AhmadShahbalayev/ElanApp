import React, { ReactNode } from 'react';
import { View, StyleSheet, Modal, Button, TouchableWithoutFeedback, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';
import Screen from './Screen';

import { EColor } from '../config/enums';
import { ICategoryItem } from '../config/interfaces';
import PickerItem from './PickerItem';

interface IProps {
    icon?: string;
    placeholder?: string;
    items?: ICategoryItem[];
    selectedItem?: ICategoryItem;
    onSelectItem: (item: any) => void;
    width?: number | string;
    PickerItemComponent?: ReactNode;
    numberOfColumns: number;
}

function AppPicker({
    icon,
    items,
    placeholder,
    numberOfColumns,
    selectedItem,
    onSelectItem,
    width = '100%',
    PickerItemComponent = PickerItem,
}: IProps) {
    const [modalVisible, setModalVisible] = React.useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={[styles.container, { width }]}>
                    {icon && 
                    <MaterialCommunityIcons
                        // @ts-ignore
                        name={icon}
                        size={20}
                        color={EColor.MEDIUM}
                        style={styles.icon}
                    />}
                    <AppText style={selectedItem ? styles.text : styles.placeholder}>
                        {selectedItem ? selectedItem.label : placeholder}
                    </AppText>
                    <MaterialCommunityIcons
                        // @ts-ignore
                        name='chevron-down'
                        size={20}
                        color={EColor.MEDIUM}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType='slide'>
                <Screen>
                    <Button title='Close' onPress={() => setModalVisible(false)} />
                    <FlatList
                        data={items}
                        keyExtractor={item => item.value.toString()}
                        numColumns={numberOfColumns}
                        renderItem={({ item }) => 
                            // @ts-ignore
                            <PickerItemComponent
                                item={item}
                                label={item.label}
                                onPress={() => {
                                    setModalVisible(false);
                                    onSelectItem(item);
                            }}
                        />}
                    />
                </Screen>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: EColor.LIGHT,
        borderRadius: 25,
        flexDirection: 'row',
        padding: 15,
        marginVertical: 10,
        alignItems: 'center',
    },
    icon: {
        marginRight: 10,
    },
    text: {
        flex: 1,
    },
    placeholder: {
        color: EColor.MEDIUM,
        flex: 1,
    },
})

export default AppPicker;