import React, { ReactNode } from 'react';
import { View, StyleSheet, ImageSourcePropType, Image, TouchableHighlight } from 'react-native';
// @ts-ignore
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from '../AppText';

import { EColor } from '../../config/enums'

interface IProps {
    title: string;
    subTitle?: string;
    image?: ImageSourcePropType;
    IconComponent?: ReactNode;
    onPress?: () => void;
    renderRightActions?: () => void;
}

function ListItem({
    title,
    subTitle,
    image,
    IconComponent,
    onPress,
    renderRightActions,
}: IProps) {
    return (
        // @ts-ignore
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor={EColor.LIGHT}
                onPress={onPress}
            >
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image style={styles.image} source={image} />}
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                        {subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}
                    </View>
                    <MaterialCommunityIcons name='chevron-right' size={25} color={EColor.MEDIUM} />
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: EColor.WHITE,
        alignItems: 'center',
    },
    detailsContainer: {
        flex: 1,
        marginLeft: 10,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    title: {
        fontWeight: '500',
    },
    subTitle: {
        color: EColor.MEDIUM,
    },
})

export default ListItem;