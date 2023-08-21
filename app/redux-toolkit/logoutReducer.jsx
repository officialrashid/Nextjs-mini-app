import { createSlice } from '@reduxjs/toolkit';

const logoutSlice = createSlice({
  name: 'logout',
  initialState: {},
  reducers: {
    setLogout: (state, action) => {
      console.log("keriii");
      localStorage.removeItem('userAccessToken');
      return {}; // Return an empty object instead of `initialState`
    },
  },
});

export const { setLogout } = logoutSlice.actions;

export default logoutSlice.reducer;