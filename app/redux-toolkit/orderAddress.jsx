import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    
    name: 'order',
    initialState:{
    fullName: '',
    companyName: '',
    streetAddress: '',
    country: '',
    town: '',
    postCode: '',
    phone : '',
    email: ''
    },
    reducers: {

        setFullName: (state, action) => {
          
            console.log(state.payload,"[[[[");
            state.fullName = action.payload;
          },
          setCompanyName: (state, action) => {
            console.log(state.payload,"[[[[");
            state.companyName = action.payload;
          },
          setStreetAddress: (state, action) => {
            console.log(state.payload,"[[[[");
            state.streetAddress = action.payload;
          },
          setCountry: (state, action) => {
            console.log(state.payload,"[[[[");
            state.country = action.payload;
          },
          setTown: (state, action) => {
            console.log(action.payload, "lllllllllllaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
            state.town = action.payload;
          },
          setPostCode: (state, action) => {
            console.log(action.payload, "[[[[[[[[[[[[[[[[[[[[[[[[[[[");
            state.postCode = action.payload;
          },
          setPhone: (state, action) => {
            console.log(action.payload, "[[[[[[[[[[[[[[[[[[[[[[[[[[[");
            state.phone = action.payload;
          },
          setEmail: (state, action) => {
            console.log(action.payload, "[[[[[[[[[[[[[[[[[[[[[[[[[[[");
            state.email = action.payload;
          }
    }

})
export const {

    setFullName,
    setCompanyName,
    setStreetAddress,
    setCountry,
    setTown,
    setPostCode,
    setPhone,
    setEmail
} = orderSlice.actions

export default orderSlice.reducer
