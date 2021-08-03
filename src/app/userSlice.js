import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "api/userApi";
import StorageKeys from "constants/storage-keys";

export const login = createAsyncThunk("user/login", async (payload) => {
  // const data = await userApi.login(payload);

  // Fake login here
  const data = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        jwt: "fake_jwt",
        user: {
          id: 21,
          username: payload.username,
          email: "fake@gmail.com",
        },
      });
    }, 1000);
  });

  // save data to local storage
  localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

  return data.user;
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
    settings: {},
  },

  reducers: {
    logout(state) {
      // clear local storage
      localStorage.removeItem(StorageKeys.USER);
      localStorage.removeItem(StorageKeys.TOKEN);

      state.current = {};
    },
  },

  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});
export const { logout } = userSlice.actions;

export default userSlice.reducer;
