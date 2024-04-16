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
                console.error("Erreur lors de la soumission du formulaire:", response.status);
                // Gestion des erreurs dans Redux Toolkit
                return thunkAPI.rejectWithValue("Identifiant ou mot de passe incorrect !");
            }
            return response.data;
        } catch (err) {
            console.error("Erreur lors de la soumission du formulaire:", err.response.status);
            // Gestion des erreurs dans Redux Toolkit
            return thunkAPI.rejectWithValue(err.response.data.message);
        }
    }
);

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
            return response.data.body
        }catch(err){
            return thunkAPI.rejectWithValue(err.response.data.errors)
        }
    }
)
