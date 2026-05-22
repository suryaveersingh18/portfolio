import { motion } from "framer-motion";
import TypingText from "../components/TypingText";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col justify-center items-center 
                 bg-white dark:bg-black text-black dark:text-white 
                 text-center overflow-hidden transition"
    >

      {/* 🌌 Background Glow (adjusted for light mode) */}
      <div className="absolute w-[600px] h-[600px] 
                      bg-blue-500/10 dark:bg-blue-500/20 
                      rounded-full blur-3xl 
                      top-[-100px] left-[-100px] animate-pulse"></div>

      <div className="absolute w-[500px] h-[500px] 
                      bg-purple-500/10 dark:bg-purple-500/20 
                      rounded-full blur-3xl 
                      bottom-[-100px] right-[-100px] animate-pulse"></div>

      {/* 🧠 Content */}
      <div className="z-10 px-6">

        {/* 👤 Name */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight mb-4"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Suryaveer Singh
          </span>
        </motion.h1>

        {/* 💡 Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl 
                     text-gray-600 dark:text-gray-400 
                     mb-6"
        >
          Building Scalable Systems with Code & Intelligence
        </motion.p>

        {/* ⌨️ Typing Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-8"
        >
          <TypingText />
        </motion.div>

        {/* 🚀 Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <a
            href="#projects"
            className="bg-black dark:bg-white 
                       text-white dark:text-black 
                       px-6 py-3 rounded-full font-medium 
                       hover:scale-105 transition"
          >
            View Work
          </a>

          <a
            href="/Suryaveer%27s%20Resume.pdf"
            download="Suryaveer's Resume.pdf"
            className="border border-gray-400 dark:border-gray-500 
                       px-6 py-3 rounded-full 
                       hover:bg-black hover:text-white 
                       dark:hover:bg-white dark:hover:text-black 
                       transition"
          >
            Download Resume
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;