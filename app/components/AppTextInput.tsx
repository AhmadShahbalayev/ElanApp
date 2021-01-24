import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native';

import { EColor } from '../config/enums';
import { defaultStyles } from '../config/styles';

type AUTO_CAPITALIZE = 'none' | 'sentences' | 'words' | 'characters';
type TEXT_CONTENT_TYPE = 'none' | 'URL' | 'addressCity' | 'addressCityAndState' | 'addressState'
| 'countryName' | 'creditCardNumber' | 'emailAddress' | 'familyName' | 'fullStreetAddress'
| 'givenName' | 'jobTitle' | 'location' | 'middleName' | 'name' | 'namePrefix' | 'nameSuffix'
| 'nickname' | 'organizationName' | 'postalCode' | 'streetAddressLine1' | 'streetAddressLine2'
| 'sublocality' | 'telephoneNumber' | 'username' | 'password' | 'newPassword' | 'oneTimeCode'; 

export interface IAppTextInputProps {
    icon?: string;
    placeholder?: string;
    autoCapitalize?: AUTO_CAPITALIZE;
    autoCorrect?: boolean;
    keyBoardType?: string;
    textContentType?: TEXT_CONTENT_TYPE;
    secureTextEntry?: boolean;
    maxLength?: number;
    multiline?: boolean;
    numberOfLines?: number; 
}

function AppTextInput({ icon, ...otherProps }: IAppTextInputProps) {
    return (
        <View style={styles.container}>
            {icon && 
            <MaterialCommunityIcons
                // @ts-ignore
                name={icon}
                size={20}
                color={EColor.MEDIUM}
                style={styles.icon}
            />}
            <TextInput
                placeholderTextColor={EColor.MEDIUM}
                style={defaultStyles.text} {...otherProps}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: EColor.LIGHT,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
    },
})

export default AppTextInput;