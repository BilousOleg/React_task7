import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import weatherReducer from './slices/weatherSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    weather: weatherReducer,
  },
});

export default store;
