"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Hero Section with Parallax and Neon Glow */}
      <section className="relative w-full h-screen flex items-center justify-center">
        {/* Background Image with Parallax */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-black"
          style={{
            backgroundImage: "url('/images/narco-banner.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 5, ease: "easeOut" }}
        >
          {/* Overlay with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-green-500 drop-shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            Build Your Cartel. Smuggle. Dominate.
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-2xl text-gray-300 font-mono max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            A high-stakes strategy game inspired by real-world crime networks.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <a
              href="#"
              className="relative bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg text-white font-bold text-lg shadow-lg hover:shadow-red-500/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              <span className="absolute inset-0 rounded-lg border-2 border-red-500/50 animate-pulse" />
              Join the Kickstarter
            </a>
            <a
              href="#"
              className="relative bg-transparent border-2 border-green-500 hover:bg-green-500/20 px-8 py-4 rounded-lg text-white font-bold text-lg shadow-lg hover:shadow-green-500/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              <span className="absolute inset-0 rounded-lg border-2 border-green-500/50 animate-pulse" />
              Play the Free Demo
            </a>
          </motion.div>
        </div>
      </section>

      {/* Game Overview Section with Subtle Animation */}
      <section className="py-20 px-6 bg-gray-900 relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 bg-[url('/images/grunge-texture.jpg')] opacity-10" />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-red-500 drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            What is NarcoNations?
          </motion.h2>
          <motion.p
            className="mt-6 text-lg md:text-xl text-gray-300 font-mono"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A deep strategy board game where you build a global cartel, manage risk, and outsmart rivals. Plan your smuggling routes, evade the Feds, and amass the most laundered money to win.
          </motion.p>
        </div>
      </section>

      {/* Email Capture Section with Neon Glow */}
      <section className="py-20 px-6 bg-black text-center relative">
        {/* Neon Border Effect */}
        <div className="absolute inset-0 border-t-2 border-b-2 border-green-500/50 shadow-[0_0_20px_rgba(34,197,94,0.5)]" />
        <div className="relative z-10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-green-400 drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Join the Cartel – Get Updates
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Be the first to know when NarcoNations launches.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-80 px-4 py-3 bg-gray-800 border border-green-500/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 shadow-[0_0_10px_rgba(34,197,94,0.3)]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="relative bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg text-white font-bold shadow-lg hover:shadow-green-500/50 transition-all duration-300 transform hover:-translate-y-1">
              <span className="absolute inset-0 rounded-lg border-2 border-green-500/50 animate-pulse" />
              Subscribe
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer with Subtle Glow */}
      <footer className="py-8 text-center bg-gray-900 relative">
        <div className="absolute inset-0 border-t-2 border-red-500/50 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
        <p className="relative z-10 text-gray-400">
          © 2025 NarcoNations. All rights reserved.
        </p>
      </footer>
    </div>
  );
}