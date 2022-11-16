import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';


import React from 'react';
import Wrapper from '../components/Wrapper';

const Home = () => {
  return (
    <Wrapper sectionId="inicio" minHeight="100vh">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
          textAlign: 'center',
          width: '28rem',
          height: '20rem',
          padding: '15px 0',
          margin: '5.5rem 5.5rem 0 5.5rem ',
          opacity: '80%',
          backgroundColor: '#80d8ff',
          borderRadius:"20px"
        }}
      >
        <Box
          sx={{
            opacity: '100%',
            backgroundColor: '#50F2F2',
          }}
        >
          <h3>Bem Vindo ao meu Portfólio!</h3>
        </Box>

        <Box
          sx={{
            opacity: '100%',
            backgroundColor: '#50F2F2',
          }}
        >
          <h2>Jeferson Gomes</h2>
        </Box>

        <Box
          sx={{
            opacity: '100%',
            backgroundColor: '#50F2F2',
          }}
        >
          <h3>Desenvolvedor Full Stack</h3>
        </Box>
        

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            opacity: '100%',
          }}
        >
        
         <Button
            variant="contained"
            size="large"
            component="a"
            href="https://www.linkedin.com/in/jefersongjr/"
            target="_blank"
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
            variant="contained"
            size="large"
            component="a"
            href="https://drive.google.com/file/d/1phzXvxI1RgfsV4-ELFojIR69_gjKcs_K/view?usp=share_link"
            target="_blank"
            sx={{
              transition: '400ms',
              width: '150px',
              backgroundColor: '#80d8ff',
            }}
          >
            <img src='https://img.icons8.com/clouds/512/resume.png' 
            width={50}
            alt='icone-likedin'/>
            <p> Currículo</p>
            </Button>

                    
         <Button
            variant="contained"
            size="large"
            component="a"
            href="https://github.com/jefersongjr"
            target="_blank"
            sx={{
              transition: '200ms',
              width: '60px',
              backgroundColor: '#80d8ff',
            }}
          >
            <img src='https://img.icons8.com/doodle/512/github.png' 
            width={50}
            alt='icone-likedin'/>
            </Button>
          </Box>


        {/* <Box
          sx={{
            width: '90%',
            opacity: '100%',
          }}
        >
        
         <Button
            variant="contained"
            size="large"
            component="a"
            href="#contact"
            sx={{
              transition: '400ms',
              width: '60px',
              backgroundColor: '#80d8ff',
            }}
          >
            <img src='https://img.icons8.com/doodle/512/github.png' 
            width={50}
            alt='icone-likedin'/>
            </Button>
          </Box>
         */}

       
      </Box>

    </Wrapper>
  );
}

export default Home;