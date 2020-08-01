import React, {useLayoutEffect, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {THEME} from '../theme';
import {
  fetchData,
  fetchFilters,
  setPagination,
} from '../store/actions/cocktail';
import {DrinksCategoryItem} from '../components/DrinksCategoryItem';

export const MainScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.cockTail.filters);
  const pagination = useSelector((state) => state.cockTail.pagination);
  const drinks = useSelector((state) => state.cockTail.drinks);
  const loading = useSelector((state) => state.cockTail.loading);
  const activeFilter = filters.filter((f) => f.active === true);

  useEffect(() => {
    dispatch(fetchData(pagination, activeFilter));
    // eslint-disable-next-line
  }, [dispatch, filters]);

  useEffect(() => {
    dispatch(fetchFilters());
  }, [dispatch]);

  const fetchNewCategry = () => {
    dispatch(setPagination());
    dispatch(fetchData(pagination, activeFilter));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon
          style={styles.icon}
          name="filter"
          size={27}
          color={THEME.HEADER_COLOR}
          onPress={() => navigation.navigate('Filters')}
        />
      ),
    });
  }, [navigation]);

  if (activeFilter.length === 0) {
    return (
      <View style={styles.center}>
        <Text style={styles.nText}>Nothing to show</Text>
      </View>
    );
  }

  if (loading || drinks.length === 0) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={THEME.HEADER_COLOR} />
      </View>
    );
  }
  return (
    <View style={styles.wrapper}>
      <SectionList
        sections={[
          ...drinks,
          {data: [{strDrink: 'End of data :('}], title: ''},
        ]}
        keyExtractor={(_, index) => index}
        renderItem={({item}) => <DrinksCategoryItem drink={item} />}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionTitle}> {section.title} </Text>
        )}
        onEndReached={() => fetchNewCategry()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  icon: {
    marginRight: 21,
  },
  sectionTitle: {
    color: THEME.TEXT_COLOR,
    fontSize: 14,
    fontFamily: 'Roboto',
  },
  nText: {
    color: THEME.HEADER_COLOR,
    fontFamily: 'Roboto',
    fontSize: 21,
  },
});
