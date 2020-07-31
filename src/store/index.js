import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {cockTailReducer} from './reducers/cocktail';

const rootReducer = combineReducers({
  cockTail: cockTailReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
