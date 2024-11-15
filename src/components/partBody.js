import React from 'react';
import { Stack, Typography } from '@mui/material';

import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
    const isActive = bodyPart === item;

    return (
        <Stack
            component="button"
            onClick={() => {
                setBodyPart(item);
                window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
            }}
            alignItems="center"
            justifyContent="center"
            aria-label={`Select ${item}`}
            className="body-part-card"
            sx={{
                borderTop: isActive ? '4px solid #ff2625' : '',
                background: '#fff',
                borderBottomLeftRadius: '20px',
                width: '270px',
                height: '280px',
                cursor: 'pointer',
                gap: '47px',
                outline: 'none',
                border: 'none',
            }}
        >
            <img src={Icon} alt={`${item} icon`} style={{ width: '40px', height: '40px' }} />
            <Typography
                fontSize="24px"
                fontWeight="bold"
                fontFamily="Alegreya"
                color="#3A1212"
                textTransform="capitalize"
            >
                {item}
            </Typography>
        </Stack>
    );
};

export default BodyPart;
