
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

// 👇 Floating Water Balls
function WaterBalls() {
  const balls = [
    { size: 140, color: "rgba(59,130,246,0.3)", top: "10%", left: "15%" },
    { size: 100, color: "rgba(99,102,241,0.3)", top: "20%", left: "70%" },
    { size: 120, color: "rgba(168,85,247,0.3)", top: "65%", left: "20%" },
    { size: 80, color: "rgba(236,72,153,0.3)", top: "75%", left: "75%" },
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
            top: ball.top,
            left: ball.left,
            zIndex: 40,
            filter: "blur(20px)",
            pointerEvents: "none",
          }}
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -20, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8 + index * 2,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}

// 👇 Twinkling Stars
function Stars() {
  const stars = Array.from({ length: 25 }, (_, i) => ({
    size: Math.random() * 4 + 2,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
  }));

  return (
    <>
      {stars.map((star, index) => (
        <motion.div
          key={index}
          style={{
            width: star.size,
            height: star.size,
            background: "white",
            borderRadius: "50%",
            position: "absolute",
            top: star.top,
            left: star.left,
            zIndex: 30,
            filter: "drop-shadow(0 0 6px white)",
          }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      ))}
    </>
  );
}

// 👇 Moving Name Banner
function MovingName() {
  return (
    <div className="overflow-hidden w-full bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 py-6 relative z-50">
      <motion.h1
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 6,
          ease: "linear",
        }}
        className="text-5xl font-extrabold text-white whitespace-nowrap"
      >
      
      </motion.h1>
    </div>
  );
}

// 👇 Contact Section
function Contact() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 flex flex-col items-center justify-center text-white px-6 py-12 overflow-hidden"
    >
      {/* Stars in Background */}
      <Stars />

      {/* Water Balls */}
      <WaterBalls />

      {/* Moving Name */}
      <MovingName />

      {/* Subtitle */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-3xl font-bold mb-6 mt-8 relative z-50"
      >
        Contact Me
      </motion.h2>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="text-lg mb-8 max-w-xl text-center relative z-50"
      >
        Let’s work together! Whether you have a project in mind or just want to
        say hi, I’d love to hear from you.
      </motion.p>

      {/* Contact Form */}
      <motion.form
        whileHover={{
          scale: 1.02,
          rotateX: 5,
          rotateY: -5,
          boxShadow: "0px 20px 40px rgba(0,0,0,0.2)",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="bg-white text-gray-800 rounded-xl shadow-lg p-8 w-full max-w-md mb-6 relative z-50"
      >
        <div className="mb-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
        <div className="mb-6">
          <textarea
            rows="4"
            placeholder="Write your message..."
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          ></textarea>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
        >
          Send Message
        </motion.button>
      </motion.form>

      {/* Direct Contact Info */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.2 }}
        className="text-center mb-6 relative z-50"
      >
        <p className="mb-2">
          📧 Email:{" "}
          <a href="mailto:vishu@email.com" className="underline">
            vishu@email.com
          </a>
        </p>
        <p>📍 Based in India</p>
      </motion.div>

      {/* Social Links */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.4 }}
        className="flex space-x-6 text-2xl relative z-50"
      >
        {[
          { icon: <FaGithub />, link: "https://github.com/" },
          { icon: <FaLinkedin />, link: "https://linkedin.com/" },
          { icon: <FaTwitter />, link: "https://twitter.com/" },
          { icon: <FaEnvelope />, link: "mailto:vishu@email.com" },
        ].map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.3, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="hover:text-yellow-300 transition"
          >
            {item.icon}
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}

export default Contact;
