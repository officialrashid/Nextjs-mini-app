import { createSlice } from "@reduxjs/toolkit";

const productIdSlice = createSlice({
    
    name: 'productId',
    initialState:{
    productId: '',
    },
    reducers: {

        setProductId: (state, action) => {
            console.log(action.payload,"}{}{}{}{}{}{}");
            state.productId = action.payload;
          },
    }
})
export const {

    setProductId,
   
} = productIdSlice.actions

export default productIdSlice.reducer
