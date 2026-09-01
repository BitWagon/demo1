"use client";

import { motion } from "framer-motion";

export default function StaggerItem({
  children,
  direction = "up",
  className = "",
}) {
  const directions = {
    up: { y: 35, x: 0 },
    left: { y: 0, x: 35 },
    right: { y: 0, x: -35 },
  };

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          ...directions[direction],
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}