import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h3" component="h1" gutterBottom align="center">
            關於我
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom>
                  專業技能
                </Typography>
                <Typography paragraph>
                  • React.js / Next.js
                </Typography>
                <Typography paragraph>
                  • JavaScript / TypeScript
                </Typography>
                <Typography paragraph>
                  • HTML5 / CSS3
                </Typography>
                <Typography paragraph>
                  • Node.js / Express
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom>
                  個人簡介
                </Typography>
                <Typography paragraph>
                  我是一名全端開發者，擁有豐富的網頁開發經驗。我熱愛創造優雅且實用的網頁應用程式，並且持續學習新的技術和框架。
                </Typography>
                <Typography paragraph>
                  在過去的專案中，我專注於建立響應式設計、優化使用者體驗，並確保程式碼的可維護性。
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Box>
    </Container>
  );
};

export default About; 