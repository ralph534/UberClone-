import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map'
import { createStackNavigator } from '@react-navigation/stack'
import NavigatorCard from '../components/NavigatorCard'
import RideOptionCard from '../components/RideOptionCard'


const MapScreen = () => {

  const Stack = createStackNavigator()

  return (
    <View>


      <View style={tw`h-1/2`}>
        < Map />
      </View>

      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
           name='NavigatorCard'
           component={NavigatorCard}
           options= {{
            headerShown: false,
           }}
           /> 
           <Stack.Screen
           name='RideOptionCard'
           component={RideOptionCard}
           options= {{
            headerShown: false,
           }}
           />
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})