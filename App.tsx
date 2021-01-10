import React from 'react';
import {
    Alert,
    Button,
    Dimensions,
    Platform,
    StyleSheet,
    StatusBar,
    Text,
    View,
} from 'react-native';
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";

export default function App() {
  console.log(Dimensions.get("screen")); /*
    Dimensons API does not consider rotation onPhone
    It does not work for both portrait and landscape
    mode. That is why we should install @react-native
    -community/hooks and get from there useDimensions
  */
  console.log(useDimensions());
  console.log(useDeviceOrientation());

  return (
    <View style={styles.container}>
      <Text>ElanApp</Text>
      <Button
        title="Alert"
        onPress={() => Alert.alert("Title", "Message", [
            { text: "Yes", onPress: () => console.log("Selected btn YES") },
            { text: "No", onPress: () => console.log("Selected btn NO") }
        ])}
      />
      {Platform.OS === "ios" && // prompt only works on IOS
        <Button
            title="Prompt"
            onPress={() => Alert.prompt("Title", "Message", text => console.log(text))}
      />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, /*
        flex: 1 means that it will be set to cover entire screen.
        If in View will be 3 other views with flex: 1 property,
        they will be divided equally in parent View automatically.
        To make one of them a bit bigger we can give it flex: 2.
    */
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
