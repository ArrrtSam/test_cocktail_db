import React from 'react';
import {Nav} from './src/navigation/AppNavigation';
import {Provider} from 'react-redux';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <Nav />
    </Provider>
  );
};

export default App;
