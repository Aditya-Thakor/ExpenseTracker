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
import Dproto from "../pages/dashboard/Dproto1";
import EditProfile from "../pages/profile/editProfile";
import ProfileOutlet from "../pages/profile/ProfileOutlet";
import LandingPage from "../pages/Landing/LandingPage";
import NavbarSm from "../components/navbar/NavbarSM";

const ETRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Dashboard />} />
          <Route path="category" element={<Category/>}/>
          <Route path="transaction" element={<Transaction/>}/>
          <Route path="analytics" element={<Analytics/>}/>
          <Route path="profile" element={<ProfileOutlet/>}>
            <Route path="" element={<Profile/>} />
            <Route path="editprofile" element={<EditProfile/>} />
          </Route>
        </Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/signin" element={<SignIn/>}></Route>
        <Route path="/landing" element={<LandingPage/>}></Route>
        {/* <Route path="/nsm" element={<NavbarSm/>}></Route> */}
      </Routes>
    </Router>
  );
};

export default ETRoutes;
