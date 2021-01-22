import React from 'react';
import { FlatList, ImageSourcePropType, View } from 'react-native';

import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeperator from '../components/ListItemSeperator';
import Screen from '../components/Screen';

const initialMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/mosh.jpg'),
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/mosh.jpg'),
    },
]

interface IMessage {
    id: number,
    title: string;
    description: string;
    image: ImageSourcePropType;
}

function MessagesScreen() {
    const [messages, setMessages] = React.useState(initialMessages);
    const [refreshing, setRefreshing] = React.useState(false);

    const handleDelete = (message: IMessage) => {
        setMessages(messages.filter(m => m.id !== message.id));
    }
    
    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => 
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log("Message selected", item)}
                        renderRightActions={() => 
                            <ListItemDeleteAction
                                onPress={() => handleDelete(item)}
                            />
                        }
                    />
                }
                ItemSeparatorComponent={() => <ListItemSeperator />}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 2,
                            title: 'T2',
                            description: 'D2',
                            image: require('../assets/mosh.jpg'),
                        },
                    ])
                }}
            />
        </Screen>
    );
}

export default MessagesScreen;