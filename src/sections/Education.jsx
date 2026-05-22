import { motion } from "framer-motion";

const education = [
  {
    year: "2022 - 2026",
    title: "B.Tech in Computer Science",
    institute: "Noida Institute of Engineering and Technology, Greater Noida",
    desc: "Focused on Full Stack Development, Machine Learning, and Data Structures. Built multiple real-world projects using Django, React, and ML.",
  },
  {
    year: "2020 - 2021",
    title: "Higher Secondary (12th)",
    institute: "Shyam Sundar Saraswati Inter College, Ayodhya",
    desc: "Studied Physics, Chemistry, and Mathematics with strong analytical and problem-solving foundation.",
  },
  {
    year: "2018 - 2019",
    title: "Secondary Education (10th)",
    institute: "Shyam Sundar Saraswati Inter College, Ayodhya",
    desc: "Built strong fundamentals in science and mathematics.",
  },
];

const Education = () => {
  return (
    <section
      id="education"
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
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Academic Journey
        </h2>

        <p className="text-gray-600 dark:text-gray-400">
          My educational background and learning path.
        </p>
      </motion.div>

      <div className="relative max-w-5xl mx-auto">

        {/* ✅ Timeline Line ONLY on Desktop */}
        <div
          className="hidden md:block absolute left-1/2 top-0 
                     transform -translate-x-1/2 
                     w-[2px] h-full 
                     bg-black/10 dark:bg-white/10"
        ></div>

        {/* Timeline Items */}
        {education.map((item, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -50 : 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 0.5 }}
            className={`mb-12 flex ${
              index % 2 === 0
                ? "md:justify-start"
                : "md:justify-end"
            }`}
          >

            {/* Timeline Dot */}
            <div
              className="hidden md:block absolute left-1/2 
                         transform -translate-x-1/2 
                         mt-8 w-4 h-4 rounded-full
                         bg-blue-500 shadow-lg z-20"
            ></div>

            {/* Card */}
            <div
              className="w-full md:w-[45%] relative z-10
                         p-6 rounded-2xl
                         bg-gray-100 dark:bg-white/5
                         border border-black/10 dark:border-white/10
                         backdrop-blur-lg
                         shadow-md hover:shadow-2xl
                         hover:-translate-y-1
                         transition duration-300"
            >

              {/* Year */}
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {item.year}
              </p>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-2">
                {item.title}
              </h3>

              {/* Institute */}
              <p className="text-blue-500 mb-4 font-medium">
                {item.institute}
              </p>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;