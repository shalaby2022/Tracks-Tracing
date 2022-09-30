import React, { useContext, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';


const SigninScreen = ({ navigation }) => {
  const { state, signin, clearErrorMsg } = useContext(AuthContext)

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
          headerText={'Sign in to Your Account'}
          errorMessage={state.errorMessage}
          submitButtonText={"Sign in"}
          onSumbit={signin}
        />

        <NavLink
          onNavigate={() => navigation.navigate('Signup')}
          linkTitle={'Don\'t have an account? Go Back Sign up'}
        />
      </View>
    </SafeAreaView>
  )
}

export default SigninScreen

const styles = StyleSheet.create({
  viewStyle: {
    paddingHorizontal: 15,
    flex: 1
  },
})