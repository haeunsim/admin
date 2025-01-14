import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './reducers/sidebarReducer';
import authReducer from './reducers/authReducer';
import testReducer from './reducers/testSlice';

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    Auth: authReducer,
    test: testReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
});

export default store;