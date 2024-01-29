import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function KidOrParent({navigation}) {
  const callNext = () => {
    navigation.navigate('SavePlant');
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
        Open as
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          paddingHorizontal: 12,
          //  justifyContent: 'space-around',
          marginTop: 50,
        }}>
        <Image source={require('../../assets/images/kid.png')} />
        <Image source={require('../../assets/images/parent.png')} />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <TouchableOpacity
          style={styles.verifyButton}
          onPress={() => callNext()}>
          <Text style={styles.verifyButtonText}>Kid</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.verifyButton}
          onPress={() => callNext()}>
          <Text style={styles.verifyButtonText}>Parent</Text>
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
    paddingHorizontal: 50,
    borderRadius: 35,
    elevation: 5,
  },
  verifyButtonText: {
    color: '#0D0D0D',
    fontSize: 16,
    fontWeight: '600',
    // marginTop: 20,
  },
});
