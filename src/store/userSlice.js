import { createSlice } from "@reduxjs/toolkit";
import{userProfile} from '../actions/action'

const initialState = {
    email: null,
    firstName: null,
    lastName: null,
    error: null
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
    },
    extraReducers(builder) {
      builder
        .addCase(userProfile.fulfilled, (state, action) => {
          state.email = action.payload.email;
          state.firstName = action.payload.firstName;
          state.lastName = action.payload.lastName;
          state.error = null;
        })
        .addCase(userProfile.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.payload.message;
        })
    },
  });
  
export default userSlice