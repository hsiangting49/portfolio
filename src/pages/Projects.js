import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'ElderConnect',
    description: 'A Conversational AI Chatbot for Mental Health Tracking and Enhancing Quality of Life for Older Adults',
    image: 'https://source.unsplash.com/random/800x600?website',
    link: '#',
    technologies: ['UX Research', 'UI Design', 'User Testing','Figma'],
  },
  {
    title: 'Cooking Master',
    description: 'An innovative cooking app that simplifies meal planning and cooking for busy individuals',
    image: 'https://source.unsplash.com/random/800x600?coding',
    link: '#',
    technologies: ['Competitors Analysis', 'Personas', 'Prototyping','Figma'],
  },
  {
    title: 'VRventhub',
    description: 'VR event ticketing platform that allows content creators and attendees to connect and explore immersive experiences',
    image: 'https://source.unsplash.com/random/800x600?programming',
    link: '#',
    technologies: ['Storyboard', 'UI Design', 'User Testing','Figma'],
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
            My Projects
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card 
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      objectFit: 'cover',
                      objectPosition: 'center',
                      borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                      backgroundColor: 'rgba(0, 0, 0, 0.05)',
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {project.description}
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                      {project.technologies.map((tech, i) => (
                        <Typography
                          key={i}
                          component="span"
                          sx={{
                            display: 'inline-block',
                            mr: 1,
                            mb: 1,
                            px: 1,
                            py: 0.5,
                            backgroundColor: 'rgba(201, 191, 141, 0.2)',
                            borderRadius: '4px',
                            fontSize: '0.875rem',
                          }}
                        >
                          {tech}
                        </Typography>
                      ))}
                    </Box>
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'flex-end', px: 2, pb: 2 }}>
                    <Button 
                      size="small" 
                      variant="contained"
                      href={project.link}
                      sx={{ 
                        backgroundColor: 'rgb(184, 172, 115)',
                        color: 'rgb(28, 27, 26)',
                        '&:hover': {
                          backgroundColor: 'rgb(157, 149, 106)',
                        },
                      }}
                    >
                      Learn More
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