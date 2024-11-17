import React from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Slider";
import RightSlider from "./Components/RightSlider";
import MiddleSlider from "./Components/MiddleSlider";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="w-64">
          <Sidebar />
        </div>
        <div className="flex-grow">
          <MiddleSlider />
        </div>
        <div className="w-64">
          <RightSlider />
        </div>
      </div>
    </>
  );
};

export default App;
