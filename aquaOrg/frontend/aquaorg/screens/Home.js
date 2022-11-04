import { View, Text, Button } from 'react-native'
import React, { useContext } from 'react'
import { ScreenContainer } from '../components'
import { AuthContext } from '../context/context'

const Home = () => {

    const { logout } = useContext(AuthContext)

    return (
        <ScreenContainer>
            <View>
                <Text>Home</Text>
                <Button title='Log Out' onPress={() => { logout() }} />
            </View>
        </ScreenContainer>
    )
}

export default Home