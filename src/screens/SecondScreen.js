import { View, Text, SafeAreaView, useWindowDimensions, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Logo from '../components/Logo'

const SecondScreen = () => {
    const { height: windowHeight, width: windowWidth } = useWindowDimensions();


    return (
        <SafeAreaView style={{flex: 1, alignItems: 'center', backgroundColor: '#F0EEEEFE'}}>
            <Logo />
            <TextInput 
                style={{backgroundColor: 'white', width: windowWidth - 20, height: windowHeight * 0.05, borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginTop: 20}}
                placeholder='Search'
                placeholderTextColor={"grey"}
                textAlign='center'
            />
            <View style={{gap: 10, marginTop: 20}}>
                <TouchableOpacity style={{width: windowWidth - 20, backgroundColor: 'white', justifyContent: 'center', height: windowHeight * 0.07, borderRadius: 15}}>
                    <Text style={{fontWeight: '600', marginLeft: 20}}>Palonchi</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: windowWidth - 20, backgroundColor: 'white', justifyContent: 'center', height: windowHeight * 0.07, borderRadius: 15}}>
                    <Text style={{fontWeight: '600', marginLeft: 20}}>Pistonchi</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: windowWidth - 20, backgroundColor: 'white', justifyContent: 'center', height: windowHeight * 0.07, borderRadius: 15}}>
                    <Text style={{fontWeight: '600', marginLeft: 20}}>Kishi</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: windowWidth - 20, backgroundColor: 'white', justifyContent: 'center', height: windowHeight * 0.07, borderRadius: 15}}>
                    <Text style={{fontWeight: '600', marginLeft: 20}}>Kimsa</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default SecondScreen