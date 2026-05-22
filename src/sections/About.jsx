import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-6 md:px-16 py-20 
                 bg-white dark:bg-black 
                 text-black dark:text-white 
                 transition"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-10"
      >
        About Me
      </motion.h2>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-4xl mx-auto text-center 
                   text-gray-700 dark:text-gray-400 
                   leading-relaxed"
      >
        <p className="mb-6">
          I'm <span className="font-semibold text-black dark:text-white">Suryaveer Singh</span>, a passionate
          Full Stack Developer and Data Analyst who enjoys building real-world systems that
          solve meaningful problems. My work focuses on combining{" "}
          <span className="text-blue-500">scalable backend development</span> with{" "}
          <span className="text-purple-500">data-driven intelligence</span>.
        </p>

        <p className="mb-6">
          I have hands-on experience developing complete applications using{" "}
          <span className="text-blue-500">Django, React, and modern web technologies</span>,
          along with building intelligent systems using{" "}
          <span className="text-purple-500">Machine Learning and NLP</span>. From designing
          APIs to implementing predictive models, I enjoy working across the full stack.
        </p>

        <p className="mb-6">
  Recently, I have been working on advanced projects like{" "}
  <span className="text-blue-500">AQI Prediction using Machine Learning</span>,{" "}
  <span className="text-blue-500">Team Task Manager Platform</span>, and an{" "}
  <span className="text-blue-500">AI-powered Disaster Management System</span>. 
  Alongside these, I’ve also developed intelligent systems such as{" "}
  <span className="text-blue-500">Resume Parser with Skill Matcher</span> and{" "}
  <span className="text-blue-500">Inventory Stockout Prediction System</span>.
</p>

        <p>
          I’m constantly learning and improving my problem-solving skills through
          real-world projects and Data Structures & Algorithms. My goal is to build
          scalable, efficient, and impactful software systems that make a difference.
        </p>
      </motion.div>

      {/* Highlights Section */}
      <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">

        {/* Card 1 */}
        <div className="p-6 rounded-xl 
                        bg-gray-100 dark:bg-white/5 
                        border border-black/10 dark:border-white/10 
                        shadow-md hover:scale-105 transition">
          <h3 className="text-2xl font-bold text-blue-500 mb-2">
            Full Stack
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Building complete web applications using Django, React, and APIs.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-6 rounded-xl 
                        bg-gray-100 dark:bg-white/5 
                        border border-black/10 dark:border-white/10 
                        shadow-md hover:scale-105 transition">
          <h3 className="text-2xl font-bold text-purple-500 mb-2">
            Data & ML
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Creating predictive systems using Python, NLP, and Machine Learning.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-6 rounded-xl 
                        bg-gray-100 dark:bg-white/5 
                        border border-black/10 dark:border-white/10 
                        shadow-md hover:scale-105 transition">
          <h3 className="text-2xl font-bold text-pink-500 mb-2">
            Problem Solver
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Strong foundation in DSA and logical thinking for scalable solutions.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;