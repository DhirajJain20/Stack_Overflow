import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Slider";
import RightSlider from "./Components/RightSlider";

const App = () => {
  return (
    <>
    
      <Navbar />
      <Sidebar />
      <RightSlider/>
    </>
  );
};

export default App;
