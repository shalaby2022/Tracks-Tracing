//  Modules
import React from 'react'
import { StyleSheet } from 'react-native';
import  FontAwesome5  from '@expo/vector-icons/FontAwesome5';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { Provider as TrackProvider } from './src/context/TrackContext';

// Screens
import AccountScreen from './src/screens/AccountScreen';
import SignupScreen from './src/screens/SignupScreen';
import SigninScreen from './src/screens/SigninScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import SplashScreen from './src/screens/SplashScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';

// Navigation Modules
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { setNavigator } from './src/navigationRef';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TrackTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if(route.name === 'TrackList') {
            iconName = 'list'
            size = focused ? 28 : 18;
            color = focused ? 'blue' : 'gray'
          } else if(route.name === 'TrackCreate') {
            iconName = 'plus'
            size = focused ? 28 : 18;
            color = focused ? 'blue' : 'gray'
          } else if(route.name === 'Account') {
            iconName = 'user'
            size = focused ? 28 : 18;
            color = focused ? 'blue' : 'gray'
          }
          return(
            <FontAwesome5 
              name = {iconName}
              size = {size}
              color = {color}
            />
          )
        }
      })}
      
      >
      <Tab.Screen name='TrackList' component={TrackListScreen} options={{headerShown: false}}/>
      <Tab.Screen name="TrackCreate" component={TrackCreateScreen} options={{headerShown: false}}/>
      <Tab.Screen name="Account" component={AccountScreen} options={{headerShown: false}}/>
    </Tab.Navigator>
  );
}

export default function App() {

  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <NavigationContainer ref={(navigator) => setNavigator(navigator)}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Splash" component={SplashScreen} />
              <Stack.Screen name="Signup" component={SignupScreen} />
              <Stack.Screen name="Signin" component={SigninScreen} />
              <Stack.Screen name='TrackTabs' component={TrackTabs} />
              <Stack.Screen name='trackDetail' component={TrackDetailScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
