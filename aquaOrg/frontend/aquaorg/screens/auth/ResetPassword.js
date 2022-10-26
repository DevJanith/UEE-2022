import { View, Text, Button } from 'react-native'
import React from 'react'
import { ScreenContainer } from '../../components'

const ResetPassword = ({ navigation }) => {
    return (
        <ScreenContainer>
            <View>
                <Text>ResetPassword</Text>
                <Button title='Login' onPress={() => { navigation.push("Login") }} />
            </View>
        </ScreenContainer>
    )
}

export default ResetPassword