import React, { useState } from "react";

export default function Itineraries() {
  const [activeIndex, setActiveIndex] = useState(0);

  const destinations = [
    {
      name: "Paris",
      image:
        "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg",
      description: `The beautiful city of Paris during the sunset, with the Eiffel Tower standing tall, casting its golden reflection over the Seine. Explore charming streets and indulge in French delicacies.`,
    },
    {
      name: "Tokyo",
      image:
        "https://media.cntraveler.com/photos/63482b255e7943ad4006df0b/16:9/w_2240,c_limit/tokyoGettyImages-1031467664.jpeg",
      description: `Immerse yourself in Tokyo’s vibrant nightlife, where bright lights and towering billboards illuminate the bustling streets. Experience the energy of a city that never sleeps.`,
    },
    {
      name: "Bali",
      image:
        "https://plus.unsplash.com/premium_photo-1677829177642-30def98b0963?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: `Discover Bali’s serene beauty with a stunning temple rising against mist-covered green hills. Embrace nature and spirituality in this perfect escape, where breathtaking landscapes await your visit.`,
    },
    {
      name: "Dubai",
      image:
        "https://www.canvasartrocks.com/cdn/shop/products/Dubai_downtown_night_scene_UAE_Wall_Mural_Wallpaper_a_1400x.jpg?v=1578614281",
      description: `Experience Dubai's breathtaking night skyline, where dazzling skyscrapers light up the city. Book your ticket now to immerse yourself in the luxury and excitement of this vibrant metropolis.`,
    },
    {
      name: "Delhi",
      image:
        "https://afar.brightspotcdn.com/dims4/default/a6f4c32/2147483647/strip/true/crop/4993x2649+0+519/resize/2880x1528!/format/webp/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2F9e%2Ff8%2F6b5f8a0948278e15b5eeeb36c03e%2Fshutterstock-1076644442.jpg",
      description: `Book your journey to Delhi and experience its historical splendor! Visit the majestic Red Fort, the iconic Qutub Minar, and the serene Humayun's Tomb. Dive into a city rich in history and charm!`,
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? destinations.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === destinations.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="max-w-screen-2x1 container mx-auto md:px-8 px-4 relative">
      <div className="flex overflow-hidden items-center space-x-4 destination-list">
        <div
          className="flex transition-transform duration-700 ease-in-out m-6 pl-5"
          style={{
            transform: `translateX(-${activeIndex * 80}%)`,
            width: "400px",
          }}
        >
          {destinations.map((d, index) => (
            <div
              key={index}
              className="relative min-w-[80%] max-w-[80%] flex-shrink-0 rounded-lg shadow-lg overflow-hidden mr-9 group"
            >
              <img
                src={d.image}
                alt={d.name}
                className="w-full h-40 object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-40"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-xl font-bold text-black">{d.name}</h3>
                <p className="text-sm text-gray-600 mt-2">{d.description}</p>
                <button className="btn mt-4 bg-black text-gray-300">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Previous Button */}
      <button
        type="button"
        className="absolute top-1/2 left-0 z-30 flex items-center justify-center h-10 w-10 bg-black/30 rounded-full"
        onClick={handlePrev}
      >
        <svg
          className="w-4 h-4 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
        <span className="sr-only">Previous</span>
      </button>
      {/* Next Button */}
      <button
        type="button"
        className="absolute top-1/2 right-0 z-30 flex items-center justify-center h-10 w-10 bg-black/30 rounded-full"
        onClick={handleNext}
      >
        <svg
          className="w-4 h-4 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
}
