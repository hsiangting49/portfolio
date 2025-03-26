import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <AppBar position="fixed">
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, sm: 4 } }}>
        <Typography
          component={RouterLink}
          to="/"
          sx={{
            color: 'rgb(130, 113, 21)',
            textDecoration: 'none',
            fontSize: '1.5rem',
            '&:hover': {
              color: 'rgb(201, 191, 141)',
            },
          }}
        >
          Portfolio
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            component={RouterLink}
            to="/"
            sx={{
              color: location.pathname === '/' ? 'rgb(130, 113, 21)' : 'rgb(176, 171, 141)',
              '&:hover': {
                backgroundColor: 'rgba(165, 157, 110, 0.21)',
                color: 'rgb(130, 113, 21)',
              },
            }}
          >
            Home
          </Button>
          <Button
            component={RouterLink}
            to="/projects"
            sx={{
              color: location.pathname === '/projects' ? 'rgb(130, 113, 21)' : 'rgb(176, 171, 141)',
              '&:hover': {
                backgroundColor: 'rgba(165, 157, 110, 0.21)',
                color: 'rgb(130, 113, 21)',
              },
            }}
          >
            Projects
          </Button>
          <Button
            component={RouterLink}
            to="/contact"
            sx={{
              color: location.pathname === '/contact' ? 'rgb(130, 113, 21)' : 'rgb(176, 171, 141)',
              '&:hover': {
                backgroundColor: 'rgba(165, 157, 110, 0.21)',
                color: 'rgb(130, 113, 21)',
              },
            }}
          >
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 