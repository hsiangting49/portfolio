import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';
import { motion } from 'framer-motion';

const projects = [
  {
    title: '專案一',
    description: '這是一個使用 React 和 Material-UI 建立的響應式網站。',
    image: 'https://source.unsplash.com/random/800x600?website',
    link: '#',
  },
  {
    title: '專案二',
    description: '一個使用 Node.js 和 Express 建立的 RESTful API 服務。',
    image: 'https://source.unsplash.com/random/800x600?coding',
    link: '#',
  },
  {
    title: '專案三',
    description: '使用 Next.js 和 TypeScript 開發的全端應用程式。',
    image: 'https://source.unsplash.com/random/800x600?programming',
    link: '#',
  },
];

const Projects = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h3" component="h1" gutterBottom align="center">
            我的作品集
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href={project.link}>
                      了解更多
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Projects; 