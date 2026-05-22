import { motion } from "framer-motion";

const Resume = () => {
  return (
    <section
      id="resume"
      className="min-h-screen px-6 md:px-16 py-20
                 bg-white dark:bg-black
                 text-black dark:text-white
                 transition"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Resume
        </h2>

        <p className="text-gray-600 dark:text-gray-400">
          View or download my latest resume.
        </p>
      </motion.div>

      {/* Desktop Preview */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="hidden md:flex justify-center mb-10"
      >
        <div
          className="w-full max-w-5xl overflow-hidden rounded-2xl
                     border border-black/10 dark:border-white/10
                     shadow-2xl"
        >
          <iframe
            src="/Suryaveer's Resume.pdf"
            title="Resume"
            className="w-full h-[700px]"
          ></iframe>
        </div>
      </motion.div>

      {/* Mobile Preview Card */}
      <div className="md:hidden mb-10">
        <div
          className="p-8 rounded-2xl
                     bg-gray-100 dark:bg-white/5
                     border border-black/10 dark:border-white/10
                     text-center shadow-lg"
        >
          <div className="text-6xl mb-4">
            📄
          </div>

          <h3 className="text-xl font-semibold mb-3">
            Suryaveer's Resume
          </h3>

          <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
            Open resume preview in full screen for better viewing experience.
          </p>

          <a
            href="/Suryaveer's Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-xl
                       bg-black text-white
                       dark:bg-white dark:text-black
                       font-medium"
          >
            Open Resume
          </a>
        </div>
      </div>

      {/* Download Button */}
      <div className="text-center">
        <a
          href="/Suryaveer's Resume.pdf"
          download="Suryaveer's Resume.pdf"
          className="inline-block px-8 py-3 rounded-xl
                     bg-black text-white
                     dark:bg-white dark:text-black
                     hover:scale-105 transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;