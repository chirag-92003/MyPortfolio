import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const AboutContainer = styled(Box)`
  padding: 100px 0;
  background: #112240;
  color: #fff;
`;

const StyledImage = styled(motion.div)`
  width: 100%;
  height: 300px;
  background: #64ffda;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  &::after {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    right: -20px;
    bottom: -20px;
    border: 2px solid #64ffda;
    border-radius: 10px;
    z-index: -1;
  }
`;

const About = () => {
  return (
    <AboutContainer id="about">
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h2"
                sx={{
                  color: '#64ffda',
                  mb: 3,
                  fontWeight: 'bold',
                }}
              >
                About Me
              </Typography>
              <Typography variant="body1" sx={{ color: '#8892b0', mb: 3 }}>
                I am a passionate Computer Science Engineering student with a keen interest in software
                development and technology. My journey in the world of programming has equipped me with
                strong problem-solving skills and a deep understanding of computer science fundamentals.
              </Typography>
              <Typography variant="body1" sx={{ color: '#8892b0', mb: 3 }}>
                I believe in continuous learning and staying updated with the latest technologies. My
                academic background combined with my enthusiasm for coding allows me to approach
                challenges with both theoretical knowledge and practical problem-solving abilities.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledImage
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
          </Grid>
        </Grid>
      </Container>
    </AboutContainer>
  );
};

export default About; 