import React, { ReactNode } from 'react';
import { Formik } from 'formik';

interface IProps {
    initialValues: object;
    onSubmit: (values: object) => void;
    validationSchema: object;
    children: ReactNode;
}

function AppForm({ initialValues, onSubmit, validationSchema, children }: IProps) {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {() => (
                <>
                    {children}
                </>
            )}
        </Formik>
    );
}

export default AppForm;