import {
  FETCH_FILTERS,
  TOGGLE_FILTER,
  FETCH_DATA,
  SET_LOADING,
  SET_PAGINATION,
  RESET_PAGINATION,
} from '../types';
import axios from 'axios';

export const fetchFilters = () => async (dispatch) => {
  try {
    const filters = await axios.get(
      'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list',
    );
    dispatch({
      type: FETCH_FILTERS,
      payload: filters.data.drinks,
    });

    dispatch(setLoading());
  } catch (err) {
    console.log(err);
  }
};

export const toggleFilter = (id) => (dispatch) => {
  dispatch({
    type: TOGGLE_FILTER,
    payload: id,
  });
};

export const fetchData = (pagination, filter) => async (dispatch) => {
  try {
    const query = filter[pagination].strCategory;
    const res = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${query}`,
    );
    dispatch(setPagination());
    dispatch({
      type: FETCH_DATA,
      payload: {drinks: res.data.drinks, query},
    });

    dispatch(setLoading());
  } catch (err) {
    console.log(err);
  }
};

export const setPagination = (p) => (dispatch) => {
  if (p) {
    dispatch({
      type: RESET_PAGINATION,
    });
  } else {
    dispatch({
      type: SET_PAGINATION,
    });
  }
};

const setLoading = () => (dispatch) => {
  dispatch({
    type: SET_LOADING,
  });
};
