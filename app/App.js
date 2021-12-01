/**
 * @flow
 **/

import React from 'react'
import { Root, StyleProvider } from 'native-base'
import { SafeAreaView, StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import Router from './Router/Router'
import { store, persistor } from './state/store'
import getTheme from '../native-base-theme/components'
import uPhotoTheme from '../native-base-theme/variables/uPhoto'
import { PersistGate } from 'redux-persist/integration/react'

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#161B22' }}>
      <StatusBar barStyle="dark-content" />
      <Root>
        <StyleProvider style={getTheme(uPhotoTheme)}>
          <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
              <Router />
            </PersistGate>
          </Provider>
        </StyleProvider>
      </Root>
    </SafeAreaView>
  )
}

export default App
