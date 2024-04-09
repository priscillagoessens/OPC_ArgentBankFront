import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const loginUser= createAsyncThunk(
    'user/loginUser',
    async (userCredential) => {
        const request = await axios.post(`http://localhost:3001/api/v1/user/login`, userCredential);
        const response = await request.data
        return response
    }
)

const authSlice = createSlice({
  name: "auth",
  initialState: { 
    isLoggIn: false,
    user: null,
    error: null,
    token:''
 },
  reducers: {
    logout(state) {
      state.isLoggIn = false;
      state.user =  null;
      localStorage.removeItem('token');
    }
  },
  extraReducers: (builder)=>{
    builder
    .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggIn = true;
        state.error = null;
        state.token = action.payload.body.token;
        localStorage.setItem('token', action.payload.body.token);
    })
    .addCase(loginUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.user =  null;
    })
    
    // extraReducers sert a gere les actions asynchrone
}
})

export const authActions = authSlice.actions
export const selectUser = (state) => state.user;
export default authSlice