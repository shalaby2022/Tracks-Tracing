import React, { useContext, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';


const SignupScreen = ({ navigation }) => {
    const { state, signup, clearErrorMsg } = useContext(AuthContext)

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            clearErrorMsg()

        });
        return unsubscribe;
    }, [navigation])


    return (
        <SafeAreaView style={styles.viewStyle}>
            <View>
                <AuthForm
                    headerText={'Sign up for Tracker'}
                    submitButtonText={"Sign Up"}
                    errorMessage={state.errorMessage}
                    onSumbit={signup}
                />

                <NavLink
                    onNavigate={() => navigation.navigate('Signin')}
                    linkTitle={'Already have an account? Sign in'}
                />
            </View>
        </SafeAreaView>
    )
}

export default SignupScreen

const styles = StyleSheet.create({
    viewStyle: {
        paddingHorizontal: 15,
        flex: 1
    },
})