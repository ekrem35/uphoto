/**
 * @flow
 */

import React, { useState } from 'react'
import {
  Container,
  Content,
  View,
  Text,
  Button,
  Icon,
  Toast
} from 'native-base'
import Header from '../../Components/Header'
import { Dimensions, Image, StyleSheet } from 'react-native'
import { launchCamera } from 'react-native-image-picker'
import Carousel from 'react-native-snap-carousel'
import { useDispatch, useSelector } from 'react-redux'
import { editSession } from '../../state/actions/sessions'

type Props = {
  navigation: { goBack: Function },
  route: {
    params: { sessionId: Number }
  }
}

const EditSession = (props: Props) => {
  const dispatch = useDispatch()
  const { navigation, route } = props
  const { sessionId } = route.params

  const { sessions } = useSelector((state) => ({
    sessions: state.sessions
  }))
  const session = sessions[sessionId]

  const [imagesWillBeUploaded, setImagesWillBeUploaded] = useState([
    ...session.images
  ])

  const onPressAddPhoto = async () => {
    try {
      const response = await launchCamera({
        quality: 0.5,
        mediaType: 'photo',
        maxWidth: 1920,
        maxHeight: 1080
      })
      const uploadImages = [...imagesWillBeUploaded]
      await Promise.all(
        response.assets.map(async (asset) => uploadImages.push(asset.uri))
      )
      setImagesWillBeUploaded(uploadImages)
    } catch (error) {
      Toast.show({
        text: 'An error occured: ' + error.message
      })
    }
  }

  const onPressEditSession = () => {
    dispatch(editSession(imagesWillBeUploaded, sessionId))
    Toast.show({
      text: 'Your session has been edited successfully',
      type: 'success'
    })
    navigation.goBack()
  }

  function onPressDeleteImage(imageId) {
    setImagesWillBeUploaded(
      imagesWillBeUploaded.filter((image, idx) => idx !== imageId)
    )
  }

  return (
    <Container>
      <Header title="Create Session" />
      <Content contentContainerStyle={{ flex: 1 }}>
        <View style={styles.messageText}>
          <Text style={styles.noteText}>
            {imagesWillBeUploaded.length
              ? 'Uploaded Images'
              : 'Your images will be listed just below'}
          </Text>
        </View>
        <View style={styles.carouselView}>
          <Carousel
            data={imagesWillBeUploaded}
            sliderWidth={Dimensions.get('screen').width}
            itemWidth={Dimensions.get('screen').width - 32}
            renderItem={({ item, index }) => (
              <View style={{ flex: 1 }}>
                <Button
                  onPress={() => onPressDeleteImage(index)}
                  rounded
                  style={styles.removeImageButton}
                >
                  <Icon name="close"></Icon>
                </Button>
                <Image
                  source={{ uri: item }}
                  resizeMode="contain"
                  style={{
                    width: Dimensions.get('screen').width - 32,
                    height: 360
                  }}
                />
              </View>
            )}
          />
        </View>
        <View style={styles.completeButtonView}>
          <Button
            style={{ height: Dimensions.get('screen').height / 4 }}
            full
            iconLeft
            onPress={onPressAddPhoto}
          >
            <Icon type="MaterialCommunityIcons" name="image-plus"></Icon>
            <Text>Add Photo</Text>
          </Button>

          <Button
            onPress={onPressEditSession}
            style={styles.completeButtonView}
            full
            iconLeft
            disabled={imagesWillBeUploaded.length === 0}
          >
            <Icon type="AntDesign" name="check"></Icon>
            <Text>Edit Session</Text>
          </Button>
        </View>
      </Content>
    </Container>
  )
}

const styles = StyleSheet.create({
  carouselView: {
    marginTop: 24,
    marginLeft: -24,
    flex: 1
  },
  messageText: {
    backgroundColor: '#57A6FF',
    paddingVertical: 12,
    alignItems: 'center'
  },
  noteText: {
    fontSize: 18,
    fontStyle: 'italic'
  },
  completeButtonView: { marginTop: 24 },
  removeImageButton: {
    position: 'absolute',
    right: 12,
    top: 0,
    zIndex: 999
  }
})

export default EditSession
