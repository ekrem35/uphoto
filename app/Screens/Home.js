import React from 'react'
import { Button, Container, Content, Text, View, Icon } from 'native-base'
import Header from '../Components/Header'
import { StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

function NoSession() {
  return (
    <View style={styles.noSessionContainer}>
      <View style={styles.noSessionContentView}>
        <Icon style={styles.noSessionIcon} name="search"></Icon>
        <Text style={styles.noSessionText}>No sesssion yet</Text>
      </View>
    </View>
  )
}

function SessionList() {
  return null
}

const Home = () => {
  const { sessions } = useSelector((state) => ({
    sessions: state.sessions
  }))
  return (
    <Container>
      <Header />
      <Content contentContainerStyle={styles.contentContainerStyle}>
        {sessions.length === 0 ? <NoSession /> : <SessionList />}
      </Content>
      <View style={styles.bottomButtonView}>
        <Button bordered iconLeft full>
          <Icon type="Entypo" name="images" />
          <Text>Create Sesssion</Text>
        </Button>
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  contentContainerStyle: { flex: 1 },
  bottomButtonView: { padding: 24 },
  noSessionContainer: { flex: 1 },
  noSessionContentView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  noSessionText: {
    fontSize: 24,
    marginTop: 12,
    fontStyle: 'italic'
  },
  noSessionIcon: { fontSize: 64 }
})

export default Home
