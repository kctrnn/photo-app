import { configureStore } from '@reduxjs/toolkit';
import photoReducer from 'features/Photo/PhotoSlice';

export default configureStore({
  reducer: {
    photos: photoReducer,
  },
});
