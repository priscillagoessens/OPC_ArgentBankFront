import { configureStore } from "@reduxjs/toolkit";
import authSlice from '../../redux/store/authSlice'
import userSlice from "../../redux/store/userSlice";

const store =  configureStore({
    reducer:{
        auth: authSlice.reducer,
        user: userSlice.reducer
    }
})

export default store;