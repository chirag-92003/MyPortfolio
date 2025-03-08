import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const HeroContainer = styled(Box)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #0a192f 0%, #112240 100%);
  color: #fff;
  position: relative;
  overflow: hidden;
`;

const AnimatedText = styled(motion.div)`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #64ffda;
`;

const SubText = styled(motion.div)`
  font-size: 1.5rem;
  color: #8892b0;
  margin-bottom: 2rem;
`;

const Hero = () => {
  return (
    <HeroContainer id="home">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h6" sx={{ color: '#64ffda', mb: 2 }}>
            Hello, I'm
          </Typography>
          <AnimatedText
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Chirag Mahesh
          </AnimatedText>
          <SubText
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Computer Science Engineering Student
          </SubText>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Typography variant="body1" sx={{ color: '#8892b0', maxWidth: '600px' }}>
              I'm passionate about creating innovative solutions and exploring the world of technology.
              Currently pursuing my degree in Computer Science Engineering, I'm constantly learning and
              growing in the field of software development.
            </Typography>
          </motion.div>
        </motion.div>
      </Container>
    </HeroContainer>
  );
};

export default Hero; 