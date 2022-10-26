import { View, Text, Button } from 'react-native'
import React from 'react'
import { ScreenContainer } from '../../components'

const Login = ({ navigation }) => {
    return (
        <ScreenContainer>
            <View>
                <Text>Login</Text>
                <Button title='Registration' onPress={() => { navigation.push("Registration") }} />
                <Button title='ResetPassword' onPress={() => { navigation.push("ResetPassword") }} />
            </View>
        </ScreenContainer>
    )
}

export default Login