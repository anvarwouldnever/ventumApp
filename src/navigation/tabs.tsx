import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text, Dimensions} from "react-native";
import { View } from "react-native";
import FirstScreen from "../screens/FirstScreen";
import SecondScreen from "../screens/SecondScreen";
import menyu from '../assets/menyu.png'
import profil from '../assets/profil.png'
 
const windows = Dimensions.get('window')
const SCREEN_WIDTH = windows.width
const SCREEN_HEIGHT = windows.height

const Tab = createBottomTabNavigator()

export default function Tabs() {
    return (
            <Tab.Navigator screenOptions={({route}) => ({headerShown: false, tabBarStyle: {backgroundColor: 'white', height: SCREEN_HEIGHT * 0.0886256, width: SCREEN_WIDTH, borderTopWidth: 0, borderWidth: 1, borderColor: 'black', borderStyle: 'solid'}, tabBarItemStyle: {flexDirection: 'column', width: 100, height: 60}, tabBarIcon: ({ focused, color, size }) => {
                let icon;

                    if (route.name === 'Menyu') {
                        icon = focused ? menyu : menyu; // Иконка для экрана Home
                    } else if (route.name === 'Profil') {
                        icon = focused ? profil : profil; // Иконка для экрана UserProfile
                    }

          return <Image source={icon} style={{width: 25, height: 25, tintColor: focused ? 'purple' : '#949494', marginTop: 10}} resizeMode='contain' />
            }, tabBarLabel: ({ focused, color }) => {
                    let label;
        
                    if (route.name === 'Menyu') {
                    label = 'Menyu'; // Текст для экрана Home
                    } else if (route.name === 'Profil') {
                    label = 'Profil'; // Текст для экрана UserProfile
                    }
        
                    return <Text style={{color: focused ? 'purple' : '#949494', fontSize: 12, fontWeight: '400', lineHeight: 12, marginTop: 10}}>{label}</Text>;
              },
              })} >
                <Tab.Screen name="Menyu" component={FirstScreen}/>
                <Tab.Screen name="Profil" component={SecondScreen}/>
            </Tab.Navigator>
    )
}