import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { XMarkIcon } from 'react-native-heroicons/solid'
import * as Progress from 'react-native-progress'
import MapView, { Marker } from 'react-native-maps';

const DeliveryScreen = () => {
    const navigation = useNavigation();
    return (
        <View className="bg-[#7393B3] flex-1">
            <SafeAreaView className="z-50">
                <View className="flex-row justify-between items-center p-5">
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <XMarkIcon color="white" size={30} />
                    </TouchableOpacity>
                    <Text className="font-light text-white text-lg">Got any Leads?</Text>
                </View>
                <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
                    <View className="flex-row justify-between">
                        <View>
                            <Text className="text-lg text-gray-400">Last Scanned on</Text>
                            <Text className="text-4xl font-bold">28/05/2023</Text>
                        </View>
                        {/* <Image
                            source={{
                                uri: "https://links.papareact.com/fls"
                            }}
                            className="h-20 w-20" /> */}
                    </View>
                    {/* <Progress.Bar size={30} indeterminate={true} color="#00CCBB" /> */}
                    {/* <Text className="mt-3 text-gray-500">
                        Your Order at is being prepared
                    </Text> */}
                </View>
            </SafeAreaView>
            <MapView
                initialRegion={{
                    latitude: 22.021110,
                    longitude: 87.771330,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
                className="flex-1 -mt-10 z-0"
                mapType='mutedStandard'
            >
                <Marker coordinate={{
                    latitude: 22.021110,
                    longitude: 87.771330,
                }}
                    title="djsjida"
                    description="jdsadi"
                    identifier='origin'
                    pinColor='red'
                />
            </MapView>
            <SafeAreaView className="bg-white flex-row items-center space-x-5 h-24 pb-7">
                <Image
                    source={require('./b.png')}
                    className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5 "
                />
                <View className="flex-1">
                    <Text className="text-lg">SUPARNA BALA</Text>
                    <Text className="text-sm text-gray-400">Guardian</Text>
                </View>
                <Text className="text-[#7393B3] text-lg mr-4 font-bold">Contact</Text>
            </SafeAreaView>
        </View>
    )
}

export default DeliveryScreen