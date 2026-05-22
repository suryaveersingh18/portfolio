import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen px-6 md:px-16 py-20 
                 bg-white dark:bg-black 
                 text-black dark:text-white 
                 transition"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* 👤 LEFT: PROFILE CARD */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="p-8 rounded-2xl text-center 
                     bg-gray-100 dark:bg-white/5 
                     backdrop-blur-lg 
                     border border-black/10 dark:border-white/10 
                     shadow-md hover:shadow-xl 
                     transition"
        >

          {/* 🖼 IMAGE */}
          <div className="relative w-44 h-44 mx-auto mb-6 rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-lg group">

            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr 
                            from-blue-500/20 via-purple-500/20 to-pink-500/20 
                            opacity-0 group-hover:opacity-100 transition duration-300"></div>

            <img
              src="/profile.jpg"
              alt="profile"
              className="w-full h-full object-cover scale-110 object-[center_20%] group-hover:scale-115 transition duration-300"
            />
          </div>

          {/* Name */}
          <h3 className="text-2xl font-bold mb-2">
            Suryaveer Singh
          </h3>

          {/* Role */}
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Full Stack Developer | Data Analyst | ML Enthusiast
          </p>

          {/* Skills */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {["Django", "React", "Machine Learning", "NLP", "APIs"].map(
              (skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm rounded-full 
                             bg-white dark:bg-white/10 
                             text-gray-700 dark:text-gray-300 
                             border border-black/10 dark:border-white/10 
                             hover:bg-gray-200 dark:hover:bg-white/20 
                             transition"
                >
                  {skill}
                </span>
              )
            )}
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 text-sm 
                          text-gray-600 dark:text-gray-400">
            <a
              href="mailto:suryaayush1879082@gmail.com"
              className="hover:text-black dark:hover:text-white transition"
            >
              Email
            </a>
            <a
              href="https://github.com/suryaveersingh18"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-white transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/suryaveer16/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-white transition"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>

        {/* ✉️ RIGHT: CONTACT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl font-bold mb-4">
            Let’s Work Together
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Have an idea, project, or opportunity? Let’s connect and build something impactful.
          </p>

          <form className="space-y-4">

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 rounded-lg 
                           bg-white dark:bg-white/5 
                           border border-black/10 dark:border-white/10 
                           outline-none 
                           focus:border-black/30 dark:focus:border-white/30"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 rounded-lg 
                           bg-white dark:bg-white/5 
                           border border-black/10 dark:border-white/10 
                           outline-none 
                           focus:border-black/30 dark:focus:border-white/30"
              />
            </div>

            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 rounded-lg 
                         bg-white dark:bg-white/5 
                         border border-black/10 dark:border-white/10 
                         outline-none 
                         focus:border-black/30 dark:focus:border-white/30"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 rounded-lg font-medium 
                         bg-black text-white 
                         dark:bg-white dark:text-black 
                         hover:scale-[1.02] transition"
            >
              Send Message
            </button>

          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;