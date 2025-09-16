import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null, // will include { $id, email, name, role, ... }
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload; // ✅ store full user directly
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
