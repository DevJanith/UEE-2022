import { View, Text, Button, SafeAreaView, TextInput } from 'react-native'
import React, { useContext } from 'react'
import { FocusedStatusBar, ScreenContainer } from '../../components'
import { AuthContext } from '../../context/context'

const Login = ({ navigation }) => {
    const { login } = useContext(AuthContext)
    return (
        // <ScreenContainer>
        //     <View>
        //         <Text>Login</Text>
        //         <Button title='Login' onPress={() => { login() }} />
        //         <Button title='Registration Page' onPress={() => { navigation.push("Registration") }} />
        //         <Button title='ResetPassword Page' onPress={() => { navigation.push("ResetPassword") }} />
        //     </View>
        // </ScreenContainer>
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <FocusedStatusBar
                    barStyle="dark-content"
                    backgroundColor="transparent"
                    translucent={true}
                />
                <Text>Login</Text>
            </SafeAreaView>
        </>
    )
}

export default Login