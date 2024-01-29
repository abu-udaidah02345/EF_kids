import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
// import HalfEclipse from '../../components/HalfEclipse';

export default function Home({navigation}) {
  const data = [
    {
      id: 1,
      image: require('../../../assets/images/image1.png'),
      text: '2 Letter Practice',
    },
    {
      id: 2,
      image: require('../../../assets/images/image2.png'),
      text: 'A Letter',
    },
    {
      id: 3,
      image: require('../../../assets/images/image3.png'),
      text: 'Ka Letter',
    },
    {
      id: 4,
      image: require('../../../assets/images/image4.png'),
      text: 'Drawing',
    },
    {
      id: 5,
      image: require('../../../assets/images/image1.png'),
      text: 'Hindi Practice',
    },
    {
      id: 6,
      image: require('../../../assets/images/image2.png'),
      text: 'English Practice',
    },
    {
      id: 7,
      image: require('../../../assets/images/image3.png'),
      text: 'Math Practice',
    },
    {
      id: 8,
      image: require('../../../assets/images/image4.png'),
      text: 'Art Practice',
    },
  ];

  const renderItem = ({item}) => (
    <View style={styles.imageContainer}>
      <Image source={item.image} style={styles.image} />
      <Text
        onPress={() => navigation.navigate('AlphabeticalPractice')}
        style={styles.wrapperText}>
        {item.text}
      </Text>
    </View>
  );
  return (
    <View style={styles.container}>
      {/* <HalfEclipse /> */}
      <FlatList
        horizontal
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C9352',
  },
  imageContainer: {
    marginHorizontal: 35,
    alignItems: 'center',
    marginVertical: 35,
  },
  image: {
    width: 137,
    height: 113,
    borderRadius: 10,
  },
  text: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  wrapperText: {
    fontSize: 22,
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
  },
});
