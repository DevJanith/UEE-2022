import { View, Text, Button } from 'react-native'
import React from 'react'
import { ScreenContainer } from '../components'

const Home = () => {
    return (
        <ScreenContainer>
            <View>
                <Text>Home</Text>
                <Button title='Log Out' onPress={() => { }} />
            </View>
        </ScreenContainer>
    )
}

export default Home