import React from 'react';
import { useFormikContext } from 'formik';

import AppButton from '../AppButton';

interface IProps {
    title: string;
}

function AppSubmitButton({ title }: IProps) {
    const { handleSubmit } = useFormikContext();
    
    return (
        <AppButton title={title} onPress={handleSubmit} />
    );
}

export default AppSubmitButton;