import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 10,
        borderRadius: 5,
        backgroundColor: "black"
    }
});

const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
)


export const SignIn = ({ navigation }) => {
    return (
        <ScreenContainer>
            <Text>Sign In Screen</Text>
            <Button style={styles.button} title='Create Account' onPress={() => { navigation.push('CreateAccount') }} />
        </ScreenContainer>
    )
}

export const CreateAccount = ({ navigation }) => (
    <ScreenContainer>
        <Text>Create Account Screen</Text>
        <Button style={styles.button} title='Sign In' onPress={() => { navigation.push('SignIn') }} />
    </ScreenContainer>
)

export const Details = () => (
    <ScreenContainer>
        <Text>Details Screen</Text>
    </ScreenContainer>
)

export const Profile = () => (
    <ScreenContainer>
        <Text>Profile Screen</Text>
    </ScreenContainer>
)

export const Home = () => (
    <ScreenContainer>
        <Text>Home Screen</Text>
    </ScreenContainer>
)

export const Screen1 = () => (
    <ScreenContainer>
        <Text>Screen1 Screen</Text>
    </ScreenContainer>
)

export const Screen2 = () => (
    <ScreenContainer>
        <Text>Screen2 Screen</Text>
    </ScreenContainer>
)