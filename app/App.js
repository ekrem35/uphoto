/**
 * @flow
 **/

import React from 'react'
import { SafeAreaView } from 'react-native'
import { Provider } from 'react-redux'
import Router from './Router/Router'
import store from './state/store'

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <Router />
      </Provider>
    </SafeAreaView>
  )
}

export default App
