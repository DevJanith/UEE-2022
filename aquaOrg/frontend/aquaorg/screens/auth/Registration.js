import { View, Text, Button } from 'react-native'
import React, { useContext } from 'react'
import { ScreenContainer } from '../../components'
import { AuthContext } from '../../context/context'

const Registration = ({ navigation }) => {
    const { register } = useContext(AuthContext)
    return (
        <ScreenContainer>
            <View>
                <Text>Registration</Text>
                <Button title='Register' onPress={() => { register() }} />
                <Button title='Login Page' onPress={() => { navigation.push("Login") }} />
            </View>
        </ScreenContainer>
    )
}

export default Registration