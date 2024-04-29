import { configureStore } from "@reduxjs/toolkit";
import authSlice from '../../redux/store/authSlice'
import userSlice from "../../redux/store/userSlice";

//Récupération du token d'authentification depuis le localStorage, il est ensuite initialisé dans le state
const persistedState = {
    auth: {
      token: localStorage.getItem("token"),
    },
  };

const store =  configureStore({
    reducer:{
        auth: authSlice.reducer,
        user: userSlice.reducer
    },
    preloadedState: persistedState, // initialisation du store avec le state persisté
})

export default store;