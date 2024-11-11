import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography, Box } from '@mui/material';

const ExerciseCard = ({ exercise }) => {
  const buttonStyle = {
    ml: '21px',
    color: '#fff',
    fontSize: '14px',
    borderRadius: '20px',
    textTransform: 'capitalize',
  };

  return (
    <Box sx={{ display: 'inline-flex', flexDirection: 'column', width: '270px', m: '0 15px' }}>
      <Link className="exercise-card" to={`/exercise/${exercise.id}`} style={{ textDecoration: 'none' }}>
        <img
          src={exercise.gifUrl}
          alt={`${exercise.name} exercise`}
          loading="lazy"
          style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
        />
        <Stack direction="row" spacing={1} mt={2}>
          <Button sx={{ ...buttonStyle, backgroundColor: '#ffa9a9' }}>
            {exercise.bodyPart}
          </Button>
          <Button sx={{ ...buttonStyle, backgroundColor: '#fcc757' }}>
            {exercise.target}
          </Button>
        </Stack>
        <Typography
          ml="21px"
          color="#fff"
          fontWeight="bold"
          mt="11px"
          pb="10px"
          textTransform="capitalize"
          fontSize="22px"
        >
          {exercise.name}
        </Typography>
      </Link>
    </Box>
  );
};

export default ExerciseCard;
