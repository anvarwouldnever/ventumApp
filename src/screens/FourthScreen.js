import { View, Text, SafeAreaView, TouchableOpacity, Image, useWindowDimensions, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import orderinfo from '../assets/orderinfo.png'
import arrow from '../assets/arrow.png'

const FourthScreen = ({ route }) => {
    const { height: windowHeight, width: windowWidth } = useWindowDimensions();
    const { params } = route
    const navigation = useNavigation()

    const orderInfo = [{text: `Nomer: ${params.num}` }, {text: "Sana : 04/10/2024"}, {text: "U_SalesOrderTime"}, {text: "Mijoz : BOBUR (ANDIJON)"}, {text: "Summa: 500$"}, {text: "Dirver : 01A777AAA"}, {text: "Linelardagi hamma quantityni qo'shilgani"}, {text: "ResponsibiltyPersonni"}, {text: "Remarks, Comments"}]

    const Back = () => {
        return (
            <TouchableOpacity onPress={() => navigation.goBack()} style={{width: windowWidth - 20, height: windowHeight * 0.05, alignItems: 'center', flexDirection: 'row'}}>
                <Image source={arrow} style={{resizeMode: 'contain', width: 16, height: 16, marginRight: 10}}/>
                <Text style={{fontSize: 16, fontWeight: '600', color: '#4530B7'}}>
                    № {params.num}
                </Text>
            </TouchableOpacity>
        )
    }

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate("FourthScreen", {num: item.number})} style={{width: windowWidth - 20, height: windowHeight * 0.04, backgroundColor: 'white', justifyContent: 'center'}}>
                <Text style={{marginLeft: 15, fontWeight: '600'}}>
                    {item.text}
                </Text>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={{flex: 1, alignItems: 'center', backgroundColor: '#F0EEEEFE'}}>
            <Back />
            
            <FlatList 
                
                data={orderInfo}
                renderItem={renderItem}
                keyExtractor={item => item.text}
                contentContainerStyle={{gap: 10, marginTop: 10}}
            />
            
            <View style={{gap: 10, marginBottom: 50}}>
                <View style={{marginBottom: 30}}>
                    <Image source={orderinfo} style={{resizeMode: 'contain', width: windowWidth - 20, height: 150, alignSelf: 'center'}}/>
                </View>
                <TouchableOpacity style={{width: windowWidth - 20, height: windowHeight * 0.06, backgroundColor: '#4530B7', borderRadius: 15, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#D9D5EB', fontSize: 16, fontWeight: '600'}}>Yuklovchilarni belgilash</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: windowWidth - 20, height: windowHeight * 0.06, backgroundColor: '#4530B7', borderRadius: 15, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#D9D5EB', fontSize: 16, fontWeight: '600'}}>Buyurtma yuklandi</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default FourthScreen;