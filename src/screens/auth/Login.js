import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ToastAndroid,
  Image,
  TextInput,
} from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import VerifyAccount from './VerifyAccount';

const {width, height} = Dimensions.get('window');

function Login({navigation}) {
  const [splashScreensLoading, setSplashScreensLoading] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('');

  React.useEffect(() => {
    SplashScreen();
  }, []);

  const SplashScreen = async () => {
    setTimeout(() => {
      setSplashScreensLoading(false);
    }, 2000);
  };

  const callVerifyAccount = async () => {
    // try {
    //   const confirmation = await auth().signInWithPhoneNumber(
    //     `+${phoneNumber}`,
    //   );
    //   navigation.navigate('VerifyAccount', {confirmation});
    // } catch (error) {
    //   console.error('Phone number authentication error:', error);
    //   ToastAndroid.showWithGravity(
    //     'Authentication failed',
    //     ToastAndroid.SHORT,
    //     ToastAndroid.CENTER,
    //   );
    // }
    console.log('rahim');
    navigation.navigate('VerifyAccount');
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: splashScreensLoading ? '#0C9352' : 'white',
      }}>
      {splashScreensLoading === true ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#0C9352',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../../assets/images/Logo.png')}
            style={{width: 145, height: 145}}
          />
        </View>
      ) : (
        <>
          <View
            style={{
              height: 180,
              width: '55%',
              right: 0,
              borderTopLeftRadius: 100,
              borderBottomLeftRadius: 100,

              backgroundColor: '#EDFFF6',
              alignSelf: 'flex-end',
            }}>
            {/* <Image
              source={require('../../../assets/images/teddypier.png')} // Replace with your image URL
              style={{alignSelf: 'flex-end', marginTop: 25}}
            /> */}
          </View>
          <View style={{marginTop: -100}}>
            <Text
              style={{
                color: '#041F3F',
                textAlign: 'center',
                fontSize: 24,
                marginTop: 38,
                fontWeight: '700',
              }}>
              Register
            </Text>
            <Text
              style={{
                color: '#454B60',
                fontSize: 16,
                marginTop: 10,
                fontWeight: '700',
                textAlign: 'center',
              }}>
              Enter your details to register
            </Text>
            <View
              style={{
                paddingHorizontal: 25,
                marginTop: 25,
                position: 'relative',
              }}>
              <CustomTextInput
                placeholder="Mobile Number"
                value={phoneNumber}
                onChangeText={text => setPhoneNumber(text)}
                keyboardType="phone-pad"
                style={styles.textInput}
              />
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  top: 23,
                  right: 35,
                }}
                onPress={() => callVerifyAccount()}>
                <Text
                  style={{color: '#BAC0CA', fontSize: 16, fontWeight: '400'}}>
                  Verify
                </Text>
              </TouchableOpacity>
            </View>
            <Text
              style={{
                textAlign: 'center',
                color: '#454B60',
                fontSize: 16,
                fontWeight: '400',
              }}>
              Or Sign Up in with
            </Text>
            <View
              style={{
                marginTop: 25,
                flexDirection: 'row',
                justifyContent: 'space-around',
                paddingHorizontal: 12,
              }}>
              <View
                style={{
                  width: 149,
                  height: 49,
                  borderWidth: 1,
                  alignItems: 'center',
                  justifyContent: 'center',

                  borderRadius: 10,
                  borderColor: '#D4D1D1',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={require('../../../assets/images/google.png')}
                    style={{width: 24, height: 24}}
                  />
                  <Text
                    style={{
                      color: '#454B60',
                      fontSize: 16,
                      fontWeight: '600',
                      marginLeft: 4,
                    }}>
                    Google
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: 149,
                  height: 49,
                  borderWidth: 1,
                  alignItems: 'center',
                  justifyContent: 'center',

                  borderRadius: 10,
                  borderColor: '#D4D1D1',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={require('../../../assets/images/facebook.png')}
                    style={{width: 13, height: 24}}
                  />
                  <Text
                    style={{
                      color: '#454B60',
                      fontSize: 16,
                      fontWeight: '600',
                      marginLeft: 4,
                    }}>
                    Facebook
                  </Text>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#454B60',
                  fontSize: 16,
                  marginTop: 20,
                  fontWeight: '400',
                }}>
                Need help? Visit our
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#454B60',
                  fontSize: 16,
                  marginTop: 20,
                  marginLeft: 5,

                  fontWeight: '700',
                }}>
                help center
              </Text>
            </View>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    marginTop: 10,
    height: 48, // Set the width as needed
    marginBottom: 10,
    color: '#454B60',
    fontSize: 18,
    fontWeight: '500',
  },
});
export default Login;