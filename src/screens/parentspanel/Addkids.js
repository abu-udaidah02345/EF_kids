import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput,ScrollView} from 'react-native';

export default function Addkids({ navigation }) {
  const callNext = () => {
    navigation.navigate('SavePlant');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
            <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../../assets/images/profile.png')}
            style={styles.profileImage}
          />
          <Text style={styles.headerText}>Make Kids Profile</Text>
        </View>

        <View style={styles.inputContainer}>
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

        <View style={styles.inputContainer}>
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

        <View style={styles.inputContainer}>
          <View style={styles.smallContainer}>
            <TextInput
              style={styles.input}
              placeholder="Birthday"
              placeholderTextColor="#545F71"
            />
          </View>
          <View style={styles.smallContainer}>
            <TextInput
              style={styles.input}
              placeholder="Birthday"
              placeholderTextColor="#545F71"
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.verifyButton} onPress={() => callNext()}>
            <Text style={styles.verifyButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
        </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  contentContainer: {
    paddingHorizontal: 50,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
  },
  imageContainer: {
    flexDirection:"row",
    alignItems: 'center',
    marginTop: 50,
  },
  profileImage: {
    width: 149,
    height: 149,
  },
  headerText: {
    color: '#041F3F',
    fontSize: 24,
    fontWeight: '700',
    marginTop: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 26,
    marginTop: 20,
  },
  smallContainer: {
    width: 141,
    height: 48,
    borderColor: '#545F71',
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 10,
    flex: 1,
  },
  input: {
    flex: 1,
    color: '#000',
    paddingHorizontal: 15,
  },
  buttonContainer: {
    marginTop: 15,
  },
  verifyButton: {
    backgroundColor: '#BAC7C1',
    paddingVertical: 10,
    paddingHorizontal: 148,
    borderRadius: 15,
  },
  verifyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
