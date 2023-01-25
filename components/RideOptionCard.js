import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import NavigatorCard from '../components/NavigatorCard'


const RideOptionCard = () => {

    const navigate = useNavigation()
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
        <View>
            <TouchableOpacity style={tw` absolute top-3 left-5 z-50 p-3 rounded-full`} >
                <Icon name='chevron-left' type='fontawesome' />
            </TouchableOpacity>
          <Text style={tw`text-center py-5 text-lg `}>Select A Ride</Text>
        </View>
    </SafeAreaView>
  )
}

export default RideOptionCard

const styles = StyleSheet.create({})