import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, TextInput, IconButton, Text } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Spacer from './Spacer';



const AuthForm = ({ headerText, errorMessage, onSumbit, submitButtonText }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            <Spacer>
                <Text variant="h4">{headerText}</Text>
            </Spacer>
            <View style={{marginTop: 100}}>
                <TextInput
                    style={styles.Inputs}
                    label="Email"
                    variant="outlined"
                    value={email}
                    placeholder='Enter Your Email'
                    onChangeText={value => setEmail(value)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    leading={props => (
                        <IconButton icon={props => <Icon name="account" {...props} />} {...props} />)}
                />
                <Spacer />
                <TextInput
                    secureTextEntry
                    style={styles.Inputs}
                    label="Password"
                    variant="outlined"
                    value={password}
                    placeholder='Enter Your Password'
                    onChangeText={value => setPassword(value)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    leading={props => (
                        <IconButton icon={props => <Icon name="lock" {...props} />} {...props} />)}
                />
            </View>
            {
                errorMessage
                    ?
                    <Text style={styles.errorMsg}>{errorMessage}</Text>
                    :
                    null
            }
            <Spacer>
                <Button
                    title={submitButtonText}
                    color="lightblue"
                    tintColor="blue"
                    style={{ alignSelf: "center", marginTop: 40 }}
                    onPress={() => onSumbit({ email, password })}
                />
            </Spacer>
        </>
    )
}

export default AuthForm

const styles = StyleSheet.create({
    viewStyle: {
        paddingHorizontal: 15,
        flex: 1
    },
    Inputs: {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    errorMsg: {
        fontSize: 16,
        color: 'red',
        marginTop: 15,
    },
    link: {
        color: 'blue',
    }
})