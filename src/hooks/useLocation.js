import { useEffect, useState } from "react";
import { Accuracy, requestForegroundPermissionsAsync, watchPositionAsync } from "expo-location";


export default (shouldTrack, callback) => {
  const [error, setError] = useState(null)

  useEffect(() => {
    
    let subscribe;
    const startWatching = async () => {
      try {
        await requestForegroundPermissionsAsync()
        subscribe = await watchPositionAsync({
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10
        },
          callback
        )
      } catch (e) {
        setError(e)
      }
    }

    if (shouldTrack) {
      startWatching()
    } else {
      if(subscribe) {
        subscribe.remove()
      }
      subscribe = null
    }

    return () => {
      if (subscribe) {
        subscribe.remove()
      }
    }
  }, [shouldTrack, callback])

  return [error]
}
