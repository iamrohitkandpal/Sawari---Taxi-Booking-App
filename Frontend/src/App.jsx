import React from "react";
import { Routes, Route } from "react-router-dom";
import Start from './pages/Start';
import UserLogin from './pages/UserLogin';
import UserSignUp from './pages/UserSignUp';
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignUp from "./pages/CaptainSignUp";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/cap-login" element={<CaptainLogin />} />
        <Route path="/cap-signup" element={<CaptainSignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App;