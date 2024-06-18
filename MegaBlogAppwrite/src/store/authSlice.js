import {createSlice} from '@reduxjs/toolkit'

// this is to track if user is authenticed from store
const initialState = {
    status: false,
    userData: null
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {  //methods.. everythng in reducer has state and action
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;

        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
    }
});

export const {login, logout} = authSlice.actions; //recducer k ander login and logout actions hain

export default authSlice.reducer;