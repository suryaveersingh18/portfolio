import { motion } from "framer-motion";

const projects = [
  {
    title: "AQI Prediction using Machine Learning",
    desc: "Predicts Air Quality Index using pollution and environmental datasets with regression models and data analysis techniques.",
    tech: ["Python", "Pandas", "Scikit-learn", "Machine Learning"],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "Team Task Manager",
    desc: "Collaborative full stack productivity platform for managing tasks, teams, deadlines, and workflows efficiently.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "AI Disaster Management System",
    desc: "AI-powered disaster alert and emergency coordination platform with predictive analysis and real-time updates.",
    tech: ["React", "Python", "Machine Learning", "APIs"],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "Crop Prediction System",
    desc: "ML-based system to predict optimal crops using environmental and soil data.",
    tech: ["Python", "Django", "Machine Learning"],
    github: "#",
    demo: "#",
  },
  {
    title: "Resume Parser with Skill Matcher",
    desc: "NLP-based system that extracts skills from resumes and matches them with job roles.",
    tech: ["Python", "Flask", "NLP"],
    github: "#",
    demo: "#",
  },
  {
    title: "Healthcare Management System",
    desc: "Full stack application for managing patients, appointments, and medical records.",
    tech: ["Django", "MySQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "E-commerce Portal",
    desc: "Complete shopping platform with authentication, cart, and order management.",
    tech: ["Django", "React"],
    github: "#",
    demo: "#",
  },
  {
    title: "Inventory Stockout Prediction",
    desc: "Predicts stock shortages using historical inventory data and ML models.",
    tech: ["Python", "Pandas", "Machine Learning"],
    github: "#",
    demo: "#",
  },
  {
    title: "Feedback Sentiment Analysis",
    desc: "Analyzes user feedback and classifies sentiment using NLP techniques.",
    tech: ["Python", "NLP", "Scikit-learn"],
    github: "#",
    demo: "#",
  },
  {
    title: "Weather App",
    desc: "Real-time weather application using API integration with dynamic UI.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#",
    demo: "#",
  },
  {
    title: "Personal Portfolio Website",
    desc: "Modern animated portfolio showcasing projects, skills, and experience.",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
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
          My Projects
        </h2>

        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A collection of my work in Full Stack Development, Machine Learning,
          AI Systems, and Data Analytics.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
            }}
            whileHover={{
              scale: 1.03,
              y: -5,
            }}
            className="relative p-6 rounded-2xl 
                       bg-gray-100 dark:bg-white/5
                       border border-black/10 dark:border-white/10
                       shadow-md hover:shadow-2xl
                       backdrop-blur-lg
                       overflow-hidden
                       transition"
          >

            {/* Glow Effect */}
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500">
              <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500/10 blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500/10 blur-3xl"></div>
            </div>

            

            {/* Title */}
            <h3 className="text-2xl font-semibold mb-3 relative z-10">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-700 dark:text-gray-400 mb-5 text-sm leading-relaxed relative z-10">
              {project.desc}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-6 relative z-10">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-md
                             bg-blue-100 text-blue-600
                             dark:bg-blue-500/20 dark:text-blue-400"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-3 relative z-10">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg text-sm font-medium
                           bg-black text-white
                           dark:bg-white dark:text-black
                           hover:scale-105 transition"
              >
                GitHub
              </a>

              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg text-sm
                           border border-gray-400 dark:border-gray-500
                           hover:bg-black hover:text-white
                           dark:hover:bg-white dark:hover:text-black
                           transition"
              >
                Live Demo
              </a>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;