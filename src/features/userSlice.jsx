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

const userSlice = createSlice({
    name:"user",
    initialState:{
        user: null
    },
    reducers:{
        login:(state,action)=>{
            state.user = action.payload;
        },
        logout:(state)=>{
            state.user =  null;
        }
    }
})
 export const {login, logout}= userSlice.actions;

 export const selectUser = (state) => state.user;

 export default userSlice.reducer;