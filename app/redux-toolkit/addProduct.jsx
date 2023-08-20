import { createSlice } from "@reduxjs/toolkit";

const addProductSlice = createSlice({
    
    name: 'addProduct',
    initialState:{
    productName: '',
    category: '',
    price: '',
    description: '',
    image: '',
  
    },
    reducers: {

        setProductName: (state, action) => {
            state.productName = action.payload;
          },
          setCategory: (state, action) => {
            state.category = action.payload;
          },
          setPrice: (state, action) => {
            state.price = action.payload;
          },
          setDescription: (state, action) => {
            state.description = action.payload;
          },
          setImage: (state, action) => {
            console.log(action.payload, "lllllllllllaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
            state.image = action.payload;
          },
    }
})
export const {

    setProductName,
    setCategory,
    setPrice,
    setDescription,
    setImage,
} = addProductSlice.actions

export default addProductSlice.reducer
