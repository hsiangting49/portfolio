import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import FloatingBackground from '../components/FloatingBackground';
import profileImage from '../assets/images/profile.JPG';

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        background: 'rgb(28, 27, 26)',
      }}
    >
      <FloatingBackground />
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
            <Box
              sx={{
                width: 250,
                height: 250,
                borderRadius: '50%',
                overflow: 'hidden',
                border: '4px solid white',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.32)',
                mb: 4,
                mx: 'auto',
                position: 'relative',
              }}
            >
              <img
                src={profileImage}
                alt="個人照片"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
            </Box>
            <Typography 
              variant="h3" 
              component="h1" 
              gutterBottom 
              align="center"
              sx={{
                color: 'rgb(249, 234, 218)',
                fontWeight: 'bold',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
              }}
            >
              Welcome to my website
            </Typography>
            <Typography 
              variant="h5" 
              gutterBottom 
              align="center" 
              sx={{
                color: 'rgb(201, 197, 179)',
                mb: 4,
              }}
            >
              I am a UX UI designer
            </Typography>
            <Box sx={{ mt: 4, textAlign: 'center' }}>
              <Button
                variant="contained"
                size="large"
                component={RouterLink}
                to="/projects"
                sx={{ 
                  backgroundColor: 'rgb(184, 172, 115)',
                  borderRadius: '72px',
                  color: 'rgb(28, 27, 26)',
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: 'rgb(157, 149, 106)',
                  },
                }}
              >
                View My Projects
              </Button>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Home; 