import { configureStore } from '@reduxjs/toolkit';
import photoReducer from 'features/Photo/photoSlice';
import userReducer from './userSlice';

export default configureStore({
  reducer: {
    photos: photoReducer,
    users: userReducer,
  },
});
