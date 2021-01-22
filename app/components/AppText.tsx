import React from 'react';
import { Text } from 'react-native';

import { defaultStyles } from '../config/styles';

interface IProps {
    children: string | undefined;
    style?: object;
}

function AppText({ children, style }: IProps) {
    return <Text style={[defaultStyles.text, style]}>{children}</Text>;
};

export default AppText;