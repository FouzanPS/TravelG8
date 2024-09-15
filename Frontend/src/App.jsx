import React from "react";
import Navbar from "./components/Navbar";
import Parallax from "./components/parallax";
import Guides from "./components/Guides";
import Itineraries from "./components/Itineraries";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Parallax />
        <Guides />
        <Itineraries />
      </div>
    </>
  );
}

export default App;
