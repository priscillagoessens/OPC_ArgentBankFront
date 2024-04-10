import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser= createAsyncThunk(
    'user/loginUser',
    async (userData, thunkAPI) => {
        try{
            const response = await axios.post(`http://localhost:3001/api/v1/user/login`, userData);
            localStorage.setItem('token', response.data.body.token)
            return response.data
        }catch(err){
            return thunkAPI.rejectWithValue(err.response.data.errors)
        }
    }
)

export const userProfile= createAsyncThunk(
    'user/fetchUser',
    async (_, thunkAPI) => {
        try{
            const token = localStorage.getItem('token')
            const response = await axios.post(`http://localhost:3001/api/v1/user/profile`, null, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            console.log(response.data.body)
            return response.data.body
        }catch(err){
            return thunkAPI.rejectWithValue(err.response.data.errors)
        }
    }
)
