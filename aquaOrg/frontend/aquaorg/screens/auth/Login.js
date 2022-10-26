import { View, Text, Button } from 'react-native'
import React, { useContext } from 'react'
import { ScreenContainer } from '../../components'
import { AuthContext } from '../../context/context'

const Login = ({ navigation }) => {
    const { login } = useContext(AuthContext)
    return (
        <ScreenContainer>
            <View>
                <Text>Login</Text>
                <Button title='Login' onPress={() => { login() }} />
                <Button title='Registration Page' onPress={() => { navigation.push("Registration") }} />
                <Button title='ResetPassword Page' onPress={() => { navigation.push("ResetPassword") }} />
            </View>
        </ScreenContainer>
    )
}

export default Login