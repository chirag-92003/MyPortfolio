import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';

const ProjectsContainer = styled(Box)`
  padding: 100px 0;
  background: #112240;
  color: #fff;
`;

const ProjectCard = styled(motion(Card))`
  background: #0a192f;
  border: 1px solid #233554;
  border-radius: 10px;
  overflow: hidden;
  height: 100%;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    border-color: #64ffda;
  }
`;

const ProjectImage = styled(CardMedia)`
  height: 200px;
  background: #233554;
  background-size: contain !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
`;

const projects = [
  {
    title: 'Ecommerce Web Application',
    description: 'Developed an eCommerce website using React as the framework and Firebase for the database. Implemented a JavaScript backend to manage and process user complaints efficiently',
    technologies: ['React', 'Firebase', 'Material-UI', 'Node.js', 'Redux'],
    github: 'https://github.com/chirag-92003/Ecommerce.git',
    image: '/images/Screenshot 2025-03-07 221256.png',
    date: '02/2024'
  },
  {
    title: 'Inquisitve',
    description: 'Used the PaLM API to generate questions from a paragraph, translating user input to English with the googletrans library. Deployed the application using Streamlit for user interaction.',
    technologies: ['Python', 'PaLM API', 'Streamlit', 'googletrans'],
    github: 'https://github.com/chirag-92003/GenAI.git',
    image: '/images/Screenshot 2025-03-07 222628.png',
    date: '12/2023'
  },
  {
    title: 'House Price Prediction',
    description: 'Developed a real estate price prediction model using XGBoost, Python, and Scikit-learn, enhancing it with feature engineering and evaluating it using RMSE and R² score.',
    technologies: ['Python', 'XGBoost', 'Scikit-learn', 'Machine Learning'],
    github: 'https://github.com/chirag-92003/Ensemble_house_pred.git',
    image: '/images/Screenshot 2025-03-07 223224.png',
    date: '09/2024'
  }
];

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            sx={{
              color: '#64ffda',
              mb: 5,
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            Projects
          </Typography>
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={4} key={project.title}>
                <ProjectCard
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProjectImage
                    image={project.image || "/project-placeholder.jpg"}
                    title={project.title}
                    sx={{
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  <CardContent>
                    <Typography
                      variant="h5"
                      sx={{
                        color: '#00ff88',
                        mb: 1,
                        fontWeight: 'bold',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}
                    >
                      {project.title}
                      <Typography
                        component="span"
                        sx={{
                          color: '#8892b0',
                          fontSize: '0.9rem',
                        }}
                      >
                        {project.date}
                      </Typography>
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: '#8892b0', mb: 2 }}
                    >
                      {project.description}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      {project.technologies.map((tech) => (
                        <Typography
                          key={tech}
                          component="span"
                          sx={{
                            color: '#8892b0',
                            mr: 1,
                            fontSize: '0.8rem',
                          }}
                        >
                          {tech}
                        </Typography>
                      ))}
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <Button
                        startIcon={<GitHubIcon />}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: '#00ff88',
                          borderColor: '#00ff88',
                          '&:hover': {
                            borderColor: '#00ff88',
                            backgroundColor: 'rgba(0, 255, 136, 0.1)',
                          },
                        }}
                      >
                        Code
                      </Button>
                    </Box>
                  </CardContent>
                </ProjectCard>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </ProjectsContainer>
  );
};

export default Projects; 