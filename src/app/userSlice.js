import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from 'api/userApi';

export const getMe = createAsyncThunk(
  'users/getMe',
  async (params, thunkAPI) => {
    // thunkAPI.dispatch(...)
    const currentUser = await userApi.getMe();
    return currentUser;
  }
);

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    current: {},
  },

  reducers: {},

  extraReducers: {
    [getMe.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

export default userSlice.reducer;
