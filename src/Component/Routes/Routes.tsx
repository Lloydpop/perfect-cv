import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import { Login } from "../../Pages/Auth/Login/Login";
import HomePage from "../../Pages/HomePage/HomePage";
import ProfileDetails from "../../Pages/Profile/ProfileDetails/ProfileDetails";
import Wrapper from "../Wrapper/Wrapper";
import ChatRoom from "../../Pages/ChatRoom/UploadCv";
import Personalize from "../../Pages/Personalize/Personalize";
import Positions from "../../Pages/Positions/Positions";
import Education from "src/Pages/Education/Education";
import HighSchool from "src/Pages/Education/HighSchool";
import Others from "src/Pages/Education/Others";
import University from "src/Pages/Education/University";
const RoutesLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<Wrapper children={<Outlet />} />}>
        <Route path="/dashboard" element={<HomePage />} />
        <Route path="/profile" element={<ProfileDetails />} />
        <Route path="/templates" element={<ChatRoom />} />
        <Route path="/app/personalize" element={<Personalize />} />
        <Route path="/add-position" element={<Positions />} />
        <Route path="/education/:id" element={<Education />} />
        <Route path="/education/highschool" element={<HighSchool />} />
        <Route path="/education/university" element={<University />} />
        <Route path="/education/others" element={<Others />} />
      </Route>
    </Routes>
  );
};

export default RoutesLayout;
