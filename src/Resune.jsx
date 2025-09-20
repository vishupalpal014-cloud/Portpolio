import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import ResumePdf from "./assets/vishu_compressed.pdf";

function Resume() {
  return (
    <section
      id="resume"
      className="min-h-screen w-full bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 flex flex-col items-center justify-center px-6 py-12"
    >
      {/* Title */}
      <motion.h2
        className="text-4xl font-extrabold mb-4 text-gray-800"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Resume
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="text-lg text-gray-600 mb-8 max-w-xl text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        You can download a copy of my resume below.
      </motion.p>

      {/* Download Button */}
      <motion.a
        href={ResumePdf}
        download="Vishu_Kumar_Resume.pdf"
        className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg font-semibold hover:from-indigo-600 hover:to-blue-500 transform hover:scale-105 transition duration-300"
        whileHover={{ y: -3 }}
      >
        <FaDownload /> Download Resume
      </motion.a>
    </section>
  );
}

export default Resume;
