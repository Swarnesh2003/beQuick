import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/home'
import Login from './components/authentication/login'
import SignUp from './components/authentication/signup'
import User from './components/user'
import Dashboard from './components/auctioneer/dashboard'
import Newauction from './components/auctioneer/newauction'
import Ongoingauction from './components/auctioneer/ongoingauction'
import Closedauction from './components/auctioneer/closedauction'
import Transaction from './components/auctioneer/Transaction'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/user" element={<User />} />
        <Route path="/auctioneer/dashboard" element={<Dashboard />} >
          <Route path="/auctioneer/dashboard/newauction" element={<Newauction/>} />
          <Route path="/auctioneer/dashboard/ongoingauction" element={<Ongoingauction/>} />
          <Route path="/auctioneer/dashboard/closedauction" element={<Closedauction/>} />
          <Route path="/auctioneer/dashboard/Transaction" element={<Transaction/>} />
        </Route>


      </Routes>
    </Router>
  );
}

export default App;
