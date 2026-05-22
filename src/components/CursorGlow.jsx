import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl z-0"
      style={{
        transform: `translate(${position.x - 120}px, ${position.y - 120}px)`,
      }}
    ></div>
  );
};

export default CursorGlow;