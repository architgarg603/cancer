import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Navbar from "./Components/Navbar/Navbar";
import Result from "./Components/Results/Result";
import Stories from "./Components/Stories/Stories";
import Test from "./Components/Test/Test";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/test" element={<Test />} />
        <Route path="/result" element={<Result />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/stories" element={<Stories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
