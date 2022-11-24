import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Wrapper from '../components/Wrapper';

const Home = () => {
  return (
    <Wrapper sectionId='Início' minHeight='100vh'>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
          textAlign: 'center',
          width: { xs: '100%', sm: '100%', md: '448px' },
          height: {xs: '350px' , sm: '320px', md: '320px'},
          padding: '15px 0',
          margin: { xs: '12px 0', sm: '50px 5px', md: '20px' },
          opacity: '80%',
          backgroundColor: '#80d8ff',
          borderRadius: '20px',
        }}
      >
        <Box
          sx={{
            padding: { xs: '5px', sm: '5px', md: '0 10px' },
            opacity: '100%',
          }}
        >
          <Typography
            variant='h3'
            component='div'
            color="#01579b"
            sx={{
              padding: '10px',
              fontFamily: 'Fredoka One, cursive',
              fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
            }}
          >
            Bem Vindo ao meu Portfólio!
          </Typography>

        </Box>

        <Box
          sx={{
            opacity: '100%',
          }}
        >
          <Typography
            variant='h2'
            component='div'
            color='#1a237e'
            sx={{
              fontFamily: 'Gamja Flower, cursive',
              fontSize: '4rem',
              fontWeight: '900',
            }}
          >
            Jeferson Gomes
          </Typography>

          <Typography
            variant='h2'
            component='div'
            color='#01579b'
            sx={{
              fontFamily: 'Fredoka One, cursive',
              fontSize: '1.5rem',
            }}
          >
            Desenvolvedor Full Stack
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: "space-evenly",
            opacity: '100%',
          }}
        >

          <Button
            variant="contained"
            size='large'
            component='a'
            href='https://www.linkedin.com/in/jefersongjr/'
            target='_blank'
            sx={{
              transition: '400ms',
              width: '60px',
              backgroundColor: '#80d8ff',
            }}
          >
            <img src='https://img.icons8.com/doodle/512/linkedin-circled.png'
              width={50}
              alt='icone-likedin'
            />
          </Button>

          <Button
            variant='contained'
            size='large'
            component='a'
            href='https://drive.google.com/file/d/1-lq7y0vLwUAMLuGmNSW4Ieq-Jgw9tA2e/view'
            target='_blank'
            sx={{
              transition: '400ms',
              width: '150px',
              backgroundColor: '#80d8ff',
            }}
          >
            <img src='https://img.icons8.com/clouds/512/resume.png'
              width={50}
              alt='icone-likedin' />
            <Typography
              variant='p'
              component='div'
              color='#01579b'
              sx={{
                flexGrow: 1,
                display: { xs: 'none', sm: 'block' },
                fontFamily: 'Fredoka One, cursive',
                fontSize: '1rem',
              }}
            >
              Currículo
            </Typography>            
            </Button>


          <Button
            variant='contained'
            size='large'
            component='a'
            href='https://github.com/jefersongjr'
            target='_blank'
            sx={{
              transition: '200ms',
              width: '60px',
              backgroundColor: '#80d8ff',
            }}
          >
            <img src='https://img.icons8.com/doodle/512/github.png'
              width={50}
              alt='icone-likedin' />
          </Button>
        </Box>
      </Box>
    </Wrapper>
  );
}

export default Home;