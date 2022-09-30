import React, { useContext } from 'react'
import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from "@react-native-material/core";
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';



const AccountScreen = () => {
  const { signout } = useContext(AuthContext)

  return (
    <SafeAreaView style={styles.viewStyle}>
      <Text style={styles.txt}>AccountScreen</Text>
      <Spacer>
        <Button
          title="Sign Out"
          onPress={signout}
        />
      </Spacer>
    </SafeAreaView>

  )
}

export default AccountScreen

const styles = StyleSheet.create({
  viewStyle: {
    paddingHorizontal: 15,
    flex: 1
  },
  txt: {
    fontSize: 40,
  }
})