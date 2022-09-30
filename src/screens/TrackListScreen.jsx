import { StyleSheet, FlatList, TouchableOpacity, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { Context as TrackContext } from '../context/TrackContext';
import { SafeAreaView } from 'react-native-safe-area-context';

const TrackListScreen = ({ navigation }) => {

  const { state, fetchTracks } = useContext(TrackContext)
  console.log('state', state)

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchTracks()

    });
    return unsubscribe;
  }, [navigation])


  return (
    <SafeAreaView>
      {
        state && state.length > 0 &&
        <FlatList
          data={state}
          keyExtractor={item => item._id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('trackDetail', {
                  screen: 'TrackDetailScreen',
                  params: {_id: item._id}
                  })
                }
              >
                <View style={styles.itemView}>
                  <Text style={styles.itemText}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      }
    </SafeAreaView>
  )
}

export default TrackListScreen

const styles = StyleSheet.create({
  viewStyle: {
    paddingHorizontal: 15,
    flex: 1
  },
  itemView: {
    backgroundColor: '#00f',
    heigth: 20,
    width: '95%',
    marginHorizontal: 10,
    marginVertical: 15,
  },
  itemText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    paddingVertical: 15, 
    paddingLeft: 10
  },
})