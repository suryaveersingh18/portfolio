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
      <h2 className="text-4xl font-bold text-center mb-12">
        Academic Journey
      </h2>

      <div className="relative max-w-4xl mx-auto">

        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full 
                        bg-black/10 dark:bg-white/10"></div>

        {/* Timeline Items */}
        {education.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`mb-12 flex ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className="w-full md:w-[45%] p-6 rounded-xl 
                         bg-gray-100 dark:bg-white/5 
                         border border-black/10 dark:border-white/10 
                         shadow-md hover:shadow-xl 
                         transition"
            >
              {/* Year */}
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {item.year}
              </p>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-1">
                {item.title}
              </h3>

              {/* Institute */}
              <p className="text-blue-500 mb-2">
                {item.institute}
              </p>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-400 text-sm">
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