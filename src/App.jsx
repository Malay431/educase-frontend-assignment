import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import SignupScreen from "./components/SignupScreen";
import MainScreen from "./components/MainScreen";
import LoginScreen from "./components/LoginScreen";
import ProfileScreen from "./components/ProfileScreen";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainScreen/>}/>
        <Route path='/signup' element={<SignupScreen/>}/>
        <Route path='/login' element={<LoginScreen/>}/>
        <Route path='/profile' element={<ProfileScreen/>}/>
      </Routes>
    </div>
  );
};

export default App;
