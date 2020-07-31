import React from 'react';
import {View, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {MainScreen} from '../screens/MainScreen';
import {FilterScreen} from '../screens/FilterScreen';
import {THEME} from '../theme';

const Stack = createStackNavigator();

export const Nav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            height: 70,
          },
          headerTransparent: true,
          headerTintColor: THEME.HEADER_COLOR,
          headerTitleStyle: {
            fontFamily: 'Roboto',
            fontWeight: 'bold',
          },
          headerBackground: () => <View style={styles.header} />,
        }}>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{title: 'Drinks'}}
        />
        <Stack.Screen
          name="Filters"
          component={FilterScreen}
          options={{title: 'Filters'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 7,
  },
});
