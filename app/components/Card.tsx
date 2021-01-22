import React from 'react';
import { View, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import { EColor } from '../config/colors';

import AppText from './AppText';

interface IProps {
    title: string;
    subTitle: string;
    image: ImageSourcePropType;
}

function Card({ title, subTitle, image }: IProps) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: EColor.WHITE,
        marginBottom: 20,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        marginBottom: 10,
    },
    subTitle: {
        color: EColor.SECONDARY,
        fontWeight: 'bold',
    },
    detailsContainer: {
        padding: 20,
    },
});

export default Card;