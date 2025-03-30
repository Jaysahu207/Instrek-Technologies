import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Cursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setCursorVariant("hover");
    const handleMouseLeave = () => setCursorVariant("default");

    window.addEventListener("mousemove", moveCursor);

    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-10 h-10 flex items-center justify-center rounded-full pointer-events-none mix-blend-difference z-50"
      animate={{
        x: cursorPosition.x - 20,
        y: cursorPosition.y - 20,
        scale: cursorVariant === "hover" ? 2 : 1,
      }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <motion.div
        className="w-4 h-4 rounded-full bg-white"
        animate={{ scale: cursorVariant === "hover" ? 1.5 : 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      />
    </motion.div>
  );
};

export default Cursor;
