import React, { useState } from "react";

export default function Booking() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  const handleSwap = () => {
    setText1(text2);
    setText2(text1);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center p-4 sm:p-6 lg:p-10">
        <div className="text-orange-400 font-bold text-lg sm:text-xl md:text-3xl text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9)]">
          Book your Flights here!
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center mt-5 sm:mt-10 space-y-3 sm:space-y-0 sm:space-x-3">
          <input
            type="text"
            value={text1}
            onChange={(e) => setText1(e.target.value)}
            placeholder="From destination"
            className="w-64 sm:w-80 border border-gray-400 px-3 py-2 rounded-lg"
          />
          <button
            onClick={handleSwap}
            className="border border-black p-2 flex justify-center items-center transform transition-transform duration-300 hover:rotate-180 bg-gray-400 rounded-lg"
          >
            <img src="/images/swap.svg" alt="Swap" className="h-6 w-6" />
          </button>
          <input
            type="text"
            value={text2}
            onChange={(e) => setText2(e.target.value)}
            placeholder="To Destination"
            className="w-64 sm:w-80 border border-gray-400 px-3 py-2 rounded-lg"
          />
        </div>

        <div className="mt-5">
          <button className="btn bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md">
            Search
          </button>
        </div>
      </div>
    </>
  );
}
