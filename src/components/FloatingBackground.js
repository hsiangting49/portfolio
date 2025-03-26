import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

const FloatingBackground = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    // 初始化泡泡
    const initialBubbles = Array.from({ length: 10 }, (_, index) => ({
      id: index,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 30 + 20,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 2,
    }));
    setBubbles(initialBubbles);
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        zIndex: 0,
      }}
    >
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{ 
            duration: bubble.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: bubble.delay,
          }}
          style={{
            position: 'absolute',
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            borderRadius: '50%',
            background: 'rgba(201, 191, 141, 0.1)',
            border: '1px solid rgba(201, 191, 141, 0.2)',
            transformOrigin: 'center',
          }}
        />
      ))}
    </Box>
  );
};

export default FloatingBackground; 