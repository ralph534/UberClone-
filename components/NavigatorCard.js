import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env"
import { useDispatch } from 'react-redux';
import { setDestiniation, setOrigin } from '../slices/navSlice';
import { NavigationHelpersContext, useNavigation } from '@react-navigation/native';

const NavigatorCard = () => {

    const dispatch = useDispatch()

    const navigation = useNavigation()

  return (
    <SafeAreaView style={tw`bg-white flex-1`} >
      <Text style={tw`text-center py-1 text-xl`}>Good Morning, Ralph!!</Text>

      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
      <GooglePlacesAutocomplete
        placeholder='Where To?'
        styles={toInputBoxStyles}
        onPress={( data, details = null) => {
          dispatch(
            setDestiniation({
            location: details.geometry.location,
            description: data.description
          })
          )
          navigation.navigate('RideOptionCard')
        }}
        fetchDetails={true}
        returnKeyType={"search"}
        enablePoweredByContainer={false}
        minLength={2}
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: "en"
        }}
        nearbyPlacesAPI='GooglePlacesSearch'
        debounce={400}
        />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default NavigatorCard

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 20,
        flex: 0 
    },
    textInput: {
        backgroundColor: '#DDDDDF',
        borderRadius: 0,
        fontSize: 18
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0
    }
})