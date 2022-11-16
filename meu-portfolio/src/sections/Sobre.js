import React from 'react';
import Wrapper from '../components/Wrapper';
import Box from '@mui/material/Box';
import Perfil from '../images/perfil.jpeg';
import Typography from '@mui/material/Typography';

const Sobre = () => {
  return (
    <Box
    sx={{
      backgroundColor: '#80d8ff',
      color: 'primary.contrastText',
    }}
  >
    <Wrapper sectionId='Sobre' minHeight='100vh'>
    <Box
    sx={{
      backgroundColor: '#F2EBDC',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      margin: 'auto',
      width: { xs: '100%', sm: '100%', md: '90%' },
      height: { xs: '100%', sm: '100%', md: '450px' },
      borderRadius: '10px',
    }}
    >
      <Box
    sx={{
      width: { xs: '100%', sm: '100%', md: '50%' },
      verticalAlign: 'center',
    }}
    >
      <img 
  
      src={ Perfil } 
        alt='foto de perfil' 
        height= '55%' 
        width='55%' 
        style={{ 
          borderRadius: '50%',
          margin: 'auto auto',
          border: '4px solid #01579b '
          } }/>
      </Box>
    <Box
    sx={{
      width: { xs: '100%', sm: '100%', md: '65%' },
      backgroundColor: '#01579b',
      borderRadius: '0 10px 10px 0'
    }}
    >
        <Typography
            variant="p"
            component="div"
            color="secondary.main"
            sx={{ 
              fontFamily: 'Fredoka One, cursive'
            }}
          >
            Olá Mundo ! Meu nome é Jeferson Gomes, tenho 31 anos e sou aluno de Sistemas de informações e
            sou Desenvolvedor Web Full Stack em formação pela trybe.
          </Typography>

          <Typography
            variant="p"
            component="div"
            color="#01579b"
            sx={{ 
              fontFamily: 'Fredoka One, cursive'
            }}
          >
            Sou apaixonado em aprender novas habilidades e procurar andar em constante evolução. Sou uma pessoa
            comunicativa e prezo muito pelas relações pessoais, conseguindo assim trablahar em grupo com bastante eficiência.
          </Typography>

          <Typography
            variant="p"
            component="div"
            color="#01579b"
            sx={{ 
              fontFamily: 'Fredoka One, cursive'
            }}
          >
            Estou em busca da minha primeira oportunidade na área de desenvolvimento Web.
          </Typography>
    </Box>
    </Box>
    </Wrapper>

    </Box>
  );
}

export default Sobre;