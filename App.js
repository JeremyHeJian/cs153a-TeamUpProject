import * as React from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AboutScreen from './components/About';
import PreferenceScreen from './components/Preference';
import MathQuizScreen from './components/MathQuiz';
import TeamUpScreen from './components/TeamUp';
import GameHistoryScreen from './components/GameHistory';
import Login from './components/login';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'TeamUp: Find your teammates in your favorite video games',
          }}
        />
        <Stack.Screen name="TeamUp" component={TeamUpScreen} />
        <Stack.Screen name="Preference" component={PreferenceScreen} />
        <Stack.Screen name="MathQuiz" component={MathQuizScreen} />
        <Stack.Screen name="GameHistory" component={GameHistoryScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.navBar}>
      <Button title="TeamUp" onPress={() => navigation.navigate('TeamUp')} />

      <Button
        title="Preference"
        onPress={() => navigation.navigate('Preference')}
      />

      {/* <Button
        title="MathQuiz"
        onPress={() => navigation.navigate('MathQuiz')}
      /> */}

      <Button
        title="Game History"
        onPress={() => navigation.navigate('GameHistory')}
      />

      <Button title="About" onPress={() => navigation.navigate('About')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  navBar: {
    flexDirection: 'row',
    margin: '5px',
    padding: '10px',
    justifyContent: 'space-around',
    backgroundColor: '#F7D488',
  },
});
export default MyStack;
