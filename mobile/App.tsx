/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MoviePage from './pages/movie';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import UserPage from './pages/user';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import vector icons

const Tab = createBottomTabNavigator();
function App(): React.JSX.Element {
  const isDarkMode = 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    height: '100%' as const,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {/* <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          
          </View>
       </ScrollView> */}

      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline'; // Icon for Home tab
              } else if (route.name === 'User') {
                iconName = focused ? 'person' : 'person-outline'; // Icon for User tab
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarStyle: {
              backgroundColor: '#222',
              height: 70,
              paddingTop: 5,
            },
            tabBarActiveTintColor: 'green',
            tabBarLabelStyle: {
              fontSize: 14,
            },
          })}>
          <Tab.Screen
            name="Home"
            component={MoviePage}
            options={{
              headerTransparent: true,
              headerStyle: {
                backgroundColor: 'transparent',
                height: 50,
              },
              headerTintColor: 'transparent',
              title: 'Trang chủ',
              headerLeft: () => (
                <Ionicons
                  name="menu" // Menu (hamburger) icon
                  size={30}
                  color="#ffffff"
                  style={{marginLeft: 15}}
                />
              ),
            }}
          />
          <Tab.Screen
            name="User"
            options={{title: 'Cá nhân'}}
            component={UserPage}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default App;
