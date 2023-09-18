import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "./Component/SignUp";
import SignIn from "./Component/SignIn";
import { useState } from "react";
import NavBar from "./Component/navBar";
const App = () => {
  const [allInfo, setAllInfo] = useState([]);

  const addInfo = (newInfo) => {
    setAllInfo([...allInfo, newInfo]);
  };
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </div>
  );
};

export default App;
