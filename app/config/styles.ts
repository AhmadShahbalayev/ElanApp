import { Platform } from 'react-native';
import { EColor } from './enums';

export const defaultStyles = {
    text: {
        color: EColor.DARK,
        fontSize: 18,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    }
}
