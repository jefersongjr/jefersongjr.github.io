import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Button, ButtonGroup } from '@mui/material';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/jefersongjr">
       Jeferson Gomes
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  return (

      <Box
        component="footer"
        sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

          py: 1,
          px: 5,
          mt: 'auto',
          backgroundColor: 'primary.main'
        }}
      >
            <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white'
      }}
    >
      <ButtonGroup variant="text" aria-label="text button group">
        <Button href='https://github.com/jefersongjr'>
            <img 
                src='https://img.icons8.com/external-tal-revivo-tritone-tal-revivo/512/external-github-with-cat-logo-an-online-community-for-software-development-logo-tritone-tal-revivo.png' 
                width='50px'
                alt= 'github icon'
                />
                </Button>
        <Button href='https://www.linkedin.com/in/jefersongjr/'>
        <img 
                src='https://img.icons8.com/external-tal-revivo-tritone-tal-revivo/512/external-linkedin-in-logo-used-for-professional-networking-logo-tritone-tal-revivo.png' 
                width='50px'
                alt= 'github icon'
                />
                </Button>
        <Button href='mailto:jeferson_gjr@hotmail.com'>
            <img 
                src='https://img.icons8.com/external-tal-revivo-tritone-tal-revivo/512/external-mailbox-selected-email-email-tritone-tal-revivo.png' 
                width='50px'
                alt= 'github icon'
                />
                </Button>
      </ButtonGroup>
    </Box>
        <Container sx={{ textAlign:'center'}}>
          <Typography variant="body1">
            Desenvolvido com ReactJs e MUI.
          </Typography>
          <Copyright />
        </Container>
      </Box>
  );
}