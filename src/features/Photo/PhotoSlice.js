import { createSlice } from '@reduxjs/toolkit';

const initialPhotos = [];

export const PhotoSlice = createSlice({
  name: 'photos',
  initialState: initialPhotos,

  reducers: {
    addPhoto: (state, action) => {
      state.push(action.payload);
    },

    removePhoto: (state, action) => {
      const removePhotoId = action.payload;

      return state.filter((photo) => photo.id !== removePhotoId);
    },

    updatePhoto: (state, action) => {
      const newPhoto = action.payload;
      const photoIndex = state.findIndex((photo) => photo.id === newPhoto.id);

      if (photoIndex >= 0) {
        state[photoIndex] = newPhoto;
      }
    },
  },
});

export const { addPhoto, removePhoto, updatePhoto } = PhotoSlice.actions;

export default PhotoSlice.reducer;
