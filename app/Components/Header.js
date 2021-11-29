/**
 * @flow
 **/
import React from 'react'
import {
  Header as NBHeader,
  Left,
  Right,
  Body,
  Title,
  Icon,
  View
} from 'native-base'
import { TouchableOpacity } from 'react-native'
import { goBack } from '../Router/RootNavigation'

type Props = {
  home: Boolean,
  title: String
}

const Header = (props: Props) => {
  const { home, title } = props
  return (
    <NBHeader
      style={{ backgroundColor: '#1B1553' }}
      iosBarStyle="light-content"
      androidStatusBarColor="#1B1553"
    >
      <Left>
        {home ? (
          <View style={{ paddingLeft: 6 }}>
            <Icon type="Ionicons" name="image" />
          </View>
        ) : (
          <TouchableOpacity style={{ paddingLeft: 6 }} onPress={goBack}>
            <Icon type="AntDesign" name="left"></Icon>
          </TouchableOpacity>
        )}
      </Left>
      <Body
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          minWidth: 90
        }}
      >
        <Title>{title}</Title>
      </Body>
      <Right></Right>
    </NBHeader>
  )
}

Header.defaultProps = {
  home: false,
  title: 'uPhoto'
}

export default Header
