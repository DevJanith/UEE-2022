import React from 'react'
import { Button, Text, View } from 'react-native'
import { ScreenContainer } from '../../components'

const Page5 = ({ navigation }) => {
    return (
        <ScreenContainer>
            <View>
                <Text>Start Page 6</Text>
                <Button title='Donation Page' onPress={() => { navigation.push("Donation") }} />
            </View>
        </ScreenContainer>
    )
}

export default Page6