import React from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';


import Screen from '../components/Screen';
import { AppForm, AppFormikField, AppSubmitButton } from '../components/forms';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Passowrd')
});

function LoginScreen() {
    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')} />
            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={(values: object) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormikField
                    name='email'
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='email'
                    keyBoardType='email-address'
                    placeholder='Email'
                    textContentType='emailAddress'
                />
                <AppFormikField
                    name='password'
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='lock'
                    placeholder='Password'
                    secureTextEntry
                    textContentType='password'
                />
                <AppSubmitButton title='Login' />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
    },
})

export default LoginScreen;