import React, { useState } from 'react';
import { Box } from '@mui/material';

import SearchExercise from './SearchExercise';
import Exercises from './Exercises';

const Search = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
      <SearchExercise
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
}

export default Search;
