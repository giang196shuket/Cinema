import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const MovieListScreen = () => {
  return (
    <View style={styles.container}></View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingTop: 70,
    paddingHorizontal: 20,
  },

});
export default MovieListScreen