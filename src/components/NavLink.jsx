import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from "@react-native-material/core";
import Spacer from './Spacer'


const NavLink = ({ linkTitle, onNavigate }) => {

    return (
        <TouchableOpacity
            onPress={onNavigate}
        >
            <Spacer>
                <Text style={styles.link}>{linkTitle}</Text>
            </Spacer>
        </TouchableOpacity>
    )
}

export default NavLink

const styles = StyleSheet.create({
    link: {
        color: 'blue',
    }
})