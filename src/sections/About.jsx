import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 md:px-16 py-24
                 bg-white dark:bg-black
                 text-black dark:text-white
                 transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto w-full">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-sm uppercase tracking-[0.3em]
                        text-gray-500 dark:text-gray-500 mb-3">
            About Me
          </p>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Building with code.
            <br />
            <span className="text-gray-400 dark:text-gray-600">
              Thinking with data.
            </span>
          </h2>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-4xl"
        >
          <p className="text-xl md:text-2xl leading-relaxed
                        text-gray-700 dark:text-gray-300"
          >
            I'm{" "}
            <span className="font-semibold text-black dark:text-white">
              Suryaveer Singh
            </span>
            , a Software Engineer and Data Analyst with hands-on experience
            in Python, SQL, React.js, Django, and data analytics.
          </p>

          <p className="mt-6 text-lg md:text-xl leading-relaxed
                        text-gray-600 dark:text-gray-400"
          >
            I enjoy building scalable web applications, analyzing data to
            uncover meaningful insights, and developing intelligent solutions
            using machine learning and modern AI technologies.
          </p>

          <p className="mt-6 text-lg md:text-xl leading-relaxed
                        text-gray-600 dark:text-gray-400"
          >
            I'm interested in Software Engineering, Data Analytics, and
            related roles where I can solve real-world problems through
            technology and data.
          </p>
        </motion.div>

        {/* Focus Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12"
        >

          <div
            className="rounded-2xl p-6
                       bg-gray-100 dark:bg-white/5
                       border border-black/10 dark:border-white/10
                       transition"
          >
            <p className="text-sm text-gray-500 mb-2">
              Focus
            </p>
            <h3 className="text-xl font-semibold">
              Software Engineering
            </h3>
          </div>

          <div
            className="rounded-2xl p-6
                       bg-gray-100 dark:bg-white/5
                       border border-black/10 dark:border-white/10
                       transition"
          >
            <p className="text-sm text-gray-500 mb-2">
              Focus
            </p>
            <h3 className="text-xl font-semibold">
              Data Analytics
            </h3>
          </div>

          <div
            className="rounded-2xl p-6
                       bg-gray-100 dark:bg-white/5
                       border border-black/10 dark:border-white/10
                       transition"
          >
            <p className="text-sm text-gray-500 mb-2">
              Exploring
            </p>
            <h3 className="text-xl font-semibold">
              AI & Machine Learning
            </h3>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default About;