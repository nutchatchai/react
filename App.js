import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm

import  Page1  from "./stack/Page1";
import  Page2  from "./stack/Page2";
import  Page3  from "./stack/Page3";
import { createStackNavigator, createAppContainer} from "react-navigation";

const AppNavigator = createStackNavigator(
  {
    Page1: Page1,
    Page2: Page2,
    Page3: Page3
   
  }
)
const App = createAppContainer(AppNavigator);
export default App;
