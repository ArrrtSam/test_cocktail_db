import {
  FETCH_FILTERS,
  TOGGLE_FILTER,
  FETCH_DATA,
  SET_LOADING,
  SET_PAGINATION,
  RESET_PAGINATION,
} from '../types';

const initialState = {
  filters: [],
  drinks: [],
  pagination: 0,
  loading: true,
};

export const cockTailReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_FILTERS:
      return {
        ...state,
        filters: [...payload].map((f, i) => ({
          ...f,
          active: true,
          id: i,
        })),
      };
    case TOGGLE_FILTER:
      return {
        ...state,
        filters: state.filters.map((f) =>
          f.id === payload
            ? {
                ...f,
                active: !f.active,
              }
            : f,
        ),
      };
    case FETCH_DATA:
      return {
        ...state,
        drinks: [
          ...state.drinks,
          {
            title: payload.query,
            data: payload.drinks,
          },
        ],
      };
    case SET_PAGINATION:
      return {
        ...state,
        pagination: state.pagination + 1,
      };
    case RESET_PAGINATION:
      return {
        ...state,
        pagination: 0,
        drinks: [],
      };
    case SET_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
