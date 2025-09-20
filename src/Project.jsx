import React from "react";
import { motion } from "framer-motion";

// Floating water balls
function WaterBalls() {
  const balls = [
    { size: 120, color: "rgba(59,130,246,0.3)", x: -200, y: -150 },
    { size: 80, color: "rgba(96,165,250,0.3)", x: 150, y: -100 },
    { size: 100, color: "rgba(147,197,253,0.3)", x: -150, y: 200 },
    { size: 70, color: "rgba(191,219,254,0.4)", x: 180, y: 150 },
  ];

  return (        
    <>
      {balls.map((ball, index) => (
        <motion.div
          key={index}
          style={{
            width: ball.size,
            height: ball.size,
            background: ball.color,
            borderRadius: "50%",
            position: "absolute",
            top: "50%",
            left: "50%",
            marginLeft: -ball.size / 2,
            marginTop: -ball.size / 2,
            zIndex: 0,
            filter: "blur(40px)",
          }}
          animate={{
            x: [ball.x, ball.x * -1, ball.x],
            y: [ball.y, ball.y * -1, ball.y],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10 + index * 2,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}

function Project() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio built with React and Tailwind showcasing my skills, projects, and contact info.",
      link: "#",
    },
    {
      title: "E-commerce App",
      description:
        "A sample online store with product pages, cart functionality, and responsive design.",
      link: "#",
    },
    {
      title: "Todo App",
      description:
        "A productivity app built with React hooks, allowing users to add, delete, and mark tasks as complete. Supports local storage for persistent tasks.",
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 flex flex-col items-center justify-center text-white px-6 py-12 overflow-hidden"
    >
      {/* Floating balls */}
      <WaterBalls />

      {/* Title */}
      <motion.h2
        className="text-4xl font-extrabold mb-10 relative z-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white text-gray-800 rounded-xl shadow-lg p-6 cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm mb-4">{project.description}</p>
            <a
              href={project.link}
              className="text-indigo-600 font-medium hover:underline"
            >
              View Project →
            </a>  
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Project;
