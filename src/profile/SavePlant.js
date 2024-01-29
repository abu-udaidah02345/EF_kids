import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function SavePlant({navigation}) {
  const callNext = () => {
    navigation.navigate('Home');
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#0C9352',
        //  alignItems: 'center',
        // justifyContent: 'center',
      }}>
      <Text
        style={{
          fontWeight: '700',
          fontSize: 36,
          color: '#EDFFF6',
          textAlign: 'center',
          marginTop: 25,
        }}>
        Plant tree and save
      </Text>
      <Text
        style={{
          fontWeight: '700',
          fontSize: 36,
          color: '#EDFFF6',
          textAlign: 'center',
          // marginTop: 25,
        }}>
        our future
      </Text>
      <View style={{alignItems: 'center'}}>
        <Image
          source={require('../../assets/images/plant.png')}
          style={{marginTop: 50}}
        />
      </View>
      <View style={{alignItems: 'center', marginTop: 15}}>
        <TouchableOpacity
          style={styles.verifyButton}
          onPress={() => callNext()}>
          <Text style={styles.verifyButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  verifyButton: {
    marginTop: 20,
    backgroundColor: '#E1E1E1',
    paddingVertical: 10,
    paddingHorizontal: 120,
    borderRadius: 15,
    elevation: 5,
  },
  verifyButtonText: {
    color: '#0D0D0D',
    fontSize: 16,
    fontWeight: '600',
    // marginTop: 20,
  },
});
