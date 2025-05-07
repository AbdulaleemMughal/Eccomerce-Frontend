import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'Product',
    initialState: {
        isProduct : [],
    },
    reducers: {
        pushProduct: (state, action) => {
            state.isProduct = action.payload;
        },
    }
});

export const { pushProduct } = productSlice.actions;

export default productSlice.reducer;