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
    // 這裡可以加入表單提交的邏輯
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
          <Typography variant="h3" component="h1" gutterBottom align="center">
            聯絡我
          </Typography>
          <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="姓名"
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="電子郵件"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="訊息"
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
                sx={{ mt: 3 }}
              >
                送出訊息
              </Button>
            </form>
          </Paper>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Contact; 