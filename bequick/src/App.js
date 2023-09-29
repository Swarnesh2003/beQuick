import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/home'
import Login from './components/authentication/login'
import SignUp from './components/authentication/signup'
import User from './components/user'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/user" element={<User />} />


      </Routes>
    </Router>
  );
}

export default App;
