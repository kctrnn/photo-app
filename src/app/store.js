import { configureStore } from '@reduxjs/toolkit';
import photoReducer from 'features/Photo/PhotoSlice';

export default configureStore({
  reducer: {
    photos: photoReducer,
  },
  preloadedState: {
    photos: [
      {
        categoryId: 1,
        photo: 'https://picsum.photos/id/77/300/300',
        title:
          'Dolor Lorem aliqua ea consectetur in tempor reprehenderit consequat officia.',
      },
      {
        categoryId: 5,
        photo: 'https://picsum.photos/id/622/300/300',
        title:
          'Non aliqua proident magna pariatur eu deserunt eu ipsum velit aliquip.',
      },
      {
        categoryId: 4,
        photo: 'https://picsum.photos/id/477/300/300',
        title:
          'Aliquip elit laboris eu aute irure enim reprehenderit voluptate consectetur minim minim adipisicing commodo.',
      },
      {
        categoryId: 3,
        photo: 'https://picsum.photos/id/625/300/300',
        title: 'Nostrud velit veniam esse officia.',
      },
    ],
  },
});
