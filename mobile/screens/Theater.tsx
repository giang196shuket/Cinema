import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ITheater} from '../interface/theater.inteface';
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TheaterScreen = () => {
  const [theaterList, setTheaterList] = useState<ITheater[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data: response} = await axios.get(
          'http://10.0.2.2:5000/Theater',
        );
        console.log(response);
        setTheaterList(response);
      } catch (error: unknown) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chọn rạp xem phim</Text>
      <ScrollView>
        {theaterList.map((theater, index) => (
          <View style={styles.row} key={theater.theaterId}>
            <Image
              style={styles.image}
              source={{
                uri: theater.theaterImage,
              }}
            />
            <View style={styles.col}>
              <Text key={index} style={styles.textName}>
                {theater.theaterName}
              </Text>

              <View style={styles.boxText}>
                <Ionicons
                  name="location-outline"
                  size={15}
                  color="gray"
                  style={{paddingTop: 2.5}}
                />
                <Text key={index} style={styles.textAddress}>
                  {theater.theaterAddress}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingTop: 70,
    paddingHorizontal: 20,
  },
  title: {color: 'white', fontSize: 20, fontWeight: 'bold', marginBottom: 20},
  row: {
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
    marginBottom: 20,
  },
  image: {
    width: 125,
    height: 125,
  },
  col: {
    flexDirection: 'column',
    flex: 1,
    gap: 5,
  },
  textName: {color: 'white', fontSize: 16, fontWeight: '600'},
  boxText:{
    flexDirection:"row",
    alignItems: "baseline",
    gap: 5
  },
  textAddress: {
    color: 'gray',
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'justify',
    flex: 1,
    flexWrap: 'wrap',
    lineHeight:20
  },
});
export default TheaterScreen;
