import React, { useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";

// Floating water balls background
function FloatingBalls() {
  const balls = [
    { size: 80, color: "rgba(236, 72, 153, 0.4)", startX: -150, startY: -150, speed: 8 },
    { size: 120, color: "rgba(139, 92, 246, 0.4)", startX: 200, startY: -180, speed: 10 },
    { size: 60, color: "rgba(251, 191, 36, 0.4)", startX: -200, startY: 120, speed: 6 },
    { size: 100, color: "rgba(96, 165, 250, 0.4)", startX: 180, startY: 200, speed: 12 },
  ];

  return (
    <>
      {balls.map((ball, index) => {
        const controls = useAnimation();

        useEffect(() => {
          controls.start({
            y: [ball.startY, ball.startY + 30, ball.startY, ball.startY - 30, ball.startY],
            x: [ball.startX, ball.startX + 20, ball.startX, ball.startX - 20, ball.startX],
            rotate: [0, 360],
            scale: [0.9, 1.1, 0.95, 1.05, 0.9],
            transition: {
              duration: ball.speed,
              repeat: Infinity,
              ease: "easeInOut",
            },
          });
        }, [controls, ball]);

        return (
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
              filter: "blur(30px)",
            }}
            animate={controls}
          />
        );
      })}
    </>
  );
}

function Home() {
  const letters = "Hi, I’m Vishu Pal".split("");

  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, x: -30 },
    show: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 200 },
    },
  };

  return (
    <motion.section
      id="home"
      className="relative h-screen w-full bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 flex flex-col items-center justify-center text-gray-900 text-center pt-16 px-6 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Floating water balls */}
      <FloatingBalls />

      {/* Rotating Photo Frame with Color Glow */}
      <motion.div
        className="relative w-40 h-40 flex items-center justify-center mb-6"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
      >
        <motion.div
          className="absolute inset-0 rounded-full border-[6px]"
          animate={{
            borderColor: [
              "#ec4899", // pink
              "#8b5cf6", // purple
              "#3b82f6", // blue
              "#f59e0b", // orange
              "#ec4899",
            ],
            boxShadow: [
              "0 0 20px #ec4899",
              "0 0 25px #8b5cf6",
              "0 0 25px #3b82f6",
              "0 0 25px #f59e0b",
              "0 0 20px #ec4899",
            ],
          }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
        />
        <motion.img
          src="https://picsum.photos/150"
          alt="Vishu Pal"
          className="w-32 h-32 rounded-full border-4 border-white shadow-lg cursor-pointer relative z-10"
          whileHover={{
            rotateY: 15,
            rotateX: 10,
            scale: 1.1,
            transition: { type: "spring", stiffness: 300 },
          }}
        />
      </motion.div>

      {/* Animated Name */}
      <motion.h1
        className="text-5xl font-bold mb-4 flex space-x-1 relative z-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {letters.map((char, index) => (
          <motion.span key={index} variants={letter}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-xl max-w-xl mb-6 relative z-10"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Frontend Developer passionate about building clean, responsive, and modern web apps with{" "}
        <span className="font-semibold">React</span> and{" "}
        <span className="font-semibold">Tailwind</span>.
      </motion.p>

      {/* Buttons */}
      <div className="flex space-x-4 relative z-10">
        <motion.a
          href="#projects"
          className="px-6 py-3 rounded-lg shadow font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white"
          whileHover={{
            scale: 1.1,
            rotateZ: 5,
            transition: { type: "spring", stiffness: 300 },
          }}
        >
          View My Work
        </motion.a>

        <motion.a
          href="/vishu_compressed.pdf"
          download="Vishu_Kumar_Resume.pdf"
          className="px-6 py-3 rounded-lg shadow font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900"
          whileHover={{
            scale: 1.1,
            rotateZ: -5,
            transition: { type: "spring", stiffness: 300 },
          }}
        >
          Download Resume
        </motion.a>
      </div>

      {/* Social Links */}
      <motion.div
        className="flex space-x-6 mt-8 text-2xl relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.2, color: "#facc15" }}
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://linkedin.com/"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.2, color: "#0ea5e9" }}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="https://twitter.com/"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.2, color: "#3b82f6" }}
        >
          <FaTwitter />
        </motion.a>
      </motion.div>
    </motion.section>
  );
}

export default Home;
