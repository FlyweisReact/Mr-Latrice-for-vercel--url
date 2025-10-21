// src/redux/slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
  loginType: null, // 'USER', 'BUSINESS', 'INDEPENDENT'
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, token, loginType } = action.payload;
      state.user = user;
      state.token = token;
      state.loginType = loginType;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.loginType = null;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;