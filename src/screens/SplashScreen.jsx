import React, { useContext, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Context as AuthContext } from '../context/AuthContext';

const SplashScreen = () => {
    const { tryLocalSignIn } = useContext(AuthContext)

    useEffect(() => {
        tryLocalSignIn()
    }, [])

    return (
        <SafeAreaView style={styles.viewStyle}>
            <View>
                <Text>SplashScreen</Text>
            </View>
        </SafeAreaView>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    viewStyle: {
        paddingHorizontal: 15,
        flex: 1
    },
})