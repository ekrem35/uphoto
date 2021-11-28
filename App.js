/**
 * @flow
 **/

import React from "react";
import { SafeAreaView, StatusBar, Text, View, ScrollView } from "react-native";

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
  );
};

export default App;
