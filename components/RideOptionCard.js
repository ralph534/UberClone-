import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React, { useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import NavigatorCard from '../components/NavigatorCard'
import { useSelector } from 'react-redux'
import { selectTravelTimeInfo } from '../slices/navSlice'


const RideOptionCard = () => {

    const navigate = useNavigation()

    const [selected, setSelected] = useState(null)

    const travelTimeInformation = useSelector(selectTravelTimeInfo)

    const data = [
        {
            id:'Uber-X-123',
            title: 'UberX',
            multipler: '1',
            image: 'https://links.papareact.com/3pn'
        },
        {
            id: 'Uber-XL-456',
            title: 'Uber-XL',
            multipler: '1.2',
            image: 'https://links.papareact.com/5w8'
        },
        {
            id: 'Uber-LUX-789',
            title: 'UberLUX',
            multipler: '1.75',
            image: 'https://links.papareact.com/7pf'
        }
    ]

   const SURCHARGE_RATE = 1.5;


  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
        <View>
            <TouchableOpacity style={tw` absolute top-3 left-5 z-50 p-3 rounded-full`} >
                <Icon name='chevron-left' type='fontawesome' />
            </TouchableOpacity>
          <Text style={tw`text-center py-5 text-lg `}>Select A Ride - {travelTimeInformation?.distance?.text}</Text>
        </View>

        <FlatList 
        data={data} 
        keyExtractor={(item) => item.id}
        renderItem={({item: { id, title, multipler, image}, item}) => (
           <TouchableOpacity 
           onPress={() => setSelected(item)}
           style={tw`flex-row items-center justify-between px-10
            ${id === selected?.id && 'bg-gray-200'}`}>
            <Image 
            style={{
                width:100,
                height: 100,
                resizeMode: 'contain'
            }}
            source={{ uri: image}}
            />

          <View style={tw`-ml-6`}>
            <Text style={tw`text-xl font-semibold`}>{ title }</Text>
            <Text>{travelTimeInformation?.duration?.text} Travel Time</Text>
          </View>

            <Text style={tw`text-xl`}>

             {new Intl.NumberFormat('en', {
                style:'currency',
                currency:'USD',

             }).format(
                (travelTimeInformation?.duration?.value * SURCHARGE_RATE * multipler) / 100

             )}

            </Text>

         </TouchableOpacity> 
        )}
         />

         <View>
            <TouchableOpacity disabled={!selected} style={tw`bg-black py-3 m-3 ${!selected && 'bg-gray-300'}`}>
              <Text style={tw`text-center text-white text-xl`}>
                Choose{selected?.title}
              </Text>
            </TouchableOpacity>
         </View>

    </SafeAreaView>
  )
}

export default RideOptionCard

const styles = StyleSheet.create({})