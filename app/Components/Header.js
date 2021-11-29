import React from 'react'
import { Header as NBHeader, Left, Right, Body, Title } from 'native-base'

const Header = () => {
  return (
    <NBHeader
      style={{ backgroundColor: '#1B1553' }}
      iosBarStyle="light-content"
      androidStatusBarColor="#1B1553"
    >
      <Left></Left>
      <Body>
        <Title>uPhoto</Title>
      </Body>
      <Right></Right>
    </NBHeader>
  )
}

export default Header
