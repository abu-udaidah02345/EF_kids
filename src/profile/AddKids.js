import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

function AddKids({navigation}) {
  const callNext = () => {
    navigation.navigate('KidOrParent');
  };
  return (
    <View style={styles.container}>
      {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> */}
        <View style={{alignItems: 'center', marginTop: 50}}>
          <Image
            source={require('../../assets/images/profile.png')}
            style={{width: 149, height: 149}}
          />
          <Text
            style={{
              color: '#041F3F',
              fontSize: 24,
              fontWeight: '700',
              marginTop: 12,
            }}>
            Make Kids Profile
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 20,
            //  marginLeft: 5,
          }}>
          <View style={styles.smallContainer}>
            <TextInput
              style={styles.input}
              placeholder="Kids Name"
              placeholderTextColor="#545F71"
            />
          </View>
          <View style={styles.smallContainer}>
            <TextInput
              style={styles.input}
              placeholder="Age"
              placeholderTextColor="#545F71"
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 20,
          }}>
          <View style={styles.smallContainer}>
            <TextInput
              style={styles.input}
              placeholder="Class"
              placeholderTextColor="#545F71"
            />
          </View>
          <View style={styles.smallContainer}>
            <TextInput
              style={styles.input}
              placeholder="Gender"
              placeholderTextColor="#545F71"
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20,
          }}>
          <View style={styles.smallContainer}>
            <TextInput
              style={styles.input}
              placeholder="Birthday"
              placeholderTextColor="#545F71"
            />
          </View>
        </View>
        <View style={{alignItems: 'center', marginTop: 15}}>
          <TouchableOpacity
            style={styles.verifyButton}
            onPress={() => callNext()}>
            <Text style={styles.verifyButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      {/* </ScrollView> */}
    </View>
  );
}

export default AddKids;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  smallContainer: {
    width: 141,
    height: 48,
    borderColor: '#545F71',
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 10,
  },
  input: {
    flex: 1,
    color: '#000', // Text color
    paddingHorizontal: 15,
  },
  wrapperText: {
    color: '#545F71',
    fontSize: 14,
    fontWeight: '400',
    marginTop: 2,
    marginLeft: 7,
  },
  verifyButton: {
    marginTop: 20,
    backgroundColor: '#0C9352',
    paddingVertical: 10,
    paddingHorizontal: 148,
    borderRadius: 15,
  },
  verifyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    // marginTop: 20,
  },
});