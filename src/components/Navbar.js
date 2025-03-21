import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          我的作品集
        </Typography>
        <Box>
          <Button color="inherit" component={RouterLink} to="/">
            首頁
          </Button>
          <Button color="inherit" component={RouterLink} to="/about">
            關於我
          </Button>
          <Button color="inherit" component={RouterLink} to="/projects">
            作品集
          </Button>
          <Button color="inherit" component={RouterLink} to="/contact">
            聯絡我
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 