import React from 'react';
import { motion } from 'framer-motion';

const FloatingBackground = () => {
  const positions = [
    { x: 20, y: 20 },
    { x: 80, y: 30 },
    { x: 40, y: 70 },
    { x: 70, y: 60 },
    { x: 30, y: 40 },
  ];

  return (
    <motion.div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: 0,
      }}
    >
      {positions.map((pos, i) => {
        const size = 50 + Math.random() * 150;
        return (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: `${size}px`,
              height: `${size}px`,
              background: 'rgb(230, 179, 179)',
              borderRadius: '50%',
              top: `${pos.y}%`,
              left: `${pos.x}%`,
            }}
            animate={{
              y: [0, -10, 0],
              x: [0, 10, 0],
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        );
      })}
    </motion.div>
  );
};

export default FloatingBackground; 