import React from 'react';
import AppText from '../AppText';

interface IProps {
    errorText?: string;
    visible?: boolean;
}

function AppErrorMessage({ errorText, visible }: IProps) {
    if(!visible || !errorText) return null;

    return (
        <AppText style={{ color: 'red' }}>{errorText}</AppText>
    );
}

export default AppErrorMessage;