import React from 'react'
import LoginForm from '../../components/Form/LoginForm'
import "./_Login.scss"
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const isLogged = useSelector(state => state.user.isCo);

  useEffect(() => {
      isLogged && navigate('/profile');
    }, [isLogged, navigate]);

    
  return (
      <main className="main bg-dark">
        <LoginForm/>
      </main>
  )
}

export default Login
