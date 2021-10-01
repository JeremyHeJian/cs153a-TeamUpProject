import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

// const App = () => {...}
export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{flex: 1, flexDirection: 'column', backgroundColor: 'white'}}
      >
        {' '}
        <Text style={{flex: 20, fontSize: 64, backgroundColor: '#797596'}}>
          TeamUp
        </Text>
        <Text style={{flex: 1, backgroundColor: '#02020B'}}></Text>
        <Text style={{flex: 20, fontSize: 32, backgroundColor: '#A1869E'}}>
          Is an app that helps you find teammates in your favorite games
        </Text>
      </View>

      <View style={{flex: 6, flexDirection: 'row'}}>
        <View style={{flex: 1, backgroundColor: '#F9A03F'}}></View>
        <View style={{flex: 1, backgroundColor: '#F7D488'}}></View>
        <View
          style={{flex: 3, flexDirection: 'column', backgroundColor: '#EAEFB1'}}
        >
          <View>
            <Image
              style={{
                width: 600,
                height: 400,
              }}
              source={{uri: 'https://i.postimg.cc/L5BT8csX/DSC08847.jpg'}}
            />
          </View>
        </View>
        <View style={{flex: 1, backgroundColor: '#E9F7CA'}}></View>
        <View style={{flex: 1, backgroundColor: '#393E41'}}></View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'stretch',
    flexDirection: 'column',
  },
});
