import {
  FaHome,
  FaBriefcase,
  FaFolderOpen,
  FaTools,
  FaGraduationCap,
  FaBook,
  FaEnvelope,
} from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      
      {/* Dock Container */}
      <div
        className="flex items-center gap-6 px-6 py-3 rounded-2xl
                   bg-white/70 dark:bg-black/40
                   backdrop-blur-xl
                   border border-black/10 dark:border-white/10
                   shadow-xl transition"
      >

        {/* Navigation Icons */}
        <NavIcon icon={<FaHome />} link="#hero" label="Home" />
        <NavIcon icon={<FaBriefcase />} link="#about" label="About" />
        <NavIcon icon={<FaFolderOpen />} link="#projects" label="Projects" />
        <NavIcon icon={<FaTools />} link="#skills" label="Skills" />

        {/* ✅ Education correctly placed */}
        <NavIcon icon={<FaGraduationCap />} link="#education" label="Education" />

        <NavIcon icon={<FaBook />} link="#resume" label="Resume" />
        <NavIcon icon={<FaEnvelope />} link="#contact" label="Contact" />

        {/* Divider */}
        <div className="w-px h-6 bg-black/20 dark:bg-white/20"></div>

        {/* Theme Toggle */}
        <ThemeToggle />
      </div>
    </div>
  );
};

/* 🔥 Icon Component */
const NavIcon = ({ icon, link, label }) => {
  return (
    <a
      href={link}
      className="relative group text-gray-600 dark:text-gray-400 
                 hover:text-black dark:hover:text-white 
                 transition transform hover:scale-110"
    >
      {/* Icon */}
      <div className="text-xl">{icon}</div>

      {/* Tooltip */}
      <span
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 
                   text-xs px-2 py-1 rounded-md
                   bg-black text-white 
                   dark:bg-white dark:text-black
                   opacity-0 group-hover:opacity-100 
                   pointer-events-none transition"
      >
        {label}
      </span>
    </a>
  );
};

export default Navbar;