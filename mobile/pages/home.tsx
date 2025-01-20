import React, {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MovieSwiper from '../components/movieSwiper';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import MovieCarousel from '../components/movieCarousel';
const HomePage = () => {
  return (
    <View
      style={{
        backgroundColor: Colors.black,
        flex: 1,
      }}>
      <View
        style={{
          height: '30%',
          width:"100%"
        }}>
        <MovieSwiper />
      </View>

      <View
        style={{
          height: '70%',
          width:"100%",       
        }}>
        <MovieCarousel />
      </View>
    </View>
  );
};

export default HomePage;
