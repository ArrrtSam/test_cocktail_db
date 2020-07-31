import React from 'react';
import {View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {
  toggleFilter,
  setPagination,
  fetchData,
} from '../store/actions/cocktail';
import {FilterItem} from '../components/FilterItem';

export const FilterScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const filters = useSelector((state) => state.cockTail.filters);
  const activeFilter = filters.filter((f) => f.active === true);

  const toggleFilters = (id) => {
    dispatch(toggleFilter(id));
    console.log(id);
  };

  const applyFilters = () => {
    dispatch(setPagination(true));
    console.log(activeFilter);
    dispatch(fetchData(0, activeFilter));
    navigation.navigate('Main');
  };
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={filters}
        keyExtractor={(filter) => filter.id.toString()}
        renderItem={({item}) => (
          <FilterItem filter={item} toggleFilter={toggleFilters} />
        )}
      />
      <View style={styles.buttonBlock}>
        <TouchableOpacity style={styles.button} onPress={() => applyFilters()}>
          <Text style={styles.buttonText}>APPLY</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 80,
    paddingBottom: 50,
    backgroundColor: '#fff',
  },
  buttonBlock: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: 35,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#272727',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 17,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
});
