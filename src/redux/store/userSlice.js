import { createSlice } from "@reduxjs/toolkit";
import{ getUserProfile, updateUser } from '../actions/action'

const initialState = {
    email: null,
    firstName: null,
    lastName: null,
    userName: null,
    isAuth: false
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      deleteUserInfo: (state) => {
        state.email = ""
        state.firstName = ""
        state.lastName = ""
        state.userName = ""
        state.isAuth =  false
      }
    },
    extraReducers:(builder)=> {
      builder
        .addCase(getUserProfile.fulfilled, (state, action) => {
          state.email = action.payload.email;
          state.firstName = action.payload.firstName;
          state.lastName = action.payload.lastName;
          state.userName = action.payload.userName;
          state.isAuth = true
        })
        .addCase(updateUser.fulfilled, (state, action) => {
          state.userName = action.payload;
        })
    }
  });
  
export const { deleteUserInfo } = userSlice.actions;
export default userSlice