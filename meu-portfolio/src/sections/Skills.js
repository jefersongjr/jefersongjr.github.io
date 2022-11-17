import * as React from 'react';
import Wrapper from '../components/Wrapper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { stacks } from '../data/data'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Skills = () => {
  return (
    <Box
    sx={{
      backgroundColor: '#80d8ff',
      color: 'primary.contrastText',
      flexGrow: 1,
    }}
    >
    <Wrapper sectionId='Sobre' minHeight='100vh'>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {stacks.map((stack) => (
          <Grid item xs={2} sm={4} md={4} key={stack.name}
          >
            <Item   
            sx={ { 
            display:'flex',
            flexDirection: 'column',
            fontFamily: 'Fredoka One, cursive',
            fontSize: '20px',
            backgroundColor: 'red'
          } }> {stack.name} <img src={stack.image} width='80px%' alt={`Icone ${stack.name}`}/> </Item>
          </Grid>
        ))}
      </Grid>
    </Wrapper>

    </Box>
    
  );
}

export default Skills;