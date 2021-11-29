import React from 'react'
import { Container, Content, View, Text, Button, Icon } from 'native-base'
import Header from '../Components/Header'
import { Dimensions, FlatList, StyleSheet } from 'react-native'

const CreateSession = () => {
  return (
    <Container>
      <Header title="Create Session" />
      <Content>
        <View style={styles.topView}>
          <Text style={styles.noteText}>
            Your images will be listed just below
          </Text>
          <FlatList
            horizontal
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]}
            style={{ height: Dimensions.get('screen').height / 3 }}
            renderItem={({ item }) => (
              <View
                style={{
                  width: Dimensions.get('screen').width - 24,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 1,
                  margin: 24
                }}
              >
                <Text>{item}</Text>
              </View>
            )}
            keyExtractor={(item, index) => String(index)}
          />
        </View>
        <View>
          <Button
            style={{ height: Dimensions.get('screen').height / 3 }}
            full
            bordered
            iconLeft
          >
            <Icon type="MaterialCommunityIcons" name="image-plus"></Icon>
            <Text>Add Photo</Text>
          </Button>
        </View>
        <View style={styles.completeButtonView}>
          <Button full bordered iconLeft>
            <Icon type="AntDesign" name="check"></Icon>
            <Text>Complete Session</Text>
          </Button>
        </View>
      </Content>
    </Container>
  )
}

const styles = StyleSheet.create({
  topView: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  noteText: {
    fontSize: 18,
    fontStyle: 'italic'
  },
  completeButtonView: { marginTop: 24 }
})

export default CreateSession
