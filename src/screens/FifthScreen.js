import { View, Text, TouchableOpacity, FlatList, SafeAreaView, Image, useWindowDimensions } from 'react-native'
import React from 'react'
import Logo from '../components/Logo'
import store from '../assets/store.png'
import arrow from '../assets/arrow.png'
import { useNavigation } from '@react-navigation/native'
import order3 from '../assets/orderbg3.png'

const orders = [{number: "10111", image: order3}]

const FifthScreen = ({ route }) => {
    const { height: windowHeight, width: windowWidth } = useWindowDimensions();
    const { params } = route
    const navigation = useNavigation()

    const Back = () => {
        return (
            <TouchableOpacity onPress={() => navigation.goBack()} style={{width: windowWidth - 20, height: windowHeight * 0.05, alignItems: 'center', flexDirection: 'row'}}>
                <Image source={arrow} style={{resizeMode: 'contain', width: 16, height: 16, marginRight: 10}}/>
                <Text style={{fontSize: 16, fontWeight: '600', color: '#4530B7'}}>
                    {params.text}
                </Text>
            </TouchableOpacity>
        )
    }

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate("SixthScreen", {num: item.number})} style={{width: 'auto', height: 'auto'}}>
                <Image source={item.image} style={{width: windowWidth - 20, height: 170, resizeMode: 'contain'}}/>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={{flex: 1, alignItems: 'center', backgroundColor: '#F0EEEEFE'}}>
            <Back />
            <View style={{width: windowWidth - 20, height: windowHeight * 0.05, flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}>
                <View style={{width: windowWidth - 230, height: windowHeight * 0.05, backgroundColor: 'white', borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontWeight: '600', color: '#000000'}}>01.01.2024</Text>
                </View>
                <View style={{width: windowWidth - 230, height: windowHeight * 0.05, backgroundColor: 'white', borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontWeight: '600', color: '#000000'}}>31.12.2024</Text>
                </View>
            </View>
            <FlatList 
                scrollEnabled
                data={orders}
                renderItem={renderItem}
                keyExtractor={item => item.number}
                contentContainerStyle={{gap: 5, marginTop: 5}}
            />
        </SafeAreaView>
    )
}

export default FifthScreen;