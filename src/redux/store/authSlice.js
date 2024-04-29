import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../actions/action";

const initialState = {
  user: null,
  error: null,
  token: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      localStorage.removeItem('token');
      state.token = null
    }
  },
  extraReducers: (builder)=>{
    builder
    .addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.error =  null;
      state.token = localStorage.getItem('token');
    })
    .addCase(loginUser.rejected, (state, action) => {
      state.user =  null;
      state.error =  action.payload;
    })
}
})

export const { logout } = authSlice.actions;
export const  userSelector = (state) => state.auth
export default authSlice