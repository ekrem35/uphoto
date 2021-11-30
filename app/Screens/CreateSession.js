import React from 'react'
import { Container, Content, View, Text, Button, Icon } from 'native-base'
import Header from '../Components/Header'
import { Dimensions, Image, StyleSheet } from 'react-native'
import { launchCamera } from 'react-native-image-picker'
import { useDispatch, useSelector } from 'react-redux'
import { saveImage } from '../state/actions/sessions'
import Carousel from 'react-native-snap-carousel'

const CreateSession = () => {
  const dispatch = useDispatch()
  const { images } = useSelector((state) => ({
    images: state.storage.images
  }))

  const onPressAddPhoto = async () => {
    const response = await launchCamera({
      quality: 0.5,
      mediaType: 'photo',
      maxWidth: 1920,
      maxHeight: 1080
    })
    response.assets.map((asset) => dispatch(saveImage(asset.uri)))
  }

  const onPressCreateSession = () => {
    // dispatch(createSession())
  }

  return (
    <Container>
      <Header title="Create Session" />
      <Content contentContainerStyle={{ flex: 1 }}>
        <View style={styles.messageText}>
          <Text style={styles.noteText}>
            {images.length
              ? 'Uploaded Images'
              : 'Your images will be listed just below'}
          </Text>
        </View>
        <View style={styles.carouselView}>
          <Carousel
            data={images}
            sliderWidth={Dimensions.get('screen').width}
            itemWidth={Dimensions.get('screen').width - 32}
            renderItem={({ item }) => (
              <Image
                source={{ uri: item }}
                resizeMode="contain"
                style={{
                  width: Dimensions.get('screen').width - 32,
                  height: 360
                }}
              />
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
            onPress={onPressCreateSession}
            style={styles.completeButtonView}
            full
            iconLeft
          >
            <Icon type="AntDesign" name="check"></Icon>
            <Text>Complete Session</Text>
          </Button>
        </View>
      </Content>
    </Container>
  )
}

const styles = StyleSheet.create({
  carouselView: {
    marginTop: 24,
    marginLeft: -24
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
  completeButtonView: { marginTop: 24 }
})

export default CreateSession
