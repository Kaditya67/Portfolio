import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootSlice'; // Adjust the path if necessary

const store = configureStore({
  reducer: {
    root: rootReducer,
  },
});

export default store;
