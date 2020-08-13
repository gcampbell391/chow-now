import React, { useState } from 'react';
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import { enableScreens } from 'react-native-screens'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import mealsReducer from './store/reducers/meals'
import MealsNavigator from './navigation/MealsNavigator'

//Adds to screen performance 
enableScreens();

//Create store 
const rootReducer = combineReducers({
  meals: mealsReducer
})
const store = createStore(rootReducer)

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
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}

