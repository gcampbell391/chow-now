import React, { useState } from 'react';
import { Text, View } from 'react-native';
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import MealsNavigator from './navigation/MealsNavigator'


//This fetches font styles
const fetchFonts = () => {
  return Font.loadAsync({
    'raleway-bold': require('./assets/fonts/Raleway-ExtraBold.ttf'),
    'raleway-thin': require('./assets/fonts/Raleway-Thin.ttf'),
    'raleway-italic': require('./assets/fonts/Raleway-SemiBoldItalic.ttf')
  })
}

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false)

  //This will keep the splash screen open until the fonts are loaded
  if (!fontLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />
  }


  return (
    <MealsNavigator />
  );
}

