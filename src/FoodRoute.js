import React from "react";
import { Router, Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./componants/Home";
import About from "./componants/About";
import Contact from "./componants/Contact";
import Mycarts from "./componants/Mycarts";
import Myorder from "./componants/Myorder";
import Login from "./componants/Login";
import Profile from "./componants/Profile";
import FoodNavbar from "./FoodNavbar";
import Register from "./Register";

const FoodRoute = () => {
  return (
    <div>
      <BrowserRouter>
        <FoodNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mycart" element={<Mycarts />} />
          <Route path="/myorder" element={<Myorder />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default FoodRoute;
