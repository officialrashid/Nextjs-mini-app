import {createSlice} from '@reduxjs/toolkit'

const loginSlice = createSlice({
    name: 'login', // Provide a name for the slice
    initialState: {
      email: '',
      password: '',
      isUser:'',
      userInfo: ''
    },
    reducers: {
      setLoginEmail: (state, action) => {
        state.email = action.payload;
      },
      setLoginPassword: (state, action) => {
        state.password = action.payload;
      },
      isUser: (state, action) => {
        console.log(action.payload, "lllllllllllaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        state.isUser = action.payload;
      },
      addUserInfo: (state, action) => {
        console.log(action.payload, "[[[[[[[[[[[[[[[[[[[[[[[[[[[");
        state.userInfo = action.payload;
      }
    },
  });
  
  export const { setLoginEmail, setLoginPassword } = loginSlice.actions;
  
  export default loginSlice.reducer;
  