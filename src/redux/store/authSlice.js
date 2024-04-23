import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../actions/action";

const initialState = {
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
  },
  extraReducers: (builder)=>{
    builder
    .addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.error =  null;
    })
    .addCase(loginUser.rejected, (state, action) => {
      state.user =  null;
      state.error =  action.payload;
    })
    // extraReducers sert a gere les actions asynchrone
}
})

export const { logout } = authSlice.actions;
export const  userSelector = (state) => state.auth
export default authSlice