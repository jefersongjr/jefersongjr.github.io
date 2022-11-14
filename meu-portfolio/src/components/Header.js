import React from 'react';
import { AppBar, Grid, Tab, Tabs, Typography } from '@mui/material';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Header = () => {
  return (
      <AppBar position="static">
           <Grid container justifyContent="space-evenly" alignItems="center">
           <Typography variant="h1" component="div" gutterBottom>
                Jeferson Gomes
         </Typography>          <Tabs   aria-label="simple tabs example">
              <Tab label="Início" />
              <Tab label="Sobre"  />
              <Tab label="Contatos"  />
              <Tab label="Projetos"  />
          </Tabs>
         </Grid>
      </AppBar>

  );
}

export default Header;