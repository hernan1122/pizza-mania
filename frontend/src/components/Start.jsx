import React from "react";
import { useNavigate } from "react-router-dom"
import "../styles/Start.css";

//icons
import { FaPizzaSlice } from 'react-icons/fa'
import { GiFullPizza } from 'react-icons/gi'

export function Start() {
  const navigate = useNavigate()

  const singup = () => {
    navigate('/signup')
  }
  const login = () => {
    navigate('/login')
  }

  return (
    <div className="Start">
      <div className="Start-container">
        <GiFullPizza className='pizza-icons'/>
        <h1>Welcome to Pizza Mania</h1>
        <h2>Sign up or log in to access</h2>
        <div className="Start-container-btn">
          <button onClick={singup}>Sign up</button>
          <button onClick={login}>Login</button>
        </div>
      </div>
    </div>
  );
}
