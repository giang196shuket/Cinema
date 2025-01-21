import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {IMovie} from '../interface/movie.interface';

const MovieDetailScreen = ({route}: {route: any}) => {
  const {movie} = route.params as {movie: IMovie};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{movie.movieId}</Text>
      <Text style={styles.price}>{movie.movieName}</Text>
      <Text style={styles.description}>
        Mô tả sản phẩm: {movie.movieDescription}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20},
  title: {fontSize: 24, fontWeight: 'bold'},
  price: {fontSize: 20, color: 'green', marginVertical: 10},
  description: {fontSize: 16, color: 'gray'},
});

export default MovieDetailScreen;
