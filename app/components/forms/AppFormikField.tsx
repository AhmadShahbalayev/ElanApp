import React from 'react';
import { useFormikContext } from 'formik';

import AppErrorMessage from './AppErrorMessage';
import AppTextInput, { IAppTextInputProps } from '../AppTextInput';

interface IProps extends IAppTextInputProps {
    name: string;
    onChangeText?: (e: string) => void;
    onBlur?: () => void;
}

function AppFormikField({ name, ...otherProps }: IProps) {
    const { touched, setFieldTouched, handleChange, errors } = useFormikContext();

    return (
        <>
            <AppTextInput
                onBlur={() => setFieldTouched(name)}
                onChangeText={handleChange(name)}
                {...otherProps}
            />
            <AppErrorMessage errorText={errors[name as keyof typeof errors]} visible={touched[name as keyof typeof touched]} />
        </>
    );
}

export default AppFormikField;