import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import { EColor } from '../config/enums';
import ListItem from '../components/lists/ListItem';
import Screen from '../components/Screen';
import Icon from '../components/Icon';
import ListItemSeperator from '../components/lists/ListItemSeperator';

const menuItems = [
    {
        title: 'My Listings',
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: EColor.PRIMARY,
        }
    },
    {
        title: 'My Messages',
        icon: {
            name: 'email',
            backgroundColor: EColor.SECONDARY,
        }
    },
]

function AccountScreen() {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title='Mosh Hamedani'
                    subTitle='mosh@gmail.com'
                    image={require('../assets/mosh.jpg')}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeperator}
                    renderItem={({ item }) =>
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                        />
                    }
                />
            </View>
            <ListItem
                title='Log out'
                IconComponent={
                    <Icon name='logout' backgroundColor='#ffe66d' />
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: EColor.LIGHT,
    },
    container: {
        marginVertical: 20,
    },
})

export default AccountScreen;