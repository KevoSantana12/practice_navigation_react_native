import { Text, View, StyleSheet } from "react-native";
import { useFonts } from 'expo-font';

import './global.css';

export default function App() {

  const [fontsLoaded] = useFonts({
    'work-black': require('./assets/fonts/WorkSans-Black.ttf'),
    'work-light': require('./assets/fonts/WorkSans-Light.ttf'),
    'work-medium': require('./assets/fonts/WorkSans-Medium.ttf'),

  });

  if (!fontsLoaded) {
    return null; // o un loading spinner
  }

  return (
    <>
      <View className="flex-1 items-center justify-center bg-primary" >
        <Text className="text-xl text-secondary-100" style={{ fontSize: 20, fontFamily: 'work-medium' }}>
          Welcome to Nativewind porraaa!
        </Text>
      </View>
    </>
  );
}
