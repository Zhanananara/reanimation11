import React from "react";
import { Routes, Route } from "react-router-dom";
import AddPatients from "./components/pages/AddPatients";
import Patients from "./components/pages/Patients";
import Home from "./components/pages/Home";
import MainLayout from "./components/layouts/MainLayout";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Details from "./components/pages/Details";
import Specialist from "./components/pages/Specialist";
import AddObj from "./components/pages/AddObj";

const MyRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/specialist" element={<Specialist />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/addpatients" element={<AddPatients />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/patients/:prodId" element={<Details />} />
        <Route path="/addobjective" element={<AddObj />} />
      </Route>
    </Routes>
  );
};

export default MyRoutes;
