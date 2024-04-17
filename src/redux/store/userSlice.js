import { createSlice } from "@reduxjs/toolkit";
import{ userProfile, updateUser } from '../actions/action'

const initialState = {
    email: null,
    firstName: null,
    lastName: null,
    userName: null
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
    },
    extraReducers:(builder)=> {
      builder
        .addCase(userProfile.fulfilled, (state, action) => {
          state.email = action.payload.email;
          state.firstName = action.payload.firstName;
          state.lastName = action.payload.lastName;
          state.userName = action.payload.userName;
        })
        .addCase(updateUser.fulfilled, (state, action) => {
          state.userName = action.payload;
        })
    }
  });
  
export default userSlice