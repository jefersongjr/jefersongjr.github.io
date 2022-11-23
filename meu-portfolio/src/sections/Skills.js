import * as React from 'react';
import Wrapper from '../components/Wrapper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { stacks } from '../data/data'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  textAlign: 'center',
  height: '125px',
  color: theme.palette.text.secondary,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontFamily: 'Fredoka One, cursive',
  fontSize: '20px',
}));

const Skills = () => {
  return (

    <Box
      sx={{
        backgroundColor: '#80d8ff',
        flexGrow: 1,
        textAlign: 'center',
      }}
    >
      <Wrapper sectionId='Tecnologias' minHeight='100vh'>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
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
            Principais Tecnologias:
          </Typography>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 15 }}>
            {stacks.map((stack) => (
              <Grid item xs={1} sm={2.5} md={3} key={stack.name}
              >
                <Item> {stack.name} <img src={stack.image} width='80px' alt={`Icone ${stack.name}`} /> </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Wrapper>

    </Box>

  );
}

export default Skills;