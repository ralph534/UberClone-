import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import { Icon } from 'react-native-elements'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { NavigationContainer, StackActions, useNavigation } from '@react-navigation/native';




const data = [
    {
        id:'123',
        title: 'Get a Ride',
        image:'https://links.papareact.com/3pn',
        screen: 'MapScreen'
    },
    {
        id:'456',
        title: 'Order food',
        image: 'https://links.papareact.com/28w',
        screen: 'EatScreen'
    }
]

const NavOptions = () => {

  const navigation = useNavigation();

  return (
    <FlatList
    data={data}
    horizontal
    keyExtractor={(item) => item.id}
    renderItem={({item}) => (
      <TouchableOpacity onPress={() => navigation.navigate(item.screen)} style={tw `bg-gray-200 p-2 pl-6 pb-8 pt-4 m-2 w-40`}>
          <View>
            <Image
            style= {{width: 120, height: 120, resizeMode: 'conatin'}}
            source= {{ uri: item.image }}
            />
            <Text style={tw `mt-2 text-lg font-semibold`}>{item.title}</Text>

            <Icon 
            style={tw `bg-black p-2 rounded-full w-10 mt-4`}
            name= "arrowright"
            color= "white"
             type="antdesign"
            />
          </View>
      </TouchableOpacity>
    
    )}
    />

  )
}

export default NavOptions

