import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import FloatingBackground from '../components/FloatingBackground';

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(45deg,rgb(223, 211, 187) 0%, rgb(249, 234, 218) 100%)',
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