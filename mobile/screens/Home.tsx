import React, {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MovieSwiper from '../components/MovieSwiper';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import MovieCarousel from '../components/MovieCarousel';
const HomeScreen = ({navigation}: {navigation: any}) => {
  return (
    <View
      style={{
        backgroundColor: Colors.black,
        flex: 1,
      }}>
      <View
        style={{
          height: '30%',
          width: '100%',
        }}>
        <MovieSwiper />
      </View>

      <View
        style={{
          height: '70%',
          width: '100%',
        }}>
        <MovieCarousel navigation={navigation} />
      </View>
    </View>
  );
};

export default HomeScreen;
