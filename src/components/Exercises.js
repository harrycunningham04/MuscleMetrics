import React, { useEffect, useState } from 'react';
import { Pagination, Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../Utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 10;

  useEffect(() => {
    const fetchExercisesByBodyPart = async () => {
      try {
        let exercisesData = [];

        if (bodyPart === 'all') {
          exercisesData = await fetchData(
            'https://exercisedb.p.rapidapi.com/exercises?limit=100&offset=0',
            exerciseOptions
          );
        } else {
          exercisesData = await fetchData(
            `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=100&offset=0`,
            exerciseOptions
          );
        }

        setExercises(exercisesData);
        setCurrentPage(1); // Reset to the first page when bodyPart changes
      } catch (error) {
        console.error("Failed to fetch exercises data:", error);
      }
    };

    fetchExercisesByBodyPart();
  }, [bodyPart, setExercises]);

  // Calculate indexes for pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  // Handle page change
  const paginate = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  return (
    <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
      <Typography variant="h4" textAlign="center" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px" color='#fff'>
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: '107px', xs: '50px' } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.length ? (
          currentExercises.map((exercise, index) => (
            <Box
              key={index}
              sx={{
                flexBasis: {
                  lg: '30%',   
                  md: '45%',  
                  xs: '100%'   
                },
                maxWidth: { lg: '30%', md: '45%', xs: '100%' } 
              }}
            >
              <ExerciseCard exercise={exercise} />
            </Box>
          ))
        ) : (
          <Typography>No exercises found</Typography>
        )}
      </Stack>
      <Stack mt="50px" alignItems="center">
        {exercises.length > exercisesPerPage && (
          <Pagination
            color="standard"
            shape="rounded"
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
