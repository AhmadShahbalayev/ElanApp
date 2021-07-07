import Constants from 'expo-constants';

const testID = 'ca-app-pub-3940256099942544/6300978111';
const productionID = 'ca-app-pub-3369582389426126/6328367336';

export const adUnitID = Constants.isDevice && !__DEV__ ? productionID : testID;