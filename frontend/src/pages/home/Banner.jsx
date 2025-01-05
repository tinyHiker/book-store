import React, { useState } from 'react';
import bannerImg from "../../assets/banner.png";
import RetroFloralImage from "../../assets/RetroFloralWallpaper.webp"

const Banner = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    // Placeholder for subscription logic
    alert(`Thank you for subscribing with ${email}!`);
  };

  return (
    <div className="bg-gray-200 flex flex-col md:flex-row py-16 px-4 justify-between items-center gap-12">
        <div className="md:w-1/2 w-full text-center md:text-left">
            <h1 className="text-5xl font-bold mb-7">New Releases This Week</h1>
            <p className="text-lg mb-10">It's time to update your reading list with some of the latest releases.</p>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 rounded-md text-black w-full md:w-auto"
              />
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md transition-colors" onClick={handleSubscribe}>
                Subscribe
              </button>
            </div>
        </div>

        <div className="md:w-1/2 w-full flex justify-center">
            <img src={bannerImg} alt="Banner" className="max-w-full h-auto" />
        </div>
    </div> 
  );
}

export default Banner;

/*
import React from 'react'

import bannerImg from "../../assets/banner.png"

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row py-16 justify-between items-center gap-12">
        <div className="md:w-1/2 w-3/4">
            <h1 className="md:text-5xl text-2xl font-medium mb-7">New Releases This Week</h1>
            <p className="mb-10">It's time to update your reading list with some of the latest releases.</p>

            <button className="btn-primary">Subscribe</button>
        </div>

    

    <div className="md:w-1/2 w-full flex items-center md:justify-end">
        <img src={bannerImg} alt ="" />
    </div>

    </div> 
  )
}

export default Banner */