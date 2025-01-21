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
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import UserPage from './pages/user';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TheaterPage from './pages/theater';
import HomePage from './pages/home';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const optionTab =
  (title: string) =>
  ({navigation}: any) => {
    return {
      headerTransparent: true,
      headerStyle: {
        backgroundColor: 'transparent',
        height: 50,
      },
      headerTintColor: 'transparent',
      title: title,
      headerLeft: () => (
        <Ionicons
          name="menu" 
          size={30}
          color="#ffffff"
          style={{marginLeft: 15}}
          onPress={() => navigation.openDrawer()}
        />
      ),
      headerRight: () => (
        <Ionicons
          name="notifications"
          size={30}
          color="#ffffff"
          style={{marginRight: 15}}
          onPress={() => navigation.openDrawer()}
        />
      ),
    };
  };
const CustomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName: string = '';

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'User') {
          iconName = focused ? 'person' : 'person-outline';
        } else if (route.name === 'Theater') {
          iconName = focused ? 'film' : 'film-outline';
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
      component={HomePage}
      options={optionTab('Trang chủ')}
    />
    <Tab.Screen
      name="Theater"
      options={optionTab('Chi nhánh')}
      component={TheaterPage}
    />
    <Tab.Screen
      name="User"
      options={optionTab('Cá nhân')}
      component={UserPage}
    />
  </Tab.Navigator>
);

// Custom drawer content
const CustomDrawerContent = (props: any) => {
  return (
    <DrawerContentScrollView {...props} >
      <DrawerItem
        icon={({color, size}) => (
          <Ionicons name="home" size={size} color={'white'} />
        )}
        label="Trang chủ"
        labelStyle={styles.drawerText}
        onPress={() => props.navigation.navigate('Drawer', { screen: 'Home' })}
      />
      <DrawerItem
        icon={({color, size}) => (
          <Ionicons name="film" size={size} color={'white'} />
        )}
        label="Chi nhánh"
        labelStyle={styles.drawerText}
        onPress={() => props.navigation.navigate('Drawer', { screen: 'Theater' })}
      />
      <DrawerItem
        icon={({color, size}) => (
          <Ionicons name="person" size={size} color={'white'} />
        )}
        label="Cá nhân"
        labelStyle={styles.drawerText}
        onPress={() => props.navigation.navigate('Drawer', { screen: 'User' })}
      />
    </DrawerContentScrollView>
  );
};

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

      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={props => <CustomDrawerContent {...props} />}
          screenOptions={{
            drawerStyle: {
              backgroundColor: '#333',
              width: 250,
              borderEndEndRadius:0,
              borderTopEndRadius: 0
            },
            drawerLabelStyle: {
              color: '#fff',
            },

          }}>
          <Drawer.Screen
            name="Drawer"
            component={CustomTabNavigator}
            options={{headerShown: false}}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  drawerText: {
    color: 'white',
  },
});

export default App;
