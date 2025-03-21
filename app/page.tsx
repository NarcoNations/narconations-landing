"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
     <section className="relative w-full h-[80vh]">
  <img
    src="/images/narco-banner.jpg"
    alt="NarcoNations Banner"
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center px-6">
    <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
      Build Your Cartel. Smuggle. Dominate.
    </h1>
    <p className="mt-4 text-lg max-w-2xl text-gray-200">
      A high-stakes strategy game inspired by real-world crime networks.
    </p>
    <div className="mt-6 space-x-4">
      <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded text-white font-semibold">
        Join the Kickstarter
      </button>
      <button className="border border-white px-6 py-3 rounded text-white font-semibold">
        Play the Free Demo
      </button>
    </div>
  </div>
</section>

      {/* Game Overview */}
      <section className="py-20 px-6 text-center bg-gray-900">
        <h2 className="text-3xl font-semibold">What is NarcoNations?</h2>
        <p className="mt-4 max-w-2xl mx-auto">
          A deep strategy board game where you build a global cartel, manage risk, and outsmart rivals. Plan your smuggling routes, evade the Feds, and amass the most laundered money to win.
        </p>
      </section>

      {/* Email Capture */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-2xl font-semibold">Join the Cartel – Get Updates</h2>
        <p className="mt-2">Be the first to know when NarcoNations launches.</p>
        <div className="mt-4 flex justify-center">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-80 text-black px-2 py-1 border rounded" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="ml-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded">Subscribe</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-gray-900">
        <p>&copy; 2025 NarcoNations. All rights reserved.</p>
      </footer>
    </div>
  );
}
