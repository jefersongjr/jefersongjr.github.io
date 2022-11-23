import * as React from 'react';
import Wrapper from '../components/Wrapper';
import Box from '@mui/material/Box';
import fundoGeometrico from '../images/fundoGeometrico.png';
import Typography from '@mui/material/Typography';
import CardProject from '../components/Card';

const Projects = () => {
  return (

    <Box
    sx={{
      backgroundImage: `url(${ fundoGeometrico })` ,
      backgroundColor: 'primary.main',
      flexGrow: 1,
      textAlign: 'center',
    }}
    >
    <Wrapper sectionId='Tecnologias' minHeight='100vh'>
    <Box
    sx={{
      display: 'flex',
      flexDirection:  'column',
      justifyContent: 'center',
      margin: '0 auto',
      width: { xs: '100%', sm: '100%', md: '97%' },
      height: { xs: '100%', sm: '100%' },
      borderRadius: '10px',
    }}
    >
    <Typography
            variant='h3'
            component='div'
            color="#01579b"
            sx={{
              marginBottom: '25px',
              fontFamily: 'Fredoka One, cursive',
              fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
            }}
          >
            Meus Projetos: 
      </Typography>
      <Box
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      margin: '0 auto',
      width: { xs: '100%', sm: '100%', md: '100%' },
      height: { xs: '100%', sm: '100%' },
      borderRadius: '10px',
    }}
    >
      <CardProject />
      <CardProject />
      <CardProject />
      </Box>
    
      </Box>
    </Wrapper>

    </Box>
    
  );
}

export default Projects;