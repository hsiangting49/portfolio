import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import CaseStudyPage from './pages/CaseStudyPage';
import Box from '@mui/material/Box';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: 'rgb(201, 191, 141)',
    },
    secondary: {
      main: 'rgb(95, 82, 6)',
    },
    background: {
      default: 'rgb(28, 27, 26)',
      paper: 'rgb(249, 234, 218)',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(249, 234, 218, 0.9)',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1200,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ 
          minHeight: '100vh', 
          backgroundColor: theme.palette.background.default,
          paddingTop: '64px', // 為固定導航欄留出空間
        }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/:id" element={<CaseStudyPage />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
