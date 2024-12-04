import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import FirstScreen from './src/screens/FirstScreen';
import SecondScreen from './src/screens/SecondScreen';
import ThirdScreen from './src/screens/ThirdScreen';
import Tabs from './src/navigation/tabs';
import FourthScreen from './src/screens/FourthScreen';
import FifthScreen from './src/screens/FifthScreen';
import SixthScreen from './src/screens/SixthScreen';

const Stack = createStackNavigator();

const App = () => {
    return (
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer>
          <StatusBar style='dark'/>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Tabs" component={Tabs} />
            <Stack.Screen name="ThirdScreen" component={ThirdScreen} />
            <Stack.Screen name="FourthScreen" component={FourthScreen} />
            <Stack.Screen name="FifthScreen" component={FifthScreen} />
            <Stack.Screen name="SixthScreen" component={SixthScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    )
}

export default App;
