import React from "react";
import Home from "./Home/Home";

import { Route, Routes } from "react-router-dom";
import Courses from "./components/Courses/Courses";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </div>
    </>
  );
};

export default App;
