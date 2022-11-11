import React, { useRef } from 'react'
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Modalize } from 'react-native-modalize'
import { FocusedStatusBar } from '../../components'
import { assets, COLORS, SIZES } from '../../constants'
import EditProfile from './components/EditProfile'
import ProfileBody from './components/ProfileBody'
import ProfileHeader from './components/ProfileHeader'

const Profile = () => {
  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ zIndex: 0 }}>
        <ScrollView>
          <FocusedStatusBar background={COLORS.primary} />
          <ProfileHeader name={"Janith Gamage"} onOpen={onOpen} /> 
          <ProfileBody data={
            {
              name: "janith Gamage",
              email: "user@gmail.com",
              contactNumber: "076852525"
            }
          } />
        </ScrollView>
      </View>
      <View style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        zIndex: -1,
      }}>
        <Image
          source={assets.b10}
          resizeMode="cover"
          style={{
            width: "100%",
            height: 300,
            borderBottomLeftRadius: SIZES.medium,
            borderBottomRightRadius: SIZES.medium,
          }}
        />
      </View>
      <Modalize
        handleStyle={{
          marginTop: 30,
          backgroundColor: "#53A7DB",
          width: 80
        }}
        modalStyle={{
          borderTopLeftRadius: 60,
          borderTopRightRadius: 60
        }}
        modalHeight={500}
        // alwaysOpen={500}
        scrollViewProps={{ showsVerticalScrollIndicator: false }}
        ref={modalizeRef}
      >
        <EditProfile data={
            {
              name: "janith Gamage",
              email: "user@gmail.com",
              contactNumber: "076852525"
            }
          }/>
      </Modalize>
    </SafeAreaView>
  )
}

export default Profile