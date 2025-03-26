import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  // 生成隨機位置，確保球體之間保持最小距離
  const generatePositions = (count) => {
    const positions = [];
    const minDistance = 150; // 最小距離（像素）
    const maxAttempts = 100; // 最大嘗試次數

    for (let i = 0; i < count; i++) {
      let attempts = 0;
      let newPosition;
      
      do {
        newPosition = {
          x: Math.random() * 100, // 0-100%
          y: Math.random() * 100, // 0-100%
        };
        attempts++;
      } while (
        attempts < maxAttempts &&
        positions.some(existingPos => {
          const dx = (newPosition.x - existingPos.x) * window.innerWidth / 100;
          const dy = (newPosition.y - existingPos.y) * window.innerHeight / 100;
          return Math.sqrt(dx * dx + dy * dy) < minDistance;
        })
      );

      positions.push(newPosition);
    }

    return positions;
  };

  const positions = generatePositions(5);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(45deg,rgb(223, 211, 187) 0%, rgb(249, 234, 218) 100%)',
      }}
    >
      {/* 浮動背景元素 */}
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

      <Container maxWidth="md">
        <Box
          sx={{
            minHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography 
              variant="h2" 
              component="h1" 
              gutterBottom
              sx={{
                fontWeight: 'bold',
                color: '#1f2937',
                mb: 2,
              }}
            >
              Hello, this is Alicia
            </Typography>
            <Typography 
              variant="h3" 
              component="h2" 
              gutterBottom
              sx={{
                color: '#4b5563',
                mb: 4,
              }}
            >
              Welcome to my website!
            </Typography>
            <Typography 
              variant="h5" 
              color="text.secondary" 
              paragraph
              sx={{ mb: 4, color: '#6b7280' }}
            >
              I am a passionate developer focused on creating elegant web applications
            </Typography>
            <Button
              variant="contained"
              size="large"
              component={RouterLink}
              to="/projects"
              sx={{ 
                mt: 4,
                backgroundColor: 'rgba(201, 191, 141, 0.7)',
                borderRadius: '72px',
                '&:hover': {
                  backgroundColor: 'rgb(187, 178, 130)',
                },
              }}
            >
              View My Projects
            </Button>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Home; 