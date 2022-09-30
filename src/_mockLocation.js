import * as Location from 'expo-location';

const tenMeterWithDegrees = 0.001;

const getLocation = increment => {
    return {
        timestamp: 1000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 5,
            longitude: -122.084 + increment * tenMeterWithDegrees,
            latitude: 37.4219983 + increment * tenMeterWithDegrees,
        }
    }
}

let counter = 0;

setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    })
    counter++
},1000)