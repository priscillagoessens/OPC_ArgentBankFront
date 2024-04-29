import React from 'react'
import "./_Login.scss"
import "../../components/Form/_Form.scss"
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/Form/LoginForm';


function Login() {
  const token = useSelector((state)=> state.auth.token)
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/profile");
    }
  }, [token, navigate]);

  return (
      <main className="main bg-dark">
        <LoginForm/>
      </main>
  )
}

export default Login
