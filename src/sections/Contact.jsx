import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setStatus("");

    const form = event.target;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    );

    formData.append(
      "subject",
      "New Portfolio Contact Message"
    );

    formData.append(
      "from_name",
      "Suryaveer Portfolio"
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        }
      );

      const result = await response.json();

      if (result.success) {
        setStatus("Message sent successfully! I'll get back to you soon.");
        form.reset();
      } else {
        setStatus(
          result.message || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.error(error);
      setStatus(
        "Unable to send the message. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen px-6 md:px-16 py-20
                 bg-white dark:bg-black
                 text-black dark:text-white
                 transition"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* PROFILE CARD */}
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

          {/* IMAGE */}
          <div
            className="relative w-44 h-44 mx-auto mb-6
                       rounded-2xl overflow-hidden
                       border border-black/10 dark:border-white/10
                       shadow-lg group"
          >
            <div
              className="absolute inset-0
                         bg-gradient-to-tr
                         from-blue-500/20
                         via-purple-500/20
                         to-pink-500/20
                         opacity-0
                         group-hover:opacity-100
                         transition duration-300"
            />

            <img
              src="/Portrait.jpg"
              alt="Suryaveer Singh"
              className="w-full h-full object-cover
                         scale-110
                         object-[center_20%]
                         group-hover:scale-115
                         transition duration-300"
            />
          </div>

          {/* NAME */}
          <h3 className="text-2xl font-bold mb-2">
            Suryaveer Singh
          </h3>

          {/* ROLE */}
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Full Stack Developer | Data Analyst | ML Enthusiast
          </p>

          {/* SKILLS */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {[
              "Django",
              "React",
              "Machine Learning",
              "NLP",
              "APIs",
            ].map((skill, i) => (
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
            ))}
          </div>

          {/* SOCIAL LINKS */}
          <div
            className="flex justify-center gap-6 text-sm
                       text-gray-600 dark:text-gray-400"
          >
            <a
              href="mailto:suryaayush1879082@gmail.com"
              className="hover:text-black
                         dark:hover:text-white
                         transition"
            >
              Email
            </a>

            <a
              href="https://github.com/suryaveersingh18"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black
                         dark:hover:text-white
                         transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/suryaveer16/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black
                         dark:hover:text-white
                         transition"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>

        {/* CONTACT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl font-bold mb-4">
            Let’s Work Together
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Have an idea, project, or opportunity?
            Let’s connect and build something impactful.
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >

            <div className="grid md:grid-cols-2 gap-4">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="p-3 rounded-lg
                           bg-white dark:bg-white/5
                           border border-black/10
                           dark:border-white/10
                           outline-none
                           focus:border-black/30
                           dark:focus:border-white/30"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="p-3 rounded-lg
                           bg-white dark:bg-white/5
                           border border-black/10
                           dark:border-white/10
                           outline-none
                           focus:border-black/30
                           dark:focus:border-white/30"
              />

            </div>

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full p-3 rounded-lg
                         bg-white dark:bg-white/5
                         border border-black/10
                         dark:border-white/10
                         outline-none
                         focus:border-black/30
                         dark:focus:border-white/30"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg
                         font-medium
                         bg-black text-white
                         dark:bg-white dark:text-black
                         hover:scale-[1.02]
                         transition
                         disabled:opacity-60
                         disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p
                className={`text-sm text-center pt-2 ${
                  status.includes("successfully")
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400"
                }`}
              >
                {status}
              </p>
            )}

          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;