import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Logo from '../assets/images/MuscleMetricIcon.jpg';

const footer = () => {
    return (
        <Box bgcolor='transparent'>
            <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
                <img src={Logo} alt='Logo' width='100px' height='auto' />
                <Typography variant='h5' pb='40px' mt='20px'>
                    Made by <a href='https://github.com/harrycunningham04' target='_blank' rel='noreferrer'                         style={{
                            color: 'navy', 
                            textDecoration: 'none', 
                            fontWeight: 'inherit', 
                        }}>Harry Cunningham</a>
                </Typography>
            </Stack>
        </Box>
    )
}

export default footer