import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {THEME} from '../theme';

export const DrinksCategoryItem = ({drink}) => {
  return (
    <View style={styles.drinkItem}>
      <Image source={{uri: drink.strDrinkThumb}} style={styles.image} />
      <Text style={styles.text}>{drink.strDrink}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  drinkItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    height: 100,
    width: 100,
    marginRight: 21,
  },
  text: {
    color: THEME.TEXT_COLOR,
    fontSize: 16,
    fontFamily: 'Roboto',
  },
});
