import React, { useContext, useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { getUser } from '../api';
import { ScreenContainer } from '../components';
import { AuthContext } from '../context/context';

const Home = () => {

    const { logout } = useContext(AuthContext)

    const id = "636bb46d6018b5eeb2c92548"
    const [successData, setSuccessData] = useState()
    const [errorData, setErrorData] = useState()
    const [isSuccess, setIsSuccess] = useState(false)
    const [isPending, setIsPending] = useState(false)
    const [isError, setIsError] = useState(false)

    const getUserDetails = (value) => {
        setIsPending(true)

        getUser(value)
            .then((response) => {
                console.log(response.data.result);
                setSuccessData(response.data.result)
                setIsPending(false)
                setIsSuccess(true)
            })
            .catch((err) => {
                console.log(err);
                setErrorData(err.response)
                setIsPending(false)
                setIsError(true)
            });
    };

    useEffect(() => {
        getUserDetails(id)
    }, [])

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