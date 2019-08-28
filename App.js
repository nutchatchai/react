import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm

import  Login  from "./stack/Login";
import  Main  from "./stack/Main";

import { createStackNavigator, createAppContainer} from "react-navigation";

const AppNavigator = createStackNavigator(
  {
    Login: Login,
    Main: Main
  }
)
const App = createAppContainer(AppNavigator);
export default App;
