import React from 'react';
import Routes from "./routes/Routes";
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
    <Routes></Routes>
    </Provider>
  );
};

export default App;