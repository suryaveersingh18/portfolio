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
      <h2 className="text-4xl font-bold text-center mb-10">
        Resume
      </h2>

      {/* Resume Preview */}
      <div className="flex justify-center mb-8">
        <div className="w-full max-w-4xl rounded-xl overflow-hidden 
                        border border-black/10 dark:border-white/10 
                        shadow-md hover:shadow-xl transition">

          <iframe
            src="/Suryaveer%27s%20Resume.pdf"
            title="Resume"
            className="w-full h-[500px] bg-white"
          ></iframe>

        </div>
      </div>

      {/* Download Button */}
      <div className="text-center">
        <a
          href="/Suryaveer%27s%20Resume.pdf"
          download="Suryaveer's Resume.pdf"
          className="px-6 py-3 rounded-lg text-sm font-medium 
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