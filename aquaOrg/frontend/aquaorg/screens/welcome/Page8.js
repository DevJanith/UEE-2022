import React from 'react'
import { Button, Text, View } from 'react-native'
import { ScreenContainer } from '../../components'

const Page5 = ({ navigation }) => {
    return (
        <ScreenContainer>
            <View>
                <Text>Start Page 7</Text>
                <Button title='One time Donation Page' onPress={() => { navigation.push("Donation methods") }} />
            </View>
        </ScreenContainer>
    )
}

export default Page8