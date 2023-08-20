import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
    
    name: 'register',
    initialState:{
    name: '',
    email: '',
    phone: '',
    password: '',
    isUser: '',
    userInfo: {}
    },
    reducers: {

        setName: (state, action) => {
            state.name = action.payload;
          },
          setEmail: (state, action) => {
            state.email = action.payload;
          },
          setPhone: (state, action) => {
            state.phone = action.payload;
          },
          setPassword: (state, action) => {
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
    }
})
export const {

    setName,
    setEmail,
    setPhone,
    setPassword,
    isUser,
    addUserInfo
} = registerSlice.actions

export default registerSlice.reducer
