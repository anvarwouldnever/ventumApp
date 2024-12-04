import { View, Text, SafeAreaView, Image, FlatList, useWindowDimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import logo from '../assets/logo.png'
import Logo from '../components/Logo'
import store from '../assets/store.png'
import spiral from '../assets/spiral.png'
import { useNavigation } from '@react-navigation/native'

const options = [{text: "Sotuvlar (продажа)", image: store, screen: "ThirdScreen"}, {text: "Yuk kochirish", image: spiral, screen: "FifthScreen"}]

const FirstScreen = () => {
    const { height: windowHeight, width: windowWidth } = useWindowDimensions();

    const navigation = useNavigation()

    const renderItem = ({ item }) => {

        return (
            <TouchableOpacity onPress={() => navigation.navigate(`${item.screen}`, {text: item.text})} style={{width: windowWidth -20, height: windowHeight * 0.07, backgroundColor: 'white', borderRadius: 10, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20}}>
                <Text style={{fontWeight: '600', color: '#49494A', fontSize: 20}}>
                    {item.text}
                </Text>
                <Image source={item.image} style={{resizeMode: 'contain', width: 25, height: 25}} />
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={{flex: 1, alignItems: 'center', backgroundColor: '#F0EEEEFE'}}>
            <Logo />
            <FlatList 
                data={options}
                scrollEnabled={false}
                keyExtractor={item => item.text}
                renderItem={renderItem}
                contentContainerStyle={{gap: 20, marginTop: 30}}
            />
        </SafeAreaView>
    )
}

export default FirstScreen;