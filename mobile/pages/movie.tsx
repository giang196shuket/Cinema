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
const MoviePage = () => {
  return (
    <View
      style={{
        backgroundColor: Colors.black,
        flex: 1,
      }}>
      <View
        style={{
          // flex: 1,
          height: '30%',
        }}>
        <MovieSwiper />
      </View>

      <View
        style={{
          // flex: 1,
          height: '70%',
          paddingVertical:0,
       
        }}>
        <MovieCarousel />
      </View>
    </View>
  );
};

export default MoviePage;
