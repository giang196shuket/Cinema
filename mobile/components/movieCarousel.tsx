import {View, Dimensions, Text, StyleSheet, Image} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {IMovie} from '../interface/movie.interface';
const {width} = Dimensions.get('window');

const MovieCarousel = () => {
  const [movieList, setMovieList] = useState<IMovie[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data: response} = await axios.get('http://10.0.2.2:5000/Movie');
        console.log(response);
        setMovieList(response);
      } catch (error: unknown) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Carousel
      width={width}
      data={movieList}
      loop={false}
      autoPlay={false}
      defaultIndex={1}
      mode="parallax"
      modeConfig={{
        parallaxScrollingOffset: 170,
        parallaxScrollingScale: 1,
        parallaxAdjacentItemScale: 0.8,
      }}
      renderItem={({item, index, animationValue}) => {
        console.log("animationValue", animationValue);
        return (
          <View style={styles.itemContainer}>
            <View style={[styles.imageContainer]}>
              <Image source={{uri: item.movieImage}} style={styles.image} />
            </View>
            <Text style={styles.title}>{item.movieName}</Text>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width,
    flex: 1,
  },
  imageContainer: {
    width: width * 0.6,
    overflow: 'scroll',
    borderRadius: 10,
    // backgroundColor:"red"
  },
  image: {
    width: '100%',
    height: '90%',
  },
  title: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -40,
  },
});

export default MovieCarousel;
