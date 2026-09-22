import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "Team Task Manager",
    category: "Full Stack Development",
    description:
      "A full-stack task management application for managing projects, assigning tasks, tracking progress, and organizing team workflows.",
    tech: ["React.js", "JavaScript", "REST API", "SQL"],
    github: "https://github.com/suryaveersingh18/team-task-manager/tree/main/backend",
    demo: "#",
  },
  {
    number: "02",
    title: "IPL Auction Data Analysis",
    category: "Data Analytics",
    description:
      "Analyzed IPL auction data to identify player valuations, team spending patterns, auction trends, and role-wise insights.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib"],
    github: "https://github.com/suryaveersingh18/ipl-auction-analysis",
    demo: "#",
  },
  {
    number: "03",
    title: "AQI Analysis & Prediction",
    category: "Data Analytics · Machine Learning",
    description:
      "Analyzed air-quality data, explored correlations and contributing factors, and built machine-learning models for AQI prediction.",
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
    ],
    github: "https://github.com/suryaveersingh18/AI-Air-Quality-Dashboard",
    demo: "#",
  },
  {
    number: "04",
    title: "RAG Document Analysis System",
    category: "AI · LLM",
    description:
      "A document-based RAG system that uses semantic search and retrieval to extract relevant information and generate context-aware responses.",
    tech: ["Python", "LangChain", "LLM", "Vector Database"],
    github: "https://github.com/suryaveersingh18/rag-documentation-assistant",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen px-6 md:px-16 py-24
                 bg-white dark:bg-black
                 text-black dark:text-white
                 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-sm uppercase tracking-[0.3em]
                        text-gray-500 mb-3">
            Selected Work
          </p>

          <div className="flex flex-col md:flex-row md:items-end
                          md:justify-between gap-6">

            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Projects
            </h2>

            <p className="max-w-md text-gray-600 dark:text-gray-400
                          text-base md:text-lg leading-relaxed">
              A selection of projects across software engineering,
              data analytics, machine learning, and AI.
            </p>

          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">

          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl p-7 md:p-8
                         bg-gray-50 dark:bg-white/[0.04]
                         border border-black/10 dark:border-white/10
                         hover:border-black/20 dark:hover:border-white/20
                         shadow-sm hover:shadow-xl
                         transition-all duration-300"
            >

              {/* Top Row */}
              <div className="flex items-start justify-between mb-8">

                <span
                  className="text-sm font-mono
                             text-gray-400 dark:text-gray-600"
                >
                  {project.number}
                </span>

                <span
                  className="text-xs px-3 py-1.5 rounded-full
                             bg-black/5 dark:bg-white/10
                             text-gray-600 dark:text-gray-300"
                >
                  {project.category}
                </span>

              </div>

              {/* Title */}
              <h3
                className="text-2xl md:text-3xl font-semibold mb-4
                           tracking-tight
                           group-hover:translate-x-1
                           transition-transform duration-300"
              >
                {project.title}
              </h3>

              {/* Description */}
              <p
                className="text-gray-600 dark:text-gray-400
                           leading-relaxed mb-7"
              >
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-full text-xs
                               bg-white dark:bg-white/5
                               border border-black/10 dark:border-white/10
                               text-gray-600 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2
                             px-4 py-2.5 rounded-full
                             bg-black dark:bg-white
                             text-white dark:text-black
                             text-sm font-medium
                             hover:scale-105
                             transition-transform duration-200"
                >
                  GitHub
                  <span>↗</span>
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2
                             px-4 py-2.5 rounded-full
                             border border-black/15 dark:border-white/15
                             text-sm font-medium
                             hover:bg-black hover:text-white
                             dark:hover:bg-white dark:hover:text-black
                             transition-all duration-200"
                >
                  Live Demo
                  <span>↗</span>
                </a>

              </div>

              {/* Bottom Accent */}
              <div
                className="absolute bottom-0 left-8 right-8 h-px
                           bg-gradient-to-r
                           from-transparent via-black/10 to-transparent
                           dark:via-white/10"
              />

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;