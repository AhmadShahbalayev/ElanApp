import React from 'react';
import { Text } from 'react-native';

import { defaultStyles } from '../config/styles';

interface IProps {
    children?: string;
    style?: object;
    numberOfLines?: number;
}

function AppText({ children, style, ...otherProps }: IProps) {
    return <Text style={[defaultStyles.text, style]} {...otherProps}>{children}</Text>;
};

export default AppText;