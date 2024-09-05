import React from "react";
import Navbar from "./components/Navbar";
import Parallax from "./components/parallax";
import Guides from "./components/Guides";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Parallax />
        <Guides />
      </div>
    </>
  );
}

export default App;
