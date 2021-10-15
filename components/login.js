import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Image, Button} from 'react-native';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Green Bite</Text>
      <View style={{height: 10}} />
      <TextInput
        style={styles.textInput}
        placeholder="Enter Username Here"
        onChangeText={text => {
          setUserName(text);
        }}
      />
      <Text>{userName}</Text>
      <View style={{height: 3}} />
      <TextInput
        style={styles.textInput}
        placeholder="Enter Password Here"
        secureTextEntry={true}
        onChangeText={text => {
          setPassWord(text);
        }}
      />
      <Text>{passWord}</Text>
      <View style={{width: '50%', marginTop: 4}}>
        <Button title="Login" onPress={() => {}} color="#0C8346" />
      </View>
      <View style={{width: '50%', marginTop: 4}}>
        <Button title="Sign Up" onPress={() => {}} color="#A9DDD6" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#19381F',
    color: '#A9DDD6',
    fontSize: 50,
    padding: 10,
    borderRadius: 15,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    borderRadius: 15,

    flex: 1,
    backgroundColor: '#A9DDD6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    width: '50%',
    height: 50,
    borderColor: 'black',
  },
});
export default Login;
