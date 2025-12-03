import React from "react";
import { BrowserRouter as  Router, Routes,Route } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/dashboard/Dashboard"; 
import Category from "../pages/category/Category";
import Transaction from "../pages/transaction/Transaction";
import Analytics from "../pages/analytics/Analytics";
import Profile from "../pages/profile/Profile";
import Signup from "../pages/signup&signin/Signup";
import SignIn from "../pages/signup&signin/SignIn";

const ETRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Dashboard />} />
          <Route path="category" element={<Category/>}/>
          <Route path="transaction" element={<Transaction/>}/>
          <Route path="analytics" element={<Analytics/>}/>
          <Route path="profile" element={<Profile/>}/>
        </Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/signin" element={<SignIn/>}></Route>
      </Routes>
    </Router>
  );
};

export default ETRoutes;
