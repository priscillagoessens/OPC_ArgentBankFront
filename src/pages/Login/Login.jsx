import React from 'react'
import Form from '../../components/Form/Form'
import "./_Login.scss"
import { useEffect } from "react";

import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const isLogged = useSelector(state => state.auth.isLogIn);

  useEffect(() => {
      isLogged && navigate('/profile');
    }, [isLogged, navigate]);

    
  return (
      <main className="main bg-dark">
        <Form/>
      </main>
  )
}

export default Login
