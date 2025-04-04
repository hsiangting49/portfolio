import React from 'react';
import { useParams } from 'react-router-dom';
import CaseStudy from '../components/CaseStudy';


const caseStudies = {
   'elders-connect': {
      title: 'EldersConnect',
      projectName: 'EldersConnect',
      type: 'Research Project',
      role: 'UX Researcher & Designer',
      duration: '12 weeks',
      tools: 'Figma, Miro',
      team: '3 UX Designers, 1 PM',
      problem: 'Older adults face challenges in maintaining mental well-being and social connections.',
      goals: 'Create an AI-powered chatbot that promotes mental health awareness and engagement.',
      research: 'Conducted user interviews and competitor analysis.',
      personas: 'Developed 2 primary personas based on user needs.',
      wireframes: 'Created interactive wireframes and prototypes in Figma.',
      uiDesign: 'Used a simple and accessible UI with a friendly chatbot interface.',
      testing: 'User testing with 10 older adults to validate usability.',
      finalDesign: 'Launched a working prototype with voice and text interaction.',
      learnings: 'Accessibility considerations were critical for elderly users.',
      nextSteps: 'Plan a beta launch with a larger test group.',
    }
  
    // Add more projects as needed
  };
  
  function CaseStudyPage() {
    const { id } = useParams();
    console.log('Case study ID:', id);
    const caseStudy = caseStudies[id];
  
    if (!caseStudy) return <h1>Project not found</h1>;
  
    return <CaseStudy {...caseStudy} />;
  }
  
  export default CaseStudyPage;