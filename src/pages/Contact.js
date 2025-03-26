import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom 
            align="center"
            sx={{
              color: 'rgb(249, 234, 218)',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
            }}
          >
            Contact Me
          </Typography>
          <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                margin="normal"
                required
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{ 
                  mt: 3,
                  backgroundColor: 'rgb(184, 172, 115)',
                  color: 'rgb(28, 27, 26)',
                  '&:hover': {
                    backgroundColor: 'rgb(157, 149, 106)',
                  },
                }}
              >
                Send Message
              </Button>
            </form>
          </Paper>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Contact; 