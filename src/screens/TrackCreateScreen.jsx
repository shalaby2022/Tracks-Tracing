import '../_mockLocation'; 
import React, { useCallback, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useIsFocused } from '@react-navigation/native';
import { Text } from "@react-native-material/core";
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import Map from '../components/Map';
import TrackForm from '../components/TrackForm';


const TrackCreateScreen = () => {
  const isFocused = useIsFocused();
  const { state: { recording }, addLocation } = useContext(LocationContext)

  const callback = useCallback((Location) => {
    addLocation(Location, recording)} , [recording])

  const [ error ] = useLocation(isFocused || recording , callback)


  return (
    <SafeAreaView style={styles.viewStyle}>
      <Text variant="h4" style={styles.txt}>Create a Track</Text>
      <Map />
      {
        error
          ?
          <Text>Please Enable Location Services</Text> : null
      }
      <TrackForm/>
    </SafeAreaView>

  )
}

export default TrackCreateScreen

const styles = StyleSheet.create({
  viewStyle: {
    paddingHorizontal: 15,
    flex: 1
  },
  txt: {
    marginBottom: 10,
  }
})