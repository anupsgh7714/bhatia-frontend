// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css';
import React from "react";
import Header from "./components/Header";
import HeaderBoot from "./components/HeaderBoot";
import SignUp from "./pages/auth/SignUp";
import { Outlet } from "react-router-dom";
import Copyright from "./components/Footer";

function App() {

  return (
    <>
      <Header />
      <div style={{minHeight:"85vh"}}>
      <Outlet />
      </div>
      <footer>
        <Copyright />
      </footer>
    </>
  )
}

export default App
