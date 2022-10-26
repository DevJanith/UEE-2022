import { View, Text, Button } from 'react-native'
import React from 'react'
import { ScreenContainer } from '../../components'

const Registration = ({ navigation }) => {
    return (
        <ScreenContainer>
            <View>
                <Text>Registration</Text>
                <Button title='Login' onPress={() => { navigation.push("Login") }} />
            </View>
        </ScreenContainer>
    )
}

export default Registration