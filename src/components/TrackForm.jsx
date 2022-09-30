import React, { useContext } from 'react'
import { StyleSheet, Text } from 'react-native'
import { Button, TextInput } from "@react-native-material/core";
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';


const TrackForm = () => {
    const { state: { name, recording, locations },
        startRecording,
        stopRecording,
        changeName
    } = useContext(LocationContext)

    const  [saveTrack] = useSaveTrack()

    return (
        <>
            <Spacer>
                <TextInput
                    style={styles.Inputs}
                    variant="outlined"
                    value={name}
                    label='Name'
                    placeholder='Enter Track Name'
                    onChangeText={value => changeName(value)}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </Spacer>
            <Spacer>
                {
                    recording
                        ?
                        <Button title='Stop Recording' style={styles.btn} onPress={stopRecording} />
                        :
                        <Button title='Start Recording' style={styles.btn} onPress={startRecording} />
                }
            </Spacer>
            <Spacer>
                {
                    !recording && locations.length
                        ?
                        <Button title='Save Recording' style={styles.btn} onPress={saveTrack} />
                        :
                        null
                }
            </Spacer>
        </>
    )
}

export default TrackForm

const styles = StyleSheet.create({
    Inputs: {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    btn: {
        width: "50%",
        height: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'center'
    }
})