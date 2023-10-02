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
import Transaction1 from './components/bidder/transaction1'
import Newbid from './components/bidder/newbid';
import Ongoingbid from './components/bidder/ongoingbid';
import Winnings from './components/bidder/winnings';
import Dashboard1 from './components/bidder/dashboard1';

<title>beQuick</title>
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
        <Route path="/bidder/dashboard1" element={<Dashboard1 />}>
          <Route path="/bidder/dashboard1/newbid" element={<Newbid/>}/>
          <Route path="/bidder/dashboard1/ongoingbid" element={<Ongoingbid/>} />
          <Route path="/bidder/dashboard1/winnings" element={<Winnings/>} />
          <Route path="/bidder/dashboard1/transaction1" element={<Transaction1/>}/>

        </Route>


      </Routes>
    </Router>
  );
}

export default App;
