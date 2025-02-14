import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const FoodScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>food</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingTop: 70,
    paddingHorizontal: 20,
  },
  text: {
    flex: 1,
    color:"white"
  },


});
export default FoodScreen