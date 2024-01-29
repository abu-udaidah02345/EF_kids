


import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import {useRoute, CommonActions} from '@react-navigation/native';

const VerifyAccount = ({navigation}) => {
  const route = useRoute();

  const mobileNumber = route.params?.phoneNumber;

  const [otp, setOtp] = useState(['', '', '', '']);

  const handleOTPChange = (index, value) => {
    if (value.length === 1 && index < 3) {
      // Move focus to the next TextInput
      otp[index + 1].focus();
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleVerifyCode = () => {
    // Implement your code verification logic here
    const enteredCode = otp.join('');
    console.log('Verifying code:', enteredCode);
    navigation.navigate('AddKids');
    // Add your code verification logic here
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          color: '#041F3F',
          fontSize: 32,
          fontWeight: '700',
          textAlign: 'center',
          marginTop: 34,
        }}>
        Verify your account
      </Text>
      <Text
        style={{
          textAlign: 'center',
          marginTop: 10,
          color: '#041F3F',
          fontSize: 16,
          fontWeight: '400',
        }}>
        Enter the 4-digit PIN code sent to your
      </Text>
      <Text
        style={{
          textAlign: 'center',
          marginTop: 5,
          color: '#041F3F',
          fontSize: 16,
          fontWeight: '400',
        }}>
        phone {mobileNumber}
      </Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            onChangeText={value => handleOTPChange(index, value)}
            value={digit}
            keyboardType="numeric"
            maxLength={1}
            ref={ref => (otp[index] = ref)}
            // Add any additional TextInput props you may need
          />
        ))}
      </View>
      <TouchableOpacity style={styles.verifyButton} onPress={handleVerifyCode}>
        <Text style={styles.verifyButtonText}>Verify</Text>
      </TouchableOpacity>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '600',
          fontSize: 16,
          marginTop: 15,
          color: '#041F3F',
          textDecorationLine: 'underline',
          textDecorationStyle: 'solid',
          textDecorationColor: '#041F3F',
        }}>
        Request new code
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  otpInput: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    textAlign: 'center',
    fontSize: 18,
    margin: 5,
    borderRadius: 6,
  },
  verifyButton: {
    marginTop: 20,
    backgroundColor: '#0C9352',
    paddingVertical: 10,
    paddingHorizontal: 100,
    borderRadius: 15,
  },
  verifyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default VerifyAccount;