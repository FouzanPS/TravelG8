import React from "react";
import Navbar from "./components/Navbar";
import Parallax from "./components/parallax";
import Guides from "./components/Guides";
import Itineraries from "./components/Itineraries";
import Booking from "./components/Booking";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Parallax />
        <Guides />
        <Itineraries />
        <Booking />
      </div>
    </>
  );
}

export default App;
