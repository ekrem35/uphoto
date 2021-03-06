import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Screens from '../Screens'
import { navigationRef } from './RootNavigation'

const Stack = createNativeStackNavigator()

const Router = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Screens.Home} />
        <Stack.Screen
          name="CreateSession"
          component={Screens.Sessions.Create}
        />
        <Stack.Screen name="EditSession" component={Screens.Sessions.Edit} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router
