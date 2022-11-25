import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Wrapper from '../components/Wrapper';
import { FormControl, TextField } from '@mui/material';

const Contact = () => {
    return (
        <Wrapper sectionId='Contato' minHeight='100vh'>
               <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    textAlign: 'center',
                    width: { xs: '100%', sm: '100%', md: '100%' },
                    fontFamily: 'Fredoka One, cursive'
                }}
            >
            <Typography
                variant='h3'
                color="#01579b"
                sx={{
                    marginBottom: '25px',
                    fontFamily: 'Fredoka One, cursive',
                    fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                }}
            >
                Fale Comigo
            </Typography>

            </Box>

          
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'column',
                    textAlign: 'center',
                    width: { xs: '100%', sm: '100%', md: '96%' },
                    height: { xs: '350px', sm: '320px', md: '500px' },
                    padding: '15px 0',
                    margin: { xs: '12px 0', sm: '50px 5px', md: '20px' },
                    opacity: '80%',
                    backgroundColor: '#80d8ff',
                    borderRadius: '20px',
                    fontFamily: 'Fredoka One, cursive'
                }}
            >
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1 },
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                    action="https://formsubmit.co/jeferson_gjr@hotmail.com"
                    method="POST"
                    autoComplete="off"
                >
                    <FormControl sx={{ fontFamily: 'Fredoka One, cursive' }}>
                        <TextField
                            variant="filled"
                            label='Nome'
                            name="name"
                            required
                        />
                    </FormControl>

                    <FormControl>
                        <TextField variant="filled" label="Email" name="email" required />
                    </FormControl>

                    <FormControl>
                        <TextField
                            variant="filled"
                            label='Assunto'
                            name="subject"
                            required
                        />
                    </FormControl>

                    <FormControl>
                        <TextField
                            variant="filled"
                            label='Fale comigo'
                            name="message"
                            rows="10"
                            maxLength="1000"
                            multiline
                            required
                        />
                    </FormControl>

                    <FormControl
                        sx={{
                            display: 'flex',
                            flexFlow: 'row nowrap',
                            justifyContent: 'center',
                        }}
                    >
                        <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            sx={{
                                backgroundColor: '#01579b',
                                fontFamily: 'Fredoka One, cursive',
                                marginTop: '2.1em',
                                maxWidth: '80%',
                                width: '200px',
                            }}
                        >
                            Enviar
                        </Button>
                    </FormControl>
                </Box>

            </Box>
        </Wrapper>
    );
}

export default Contact;