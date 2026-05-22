import { motion } from "framer-motion";

const skills = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Django", "Node.js", "REST APIs"],
  },
  {
    title: "Database",
    items: ["MySQL", "MongoDB"],
  },
  {
    title: "Data & ML",
    items: ["Python", "Pandas", "NumPy", "Scikit-learn", "NLP"],
  },
  {
    title: "Tools & Tech",
    items: ["Git", "GitHub", "Postman", "VS Code"],
  },
  {
    title: "Concepts",
    items: ["DSA", "OOP", "DBMS", "OS Basics"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen px-6 md:px-16 py-20 
                 bg-white dark:bg-black 
                 text-black dark:text-white 
                 transition"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-4">
        Skills & Expertise
      </h2>

      <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
        Technologies I use to build scalable and intelligent systems.
      </p>

      {/* Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="p-6 rounded-2xl 
                       bg-gray-100 dark:bg-white/5 
                       backdrop-blur-lg 
                       border border-black/10 dark:border-white/10 
                       shadow-md hover:shadow-xl 
                       transition"
          >
            {/* Title */}
            <h3 className="text-xl font-semibold mb-4">
              {skill.title}
            </h3>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm rounded-md 
                             bg-white dark:bg-white/10 
                             text-gray-700 dark:text-gray-300 
                             border border-black/10 dark:border-white/10 
                             hover:bg-gray-200 dark:hover:bg-white/20 
                             transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;