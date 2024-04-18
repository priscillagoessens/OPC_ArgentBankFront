import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../actions/action";

const initialState = {
  isLogIn: false,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.isLogIn = false;
      state.user =  null;
      state.error = null;
      localStorage.removeItem('token')
    }
  },
  extraReducers: (builder)=>{
    builder
    .addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLogIn = true;
      state.error =  null;
    })
    .addCase(loginUser.rejected, (state, action) => {
      state.user =  null;
      state.isLogIn = null;
      state.error =  action.payload;
    })
    // extraReducers sert a gere les actions asynchrone
}
})

export const { logout } = authSlice.actions;
export default authSlice