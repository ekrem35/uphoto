/**
 * @flow
 **/

import React from 'react'
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <View>
          <Text>App.js</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
