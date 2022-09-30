import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Button } from "@react-native-material/core";
import { Context as TrackContext } from '../context/TrackContext';
import MapView, { Polyline } from 'react-native-maps';
import Spacer from '../components/Spacer';


const TrackDetailScreen = (props) => {

  const { state } = useContext(TrackContext)
  const { _id } = props.route.params.params
  // console.log( _id);

  const track = state.find(trk => trk._id === _id)
  const initialCoords = track.locations[0].coords

  return (
    <SafeAreaView style={styles.viewStyle}>
      <View>

        <Spacer>
          <Text variant='h6' style={styles.txt}>TrackName: {track.name}</Text>
        </Spacer>
        <Spacer>
          <MapView
            initialRegion={{
              longitudeDelta: 0.01,
              latitudeDelta: 0.01,
              ...initialCoords
            }}
            style={styles.map}
          >
            <Polyline coordinates={track.locations.map(loc => loc.coords)}/>
          </MapView>
        </Spacer>
        <Spacer>
          <Button 
            title="Go back" 
            onPress={() => props.navigation.goBack()} 
          />
        </Spacer>
      </View>
    </SafeAreaView>

  )
}

export default TrackDetailScreen

const styles = StyleSheet.create({
  viewStyle: {
    paddingHorizontal: 15,
    flex: 1
  },
  map: {
    height: 230
  },
  txt: {
    textTransform: 'capitalize'
  },
})