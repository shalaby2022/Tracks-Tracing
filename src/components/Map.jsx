import React, { useContext } from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
    const { state: { currentLocation, locations } } = useContext(LocationContext)
    console.log(locations.length)
    if(!currentLocation) {
        return <ActivityIndicator size='large' style={{ marginTop: 250 }} color='blue' />
    }

    return (
        <View style={{borderRadius: 5}}>
            <MapView 
                style={styles.map}
                initialRegion={{
                    ...currentLocation.coords,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}
            >
                <Circle
                    center={currentLocation.coords}
                    radius={30}
                    strokeColor='rgba(158, 158, 255, 1)'
                    fillColor='rgba(158, 158, 255,0.5)'
                />
                <Polyline
                    coordinates={locations.map(loc => loc.coords)}
                />
            </MapView>
        </View>
    )
}

export default Map

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: 270,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
})