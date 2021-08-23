import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import tw from "tailwind-react-native-classnames"

const data = [
    {
        id:"123",
        title:"Get a Ride",
        image:"https://links.papareact.com/3pn",
        screen:"MapScreen",
    },
    {
        id:"456",
        title:"Order a Food",
        image:"https://links.papareact.com/28w",
        screen:"EatsScreen",
    }
]
const NavOptions = () => {
    const Navigation = useNavigation();
    return (
        //FlatList is list of some data, that is default vertical
        <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => (item.id)}
        renderItem={({item}) => (
            // TouchbleOpacity do hover and other button things
            <TouchableOpacity
            onPress={() => Navigation.navigate(item.screen)}
            style={tw` p-2 pl-10 pb-8 pt-4 bg-gray-200 m-2 w-40`}
            >
                <View>
                    <Image
                    style={{
                        height: 100,
                        width: 100,
                        resizeMode: "contain",
                    }}
                    source={{ uri: item.image}}/>
                    <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                    <Icon 
                    style={tw`p-2 bg-black w-10 mt-4 rounded-full`}
                    name="arrowright" color="white" type="antdesign"/>
                </View>
            </TouchableOpacity>
        )}
        />
    )
}

export default NavOptions

