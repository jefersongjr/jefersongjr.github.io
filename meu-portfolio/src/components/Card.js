import * as React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';

function CardProject({ name, stack, description, img, stacks, link}) {
  return (
    <Card className={stack} sx={{ maxWidth: 345, marginBottom: '30px'}}>
      <CardMedia
        component="img"
        alt={name}
        height="140"
        image={img}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            marginBottom: '25px',
            fontFamily: 'Fredoka One, cursive',
            color: '#01579b',
          }}
        >
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
        {stacks.map((tec) =>
          <Box size="small" sx={{ border: '1px solid black', borderRadius: '30px', padding: '5px' }}>{tec}</Box>)
        }

      </CardActions>
      <CardActions style={{ justifyContent: 'center', flexDirection: 'column' }}>
        <p style={ {color: '#01579b'}}>Veja Aqui:</p>
      <IconButton aria-label="share" width= '50px' href={ link }>
          <img 
             src='https://img.icons8.com/plasticine/512/github-squared.png' 
             height= '50px'
             alt='github icon'
          />
        </IconButton>

      </CardActions>
    </Card>
  );
}

CardProject.propTypes = {
  name: PropTypes.string.isRequired,
  stack: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  stacks: PropTypes.arrayOf(PropTypes.string),
}

export default CardProject;