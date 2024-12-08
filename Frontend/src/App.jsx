import React from "react";
import Navbar from "./components/Navbar";
import Parallax from "./components/parallax";
import Guides from "./components/Guides";
import Itineraries from "./components/Itineraries";
import Booking from "./components/Booking";
import UserReviews from "./components/UserReview";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Parallax />
        <Itineraries />
        <Booking />
        <UserReviews />
        <Footer />
      </div>
    </>
  );
}

export default App;
