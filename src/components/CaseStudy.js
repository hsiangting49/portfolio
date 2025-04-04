import React from 'react';
import { Container, Typography, Box, Button, Grid, Card, CardContent, CardMedia, CardActions, IconButton } from '@mui/material';



function CaseStudy({ title, projectName, type, role, duration, tools, team, problem, goals, research, personas, wireframes, uiDesign, testing, finalDesign, learnings, nextSteps }) {
  return (
    <Box sx={{ 
      backgroundColor: 'rgb(201, 194, 188)',
     }} >
      <h1>{title}</h1>
      <h2>{projectName}</h2>
      <p><strong>Type:</strong> {type}</p>
      <p><strong>Role:</strong> {role}</p>
      <p><strong>Duration:</strong> {duration}</p>
      <p><strong>Tools:</strong> {tools}</p>
      <p><strong>Team:</strong> {team}</p>
      <h3>Problem</h3>
      <p>{problem}</p>
      <h3>Goals</h3>
      <p>{goals}</p>
      <h3>Research</h3>
      <p>{research}</p>
      <h3>Personas</h3>
      <p>{personas}</p>
      <h3>Wireframes</h3>
      <p>{wireframes}</p>
      <h3>UI Design</h3>
      <p>{uiDesign}</p>
      <h3>Testing</h3>
      <p>{testing}</p>
      <h3>Final Design</h3>
      <p>{finalDesign}</p>
      <h3>Learnings</h3>
      <p>{learnings}</p>
      <h3>Next Steps</h3>
      <p>{nextSteps}</p>
    </Box>
  );
}

export default CaseStudy;