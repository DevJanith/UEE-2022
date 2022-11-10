import React from 'react'
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import { Modalize } from 'react-native-modalize'
import FocusedStatusBar from '../../../components/FocusedStatusBar'
import { COLORS, FONTS, SIZES } from '../../../constants'
import SeaAnimalList from '../SeaAnimalList'

const WantAddInfo = ({ navigation }) => {
  return (

    <ImageBackground
      source={require('../../../assets/images/Info/Want_to_Addbg.png')}
      style={{
        width: "100%",
        height: "110%"
      }}
    >

      <View style={{
        flexDirection: "row",
        width: "100%",
        paddingHorizontal: 20
      }}>
        <TouchableOpacity
          onPress={() => { navigation.push('InformationSrc') }}
          style={{
            paddingHorizontal: 10,
            paddingVertical: 13,
            borderRadius: 10,
            marginTop: 30,
            backgroundColor: 'rgba(52, 52, 52, 0.4)'
          }}
        >
          <Image
            source={require('../../../assets/images/Info/left_arrow.png')}
            style={{ width: 20, height: 15 }}
          />
        </TouchableOpacity>

      </View>

      <Text style={{
        color: "#000000",
        fontSize: 45,
        fontFamily: FONTS.bold,
        width: 500,
        marginLeft: 35,
        textAlign: "left",
        marginTop: 55,
        elevation: 10,

      }}>
        Want to{'\n'}Add{'\n'}Informations

        <Image
          source={require('../../../assets/images/Info/question_2.png')}
          style={{
            width: 50,
            height: 50,
          }}
        />

      </Text>



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
        alwaysOpen={450}
        scrollViewProps={{ showsVerticalScrollIndicator: false }}
      >

        <View style={{
          marginTop: 40,
          marginBottom: 10
        }}>
          <SeaAnimalList
            onPress={() => { navigation.push('AddInfoCreate') }}
            img={require('../../../assets/images/Info/blue_whale.png')}
            title="Blue Whale"
            bg="#C8E7F9"
            icon={require('../../../assets/images/Info/right_arrow_2.png')}

          />

          <SeaAnimalList

            img={require('../../../assets/images/Info/seahorse.png')}
            title="Sea Horse"
            bg="#C8E7F9"
            icon={require('../../../assets/images/Info/right_arrow_2.png')}
          />

        </View>

      </Modalize>

    </ImageBackground>

  )
}

export default WantAddInfo