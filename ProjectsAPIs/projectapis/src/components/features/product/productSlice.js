import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    selectedProduct: null,
    status: 'idle',
    error: null,
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },

        selectedProduct: (state, action) => {
            state.selectedProduct = action.payload;
        },
    },
});

export const { setProducts, selectedProduct } = productSlice.actions;

export default productSlice.reducer;