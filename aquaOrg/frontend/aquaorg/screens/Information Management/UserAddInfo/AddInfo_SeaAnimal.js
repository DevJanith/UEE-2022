import React, { useState } from "react";
import { 
    Image, 
    ImageBackground, 
    SafeAreaView, 
    ScrollView, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    View,
    StyleSheet
} from 'react-native'
import {Modalize} from 'react-native-modalize'
import FocusedStatusBar from '../../../components/FocusedStatusBar'
import { COLORS, FONTS, SIZES } from '../../../constants'

const AddInfo_SeaAnimal = ({ navigation }) => {

    const [text, onChangeText] = React.useState(null);
    const [name, setAnimalName] = useState();
    const [intro, setAnimalIntro] = useState();
    const [lifeSpan, setAnimalLifeSpan] = useState();
    const [mass, setAnimalMass] = useState();
    const [length, setAnimalLength] = useState();
    const [explain, setAnimalExplain] = useState();

  return (
    
    <ImageBackground
                source={require('../../../assets/images/Info/add_Info_bg.png')}
                style={{
                    width:"100%",
                    height:"113%"
                }}
            >
                
                <View style={{
                    flexDirection:"row",
                    width:"100%",
                    paddingHorizontal:20
                }}>
                    <TouchableOpacity
                        onPress={() => { navigation.push('AddInfoHome') }}
                        style={{
                            paddingHorizontal:10,
                            paddingVertical:13,
                            borderRadius:10,
                            marginTop:30,
                            backgroundColor:'rgba(52, 52, 52, 0.4)'
                        }}
                    >
                            <Image
                                source={require('../../../assets/images/Info/left_arrow.png')}
                                style={{height:15,width:20}}
                            />
                    </TouchableOpacity>
                  
                </View>

                <Text style={{
                    color:"#000000",
                    fontFamily:FONTS.bold,
                    fontSize:25,
                    width:200,
                    alignSelf:"center",
                    textAlign:"center",
                }}>Life Below Water</Text>

                <TouchableOpacity disabled={true}
                    style={{
                        flexDirection: "row",
                        backgroundColor: "#015C92",
                        alignItems: "center",
                        marginTop: 10,
                        width: 80,
                        paddingVertical: 8,
                        borderRadius: 14,
                        paddingHorizontal: 8,
                        marginLeft:178,
                        elevation:10
                    }}
                    >
                        <Text
                            style={{
                                color: "#FFF",
                                fontFamily: FONTS.bold,
                                fontSize: 9,
                                marginLeft:5
                            }}>
                            Sea Animal
                        </Text>
                    </TouchableOpacity>

                    <TextInput
                                mode="outlined"
                                activeOutlineColor="#015C92"
                                label="Enter Event Name"
                                style={{
                                    marginVertical: 10,
                                }}
                            />


                    <ScrollView style={{
                        backgroundColor:"#FFFFFF",
                        borderRadius:50
                    }}>

                    <View style={{
                            flexDirection:"row",
                            marginHorizontal:30,
                            marginTop:20
                        }}>
                            
                    </View>

                    <Text style={{
                        color:"#000000",
                        fontFamily:FONTS.bold,
                        fontSize:15,
                        alignSelf:"flex-start",
                        textAlign:"left",
                        marginLeft: 51
                    }}>Name</Text>

                            <TextInput
                                style={styles.input}
                                onChangeText={setAnimalName}
                                value={name}
                                placeholder="Enter name here"
                                keyboardType="ascii-capable"
                            />

                    <Text style={{
                        color:"#000000",
                        fontFamily:FONTS.bold,
                        fontSize:15,
                        alignSelf:"flex-start",
                        textAlign:"left",
                        marginLeft: 51
                    }}>Introduction</Text>

                            <TextInput
                                style={styles.desc}
                                onChangeText={setAnimalIntro}
                                value={intro}
                                placeholder="Enter Introduction Here"
                                keyboardType="ascii-capable"
                            />

                    <View style={{ flexDirection: "row" }}>
                        <View style={{ flex: 2 }}>
                            <Text style={{
                                color:"#000000",
                                fontFamily:FONTS.bold,
                                fontSize:15,
                                alignSelf:"flex-start",
                                textAlign:"left",
                                marginLeft: 51,
                                marginTop: 20
                            }}>LifeSpan</Text>
                        </View>

                        <View style={{ flex: 1 }}>

                                <TextInput
                                    style={styles.input_span}
                                    onChangeText={setAnimalLifeSpan}
                                    value={lifeSpan}
                                    placeholder="Enter LifeSpan Here"
                                    keyboardType="ascii-capable"
                                />
                            
                        </View>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                        <View style={{ flex: 2 }}>
                            <Text style={{
                                color:"#000000",
                                fontFamily:FONTS.bold,
                                fontSize:15,
                                alignSelf:"flex-start",
                                textAlign:"left",
                                marginLeft: 51,
                                marginTop: 20
                            }}>Mass</Text>
                        </View>

                        <View style={{ flex: 1 }}>

                                <TextInput
                                    style={styles.input_span}
                                    onChangeText={setAnimalMass}
                                    value={mass}
                                    placeholder="Enter Mass Here"
                                    keyboardType="ascii-capable"
                                />
                            
                        </View>
                    </View>


                    <View style={{ flexDirection: "row" }}>
                        <View style={{ flex: 2 }}>
                            <Text style={{
                                color:"#000000",
                                fontFamily:FONTS.bold,
                                fontSize:15,
                                alignSelf:"flex-start",
                                textAlign:"left",
                                marginLeft: 51,
                                marginTop: 20
                            }}>Length</Text>
                        </View>

                        <View style={{ flex: 1 }}>

                                <TextInput
                                    style={styles.input_span}
                                    onChangeText={setAnimalLength}
                                    value={length}
                                    placeholder="Enter Length Here"
                                    keyboardType="ascii-capable"
                                />
                            
                        </View>
                    </View>


                    <Text style={{
                        color:"#000000",
                        fontFamily:FONTS.bold,
                        fontSize:15,
                        alignSelf:"flex-start",
                        textAlign:"left",
                        marginLeft: 51,
                        marginTop: 20
                    }}>Explanation</Text>

                            <TextInput
                                style={styles.desc}
                                onChangeText={setAnimalExplain}
                                value={explain}
                                placeholder="Enter explanation Here"
                                keyboardType="ascii-capable"
                            />


                    <View style={{ flexDirection: "row", marginBottom:150 }}>
                        <View style={{ flex: 2 }}>
                            
                                <TouchableOpacity
                                    // onPress={() => { navigation.push('InfoCategories') }}
                                    style={{
                                        flexDirection: "row",
                                        backgroundColor: "#D41212",
                                        alignItems: "center",
                                        marginTop: 20,
                                        marginLeft: 50,
                                        width: 90,
                                        paddingVertical: 10,
                                        borderRadius: 18,
                                        paddingHorizontal: 10,
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: "#FFF",
                                            fontFamily: FONTS.bold,
                                            fontSize: 12
                                        }}>
                                        Close
                                    </Text>
                                    <Image
                                        source={require('../../../assets/images/Info/right_arrow.png')}
                                        style={{
                                            marginLeft: 15,
                                            width: 15,
                                            height: 15
                                        }}
                                    />

                                </TouchableOpacity>

                        </View>

                        <View style={{ flex: 1 }}>

                            <TouchableOpacity
                                    // onPress={() => { navigation.push('InfoCategories') }}
                                    style={{
                                        flexDirection: "row",
                                        backgroundColor: "#015C92",
                                        alignItems: "center",
                                        marginTop: 20,
                                        marginLeft: 5,
                                        width: 90,
                                        paddingVertical: 10,
                                        borderRadius: 18,
                                        paddingHorizontal: 10,
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: "#FFF",
                                            fontFamily: FONTS.bold,
                                            fontSize: 12
                                        }}>
                                        Submit
                                    </Text>
                                    <Image
                                        source={require('../../../assets/images/Info/right_arrow.png')}
                                        style={{
                                            marginLeft: 15,
                                            width: 15,
                                            height: 15
                                        }}
                                    />

                                </TouchableOpacity>
                            
                        </View>
                    </View>
                        
                </ScrollView>
            
            </ImageBackground>

  )
}

const styles = StyleSheet.create({
    input: {
      width:330,
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      marginLeft:50
    },

    desc: {
        width:330,
        height: 100,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        marginLeft:50,
        marginTop:10
    },

    input_span: {
        width:240,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        marginLeft:-150
      },

  });

export default AddInfo_SeaAnimal