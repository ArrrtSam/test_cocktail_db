import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {THEME} from '../theme';

export const FilterItem = ({
  filter: {strCategory, active, id},
  toggleFilter,
}) => {
  return (
    <TouchableOpacity onPress={() => toggleFilter(id)}>
      <View style={styles.listItem}>
        <Text style={styles.text}>{strCategory}</Text>
        {active ? (
          <Icon name="check" size={20} color={THEME.HEADER_COLOR} />
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 31,
    paddingHorizontal: 35,
  },
  text: {
    fontFamily: 'Roboto',
    color: THEME.TEXT_COLOR,
    fontSize: 16,
  },
});
