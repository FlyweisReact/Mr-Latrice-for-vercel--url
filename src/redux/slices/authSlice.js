import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
  professionalToken: null,
  userType: null, // Will store 'USER', 'SALOON', or 'INDEPENDENT' from API
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.token = accessToken;
      state.professionalToken = null; // Clear professional token
      state.userType = user.userType; // Use userType from API response
      state.isAuthenticated = !!accessToken;
    },
    setProfessionalCredentials: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.professionalToken = accessToken;
      state.token = null; // Clear user token
      state.userType = user.userType; // Use userType from API response
      state.isAuthenticated = !!accessToken;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.professionalToken = null;
      state.userType = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setCredentials, setProfessionalCredentials, logout } = authSlice.actions;

export default authSlice.reducer;