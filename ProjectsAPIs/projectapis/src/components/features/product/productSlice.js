import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    selectedProduct: JSON.parse(localStorage.getItem('selectedProduct')) || null ,
    status: 'idle',
    error: null,
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts: (state, action) => { // This reducer updates the products array in the state with the new list from the action.payload.

            state.products = action.payload;
        }, //action is an obj, action.payload contains new list of products

        selectedProduct: (state, action) => { //in action object, payload contains selected product
            state.selectedProduct = action.payload;
            localStorage.setItem('selectedProduct', JSON.stringify(action.payload))
        }, //this reducer updates the selectedProduct part of the state to the selected producted given in payload
    },
});

export const { setProducts, selectedProduct } = productSlice.actions;

export default productSlice.reducer;