import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const SkillsContainer = styled(Box)`
  padding: 100px 0;
  background: #0a192f;
  color: #fff;
`;

const SkillCard = styled(motion(Paper))`
  padding: 20px;
  height: 100%;
  background: #112240;
  border: 1px solid #233554;
  border-radius: 10px;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    border-color: #64ffda;
  }
`;

const skills = [
  {
    category: 'Programming Languages',
    items: ['Python', 'Java', 'JavaScript', 'C++'],
  },
  {
    category: 'Web Development',
    items: ['React', 'HTML5', 'CSS3', 'Node.js'],
  },
  {
    category: 'Tools & Technologies',
    items: ['Git', 'Docker', 'VS Code', 'Linux'],
  },
  {
    category: 'Databases',
    items: ['MySQL', 'MongoDB', 'PostgreSQL'],
  },
];

const Skills = () => {
  return (
    <SkillsContainer id="skills">
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
            Skills
          </Typography>
          <Grid container spacing={3}>
            {skills.map((skill, index) => (
              <Grid item xs={12} sm={6} md={3} key={skill.category}>
                <SkillCard
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#64ffda',
                      mb: 2,
                      fontWeight: 'bold',
                    }}
                  >
                    {skill.category}
                  </Typography>
                  <Box component="ul" sx={{ listStyle: 'none', padding: 0 }}>
                    {skill.items.map((item) => (
                      <Typography
                        key={item}
                        component="li"
                        sx={{
                          color: '#8892b0',
                          mb: 1,
                          '&::before': {
                            content: '"▹"',
                            color: '#64ffda',
                            marginRight: '10px',
                          },
                        }}
                      >
                        {item}
                      </Typography>
                    ))}
                  </Box>
                </SkillCard>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </SkillsContainer>
  );
};

export default Skills; 