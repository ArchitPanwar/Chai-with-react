import React from "react";

function Card({ userName ,btntext="onclick" }) {
  return (
    <div className="relative max-w-sm mx-auto h-64 rounded-2xl overflow-hidden shadow-lg">
      <img
        src="https://images.pexels.com/photos/31359948/pexels-photo-31359948/free-photo-of-vibrant-african-fashion-portrait-in-abuja-garden.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 bg-black bg-opacity-50 h-full p-6 flex flex-col justify-end">
        <h2 className="text-white text-2xl font-bold mb-2">{userName}</h2>
        <p className="text-white text-sm">
          This is a card with a full background image and overlay content.
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          {btntext} 
        </button>
      </div>
    </div>
  );
}

export default Card;
