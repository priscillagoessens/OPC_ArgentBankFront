import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../actions/action";

const initialState = {
  isLoggIn: false,
  user: null,
  error: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.isLoggIn = false;
      state.user =  null;
    }
  },
  extraReducers: (builder)=>{
    builder
    .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggIn = true;
        state.error = null;

    })
    .addCase(loginUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.user =  null;
    })
    
    // extraReducers sert a gere les actions asynchrone
}
})

export const { logout } = authSlice.actions;
export const selectUser = (state) => state.user;
export default authSlice