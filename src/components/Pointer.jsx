import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import "./pointer.css";

const Pointer = ({ hideCursor }) => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = {
    damping: 35,
    stiffness: 700,
    mass: 1,
  };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
      className="cursor-container"
    >
      {!hideCursor ? (
        <motion.div layoutId="cursor" className="cursor-indicator"></motion.div>
      ) : null}
    </motion.div>
  );
};

export default Pointer;
