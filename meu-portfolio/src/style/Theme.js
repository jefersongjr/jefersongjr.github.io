import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: { 
    primary: {
      main: '#3a9eb5',
    },
    secondary: {
      main: '#F2EBDC',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Gamja Flower, cursive',
      fontSize: '1.5rem',
      fontWeight: 900,
    },
  
  },
});

export default theme;

/*#C7D4D9
#48BED9
#50F2F2
#9EF29B
#F2EBDC
*/ 

/*  <Typography variant="h1" component="div" gutterBottom color="secondary">
                 Jeferson Gomes
           </Typography> */