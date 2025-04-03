import React from 'react';
import { Container, Typography, Box, Button, Grid, Card, CardContent, CardMedia, CardActions, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import FloatingBackground from '../components/FloatingBackground';
import profileImage from '../assets/images/profile.JPG';
import vrCover from '../assets/images/project/coverVR.jpg';
import arCover from '../assets/images/project/coverAR.jpg';
import cookingCover from '../assets/images/project/coverCookingMaster.jpg';
import eldersCover from '../assets/images/project/coverElders.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const pulseAnimation = {
  scale: [1, 1.2, 1],
  opacity: [0.8, 0.4, 0.8],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const lineAnimation = {
  strokeDashoffset: [1000, 0],
  transition: {
    duration: 1.5,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "reverse"
  }
};

const projects = [
  {
    title: 'EldersConnect',
    description: 'A Conversational AI Chatbot for Mental Health Tracking and Enhancing Quality of Life for Older Adults',
    image: eldersCover,
    link: '#',
    technologies: ['UX Research', 'UI Design', 'Competitors Analysis', 'User Testing','Figma'],
  },
  {
    title: 'StoryScape',
    description: 'AR interactive postcard to bring your memories to life',
    image: arCover,
    link: 'https://docs.google.com/presentation/d/1fv9b7uz3GU1jjHLOED1ojJyBhpgbehgIHtBkzg-6t-Q/edit?usp=sharing',
    technologies: ['Zapworks', 'Adobe Animate','Storyboard Design', 'UI Design', 'User Testing','Figma'],
  },
  {
    title: 'Cooking Master',
    description: 'An innovative cooking app that simplifies meal planning and cooking for busy individuals',
    image: cookingCover,
    link: 'https://portfolio1hsiang.my.canva.site/cooking-master',
    technologies: ['Competitors Analysis', 'Personas', 'Prototyping','Figma'],
  },
  {
    title: 'VRventhub',
    description: 'VR event ticketing platform that allows content creators and attendees to connect and explore immersive experiences',
    image: vrCover,
    link: '#',
    technologies: ['Storyboard', 'UI Design', 'User Testing','Figma'],
  },
];

const keyframes = `
  @keyframes borderAnimation {
    0% {
      border-image: linear-gradient(0deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0.2) 100%) 1;
    }
    100% {
      border-image: linear-gradient(360deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0.2) 100%) 1;
    }
  }
`;

const Home = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ pt: 8 }}>
      <style>{keyframes}</style>
      {/* Home Section */}
      <Box id="home" sx={{ 
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: 'rgb(196, 177, 157) ',
        position: 'relative',
      }}>
        <Container maxWidth="md" sx={{ 
          flex: 1, 
          display: 'flex', 
          alignItems: 'center',
          py: 2,
          height: '80vh'
        }}>
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
              variant="h2" 
              component="h1" 
              gutterBottom 
              align="center"
              sx={{
                color: 'rgb(249, 234, 218)',
                fontWeight: 'bold',
                textShadow: '2px 2px 4px rgba(77, 66, 54, 0.5)',
              }}
            >
              Hsiang-Ting Lin (Alicia)
            </Typography>
            <Typography 
              variant="h5" 
              component="h2" 
              gutterBottom 
              align="center"
              sx={{
                color: 'rgb(136, 127, 85)',
                mb: 4,
              }}
            >
              I am a UX UI designer but also a challenge taker who thrives on exploring new possibilities at the intersection of creativity and user psychology. My adaptability has cultivated me into a generalist with hands-on experience in UX/UI design across diverse fields.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            
              <IconButton
                onClick={scrollToProjects}
                sx={{
                  width: 60,
                  height: 60,
                  backgroundColor: 'rgba(199, 181, 161, 0.66)',
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -4,
                    left: -4,
                    right: -4,
                    bottom: -4,
                    borderRadius: '50%',
                    border: '2px solid rgba(255, 255, 255, 0.8)',
                    animation: `${pulseAnimation} 2s infinite`,
                  },
                  '&:hover': {
                    backgroundColor: 'rgb(199, 181, 161)',
                    transform: 'translateY(5px)',
                    '&::before': {
                      borderColor: 'rgba(28, 27,26)',
                    },
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <KeyboardArrowDownIcon 
                  sx={{ 
                    fontSize: 40,
                    color: 'rgb(28, 27, 26)',
                  }} 
                />
              </IconButton>
            </Box>
          </motion.div>
        </Container>

        {/* Marquee Section */}
        <Box sx={{ 
          backgroundColor: 'rgb(28, 27, 26)',
          overflow: 'hidden',
          position: 'relative',
          height: '20vh',
          display: 'flex',
          alignItems: 'center',
          mt: 'auto',
        }}>
          <Box sx={{
            position: 'relative',
            borderTop: '2px solid rgba(255, 255, 255, 0.8)',
            borderBottom: '2px solid rgba(255, 255, 255, 0.8)',
            py: '8px',
            width: '100%',
          }}>
            <motion.div
            animate={{
              x: [0, -1000],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              display: 'flex',
              gap: '2rem',
              whiteSpace: 'nowrap',
            }}
          >
            {[...Array(2)].map((_, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  gap: '2rem',
                  color: 'rgb(201, 191, 141)',
                  fontSize: '1.5rem',
                  fontWeight: 300,
                  letterSpacing: '5px',
                }}
              >
                <span>DESIGN FOR INTUITIVENESS</span>
                <span>•</span>
                <span>CRAFT FOR PRODUCT MISSION</span>
                <span>•</span>
                <span>ART FOR AESTHETIC</span>
                <span>•</span>
              </Box>
            ))}
            </motion.div>
          </Box>
          

        </Box>
      </Box>

      {/* Projects Section */}
      <Box id="projects" sx={{ py: 8, backgroundColor: 'rgb(28, 27, 26)' }}>
        <Container maxWidth="lg">
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
            <Grid container spacing={6} sx={{ mt: 4, justifyContent: 'center' }}>
              {projects.map((project, index) => (
                <Grid item xs={12} md={5} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Card 
                    sx={{ 
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                      },
                      maxWidth: '400px',
                      width: '100%',
                      borderRadius: '16px',
                      overflow: 'hidden',
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="300"
                      image={project.image}
                      alt={project.title}
                      sx={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                        backgroundColor: 'rgba(0, 0, 0, 0.05)',
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1, py: 3 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {project.title}
                      </Typography>
                      <Typography sx={{ color: 'rgb(201, 191, 141)', fontSize: '1.1rem' }}>
                        {project.description}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                        {project.technologies.map((tech, techIndex) => (
                          <Typography
                            key={techIndex}
                            sx={{
                              backgroundColor: 'rgba(201, 191, 141, 0.1)',
                              color: 'rgb(201, 191, 141)',
                              padding: '4px 8px',
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
                          backgroundColor: 'rgba(152, 152, 152, 0.22)',
                          color: 'rgb(28, 27, 26)',
                          '&:hover': {
                            backgroundColor: 'rgba(152, 152, 152, 0.54)',
                          },
                        }}
                      >
                        {project.title === 'EldersConnect' ? 'Coming Soon' : 'Learn More'}
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* About Section */}
      <Box id="about" sx={{ py: 8, backgroundColor: 'rgb(28, 27, 26)' }}>
        <Container maxWidth="md">
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
              About Me
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Typography 
                variant="body1" 
                align="center"
                sx={{ 
                  color: 'rgb(201, 191, 141)',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                }}
              >
                I am a UX UI designer but also a challenge taker who thrives on exploring new possibilities at the intersection of creativity and user psychology. My adaptability has cultivated me into a generalist with hands-on experience in UX/UI design across diverse fields.
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <Button
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  sx={{
                    backgroundColor: 'rgb(184, 172, 115)',
                    color: 'rgb(28, 27, 26)',
                    '&:hover': {
                      backgroundColor: 'rgb(157, 149, 106)',
                    },
                  }}
                >
                  Get in Touch
                </Button>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box id="contact" sx={{ py: 8, backgroundColor: 'rgb(28, 27, 26)' }}>
        <Container maxWidth="md">
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
            <Box sx={{ mt: 4, textAlign: 'center' }}>
              <Button
                href="mailto:your.email@example.com"
                sx={{
                  backgroundColor: 'rgb(184, 172, 115)',
                  color: 'rgb(28, 27, 26)',
                  '&:hover': {
                    backgroundColor: 'rgb(157, 149, 106)',
                  },
                }}
              >
                Send Email
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 