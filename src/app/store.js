import { configureStore } from '@reduxjs/toolkit';
import photoReducer from 'features/Photo/photoSlice';

export default configureStore({
  reducer: {
    photos: photoReducer,
  },
});
