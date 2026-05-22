import { useEffect, useState } from "react";

const TypingText = () => {
  const text = "Full Stack Developer | Data Analyst | ML Enthusiast";
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 40);

      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <p className="text-xl text-gray-400 mb-6 font-mono">
      {displayed}
      <span className="animate-pulse">|</span>
    </p>
  );
};

export default TypingText;