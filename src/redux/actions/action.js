import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit";


export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (userData, thunkAPI) => {
        try {
            const response = await axios.post(`http://localhost:3001/api/v1/user/login`, userData);
            if (response.status === 200) {
                localStorage.setItem('token', response.data.body.token);
            } else {
                return thunkAPI.rejectWithValue("Identifiant ou mot de passe incorrect !");
            }
            return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.data.message);
        }
    }
);

export const userProfile = createAsyncThunk(
    'user/fetchUser',
    async (_, thunkAPI) => {
        try{
            const token = localStorage.getItem('token')
            const response = await axios.post(`http://localhost:3001/api/v1/user/profile`, null, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            return response.data.body
        }catch(err){
            return thunkAPI.rejectWithValue(err.message)
        }
    }
);

export const updateUser = createAsyncThunk(
    'user/updateUser',
    async (userData, thunkAPI) => {
      try {
        const token = localStorage.getItem('token')
        const response = await axios.put('http://localhost:3001/api/v1/user/profile', userData,{
            headers: {
                Authorization: `Bearer ${token}`
            },
        });
        return response.data.body.userName;
      }catch(err) {
        return thunkAPI.rejectWithValue(err.message);
      }
    }
  );
