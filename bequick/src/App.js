import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/home'
import Login from './components/authentication/login'
import SignUp from './components/authentication/signup'
import User from './components/user'
import Dashboard from './components/auctioneer/dashboard'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/user" element={<User />} />
        <Route path="/auctioneer/dashboard" element={<Dashboard />} >
        </Route>


      </Routes>
    </Router>
  );
}

export default App;
