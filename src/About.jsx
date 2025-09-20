import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 flex items-center justify-center px-6 py-12 text-white"
    >
      <motion.div
        className="max-w-3xl text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          About Me
        </h2>

        {/* Profile Image */}
        <motion.img
          src="https://picsum.photos/200"
          alt="Vishu Pal"
          className="w-32 h-32 rounded-full border-4 border-white shadow-lg mx-auto mb-6"
          whileHover={{ scale: 1.1, rotate: 5 }}
        />

        {/* Description */}
        <p className="text-lg leading-relaxed text-gray-100">
          Hi, I’m <span className="font-semibold">Vishu Pal</span> — a frontend
          developer who enjoys building clean, responsive web applications
          using <span className="font-semibold">React</span> and{" "}
          <span className="font-semibold">Tailwind CSS</span>. <br />
          I love learning new technologies and creating user-friendly
          experiences that bring ideas to life.
        </p>
      </motion.div>
    </section>
  );
}

export default About;
