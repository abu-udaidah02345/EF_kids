// CustomTextInput.js
import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

const CustomTextInput = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  style,
  defaultValue,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor="#454B60"
        placeholder={placeholder}

        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        defaultValue={defaultValue}
        keyboardType={keyboardType}
        style={[styles.input, style]}
        placeholderStyle={{ fontSize: 16 }} // Adjust the font size as needed
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#D4D1D1',
    borderWidth: 1,
   paddingHorizontal:100,
    borderRadius: 8,
   // width:"100%"
  },
});

export default CustomTextInput;