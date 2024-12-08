import React from "react";

export default function UserReviews() {
  const reviews = [
    {
      name: "John Doe",
      image: "/images/John.png",
      rating: 4,
      text: "Amazing experience! The trip was well-organized and the guides were very knowledgeable. Highly recommend!",
    },
    {
      name: "Jane Smith",
      image: "/images/jane.png",
      rating: 5,
      text: "This was a trip of a lifetime! Everything exceeded my expectations, from the accommodations to the activities. Would definitely travel with this company again.",
    },
    {
      name: "Alexina",
      image: "/images/alexina.png",
      rating: 4,
      text: "Great service and fantastic destinations! The itinerary was well-planned and the staff was very helpful throughout the journey.",
    },
  ];

  return (
    <section id="reviews" className="py-12 ">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-orange-400 font-bold text-lg sm:text-xl md:text-3xl text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9)] mb-8">
          User Reviews
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <article
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={review.image}
                  alt={`${review.name} Profile Picture`}
                  className="w-16 h-16 rounded-full object-cover border border-gray-200"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {review.name}
                  </h3>
                  <div className="flex text-yellow-500">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span
                        key={i}
                        className={i < review.rating ? "" : "text-gray-300"}
                      >
                        &#9733;
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{review.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
