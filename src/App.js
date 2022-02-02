import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Users from "./components/screens/Users";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Context from "./components/Context";
import User from "./components/screens/User";

function App() {
  return (
    <Router>
      <Context></Context>
      <Routes>
        <Route path="/user/:id" element={<User />}></Route>
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;
