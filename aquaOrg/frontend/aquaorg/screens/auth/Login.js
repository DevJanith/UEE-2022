import React, { useContext } from 'react'
import { Button, Image, SafeAreaView, ScrollView, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { FocusedStatusBar } from '../../components'
import { assets, COLORS, FONTS, SIZES } from '../../constants'
import { AuthContext } from '../../context/context'

const Login = ({ navigation }) => {
    const { login } = useContext(AuthContext)

    return (
        <>
            <SafeAreaView
                style={{
                    flex: 1
                }}>
                <FocusedStatusBar
                    background={COLORS.primary}
                />
                <ScrollView>
                    <View style={{ flex: 1 }}>
                        <View style={{ zIndex: 0, marginLeft: 20 }}>
                            <Text style={{
                                fontFamily: FONTS.bold,
                                fontSize: 60,
                                color: COLORS.white,
                                marginTop: 150,
                                marginBottom: 30,
                                textAlign: "center"
                            }}>
                                Login
                            </Text>
                            <View style={{
                                marginTop: 60,
                                marginBottom: SIZES.large,
                                marginRight: SIZES.extraLarge,
                            }}>
                                <Text style={{
                                    fontFamily: FONTS.bold,
                                    fontSize: SIZES.medium,
                                    color: COLORS.primary,
                                    margin: SIZES.base
                                }}>
                                    User Name
                                </Text>
                                <View style={{
                                    width: "100%",
                                    borderRadius: SIZES.font,
                                    backgroundColor: COLORS.lightCustomColor,
                                    flexDirection: "row",
                                    alignItems: "center",
                                    paddingHorizontal: SIZES.font,
                                    paddingVertical: SIZES.small - 2,
                                    marginBottom: SIZES.large
                                }}>
                                    <Image
                                        source={assets.user}
                                        resizeMode="contain"
                                        style={{
                                            height: 20,
                                            width: 20,
                                            marginRight: SIZES.base
                                        }}
                                    />
                                    <TextInput
                                        placeholder='Enter User Name'
                                        style={{ flex: 1, color: COLORS.white }}
                                        onChangeText={() => { }}
                                    />
                                </View>
                                <Text style={{
                                    fontFamily: FONTS.bold,
                                    fontSize: SIZES.medium,
                                    color: COLORS.primary,
                                    margin: SIZES.base
                                }}>
                                    Password
                                </Text>
                                <View style={{
                                    width: "100%",
                                    borderRadius: SIZES.font,
                                    backgroundColor: COLORS.lightCustomColor,
                                    flexDirection: "row",
                                    alignItems: "center",
                                    paddingHorizontal: SIZES.font,
                                    paddingVertical: SIZES.small - 2

                                }}>
                                    <Image
                                        source={assets.password}
                                        resizeMode="contain"
                                        style={{
                                            height: 20,
                                            width: 20,
                                            marginRight: SIZES.base
                                        }}
                                    />
                                    <TextInput
                                        placeholder='Enter Password'
                                        secureTextEntry={true}
                                        style={{ flex: 1, color: COLORS.white }}
                                        onChangeText={() => { }}
                                    />
                                </View>
                            </View>
                            <View
                                style={{
                                    margin: SIZES.base
                                }}
                            >
                                <Text style={{
                                    fontFamily: FONTS.regular,
                                    fontSize: SIZES.medium,
                                    color: COLORS.primary,
                                    textAlign: "left"
                                }}>
                                    Forget Password ?
                                    <Text
                                        style={{
                                            fontFamily: FONTS.bold,
                                            fontSize: SIZES.medium,
                                            color: COLORS.primary,
                                            textAlign: "left",
                                            cursor: "pointer"
                                        }}
                                        onPress={() => { navigation.push("ResetPassword") }}
                                    > Click Here</Text>
                                </Text>
                            </View>
                            <View
                                style={{
                                    marginTop: SIZES.large,
                                    alignItems: "center"
                                }}
                            >
                                <TouchableOpacity
                                    style={{
                                        backgroundColor: COLORS.darkCustomColor,
                                        padding: SIZES.font,
                                        // margin: SIZES.small,
                                        marginRight: SIZES.large,
                                        borderRadius: SIZES.font,
                                        marginTop: 10,
                                        alignContent: "center",
                                        width: '50%'

                                    }}
                                    onPress={() => { login() }}
                                >
                                    <Text style={{
                                        fontFamily: FONTS.bold,
                                        fontSize: SIZES.large,
                                        color: COLORS.white,
                                        textAlign: "center"
                                    }}>
                                        Login
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View
                                style={{
                                    margin: SIZES.base,
                                    alignItems: "center"
                                }}
                            >
                                <Text style={{
                                    fontFamily: FONTS.regular,
                                    fontSize: SIZES.medium,
                                    color: COLORS.primary,
                                    margin: SIZES.medium
                                }}>
                                    Not a User ?
                                    <Text
                                        style={{
                                            fontFamily: FONTS.bold,
                                            fontSize: SIZES.medium,
                                            color: COLORS.primary,
                                        }}
                                        onPress={() => { navigation.push("Registration") }}
                                    > Register</Text>
                                </Text>
                            </View>
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
                                source={assets.b1}
                                resizeMode="cover"
                                style={{
                                    width: "100%",
                                    height: 300,
                                    borderBottomLeftRadius: SIZES.medium,
                                    borderBottomRightRadius: SIZES.medium,
                                }}
                            />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView >
        </>
    )
}

export default Login