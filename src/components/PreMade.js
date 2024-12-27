import React, { useState } from 'react';
import '../styles/PreMade.css';



const PreMade = () => {

    const workoutData = {
        ThreeDay: {
            'Full Body': {
                Day1: [
                    { name: 'Squats', sets: 4, reps: 12, target: 'Legs' },
                    { name: 'Bench Press', sets: 4, reps: 10, target: 'Chest' },
                    { name: 'Pull-ups', sets: 3, reps: 8, target: 'Back' },
                    { name: 'Plank', sets: 3, reps: '1 min', target: 'Core' },
                    { name: 'Calf Raises', sets: 3, reps: 15, target: 'Calves' },
                ],
                Day2: [
                    { name: 'Deadlifts', sets: 4, reps: 8, target: 'Back' },
                    { name: 'Overhead Press', sets: 3, reps: 10, target: 'Shoulders' },
                    { name: 'Barbell Row', sets: 4, reps: 12, target: 'Back' },
                    { name: 'Hanging Leg Raises', sets: 3, reps: 12, target: 'Core' },
                    { name: 'Face Pulls', sets: 3, reps: 15, target: 'Shoulders' },
                ],
                Day3: [
                    { name: 'Front Squats', sets: 4, reps: 10, target: 'Legs' },
                    { name: 'Incline Dumbbell Bench Press', sets: 4, reps: 10, target: 'Chest' },
                    { name: 'Chin-ups', sets: 3, reps: 8, target: 'Back' },
                    { name: 'Dumbbell Lateral Raises', sets: 3, reps: 12, target: 'Shoulders' },
                    { name: 'Farmer’s Walk', sets: 2, reps: '30m', target: 'Grip/Full Body' },
                ],
            },
            'Push-Pull-Legs': {
                Day1: [
                    { name: 'Incline Bench Press', sets: 4, reps: 10, target: 'Chest' },
                    { name: 'Dumbbell Flys', sets: 3, reps: 12, target: 'Chest' },
                    { name: 'Overhead Press', sets: 3, reps: 10, target: 'Shoulders' },
                    { name: 'Tricep Dips', sets: 3, reps: 12, target: 'Triceps' },
                    { name: 'Front Raises', sets: 3, reps: 15, target: 'Shoulders' },
                ],
                Day2: [
                    { name: 'Pull-ups', sets: 3, reps: 10, target: 'Back' },
                    { name: 'Barbell Rows', sets: 4, reps: 10, target: 'Back' },
                    { name: 'Face Pulls', sets: 3, reps: 15, target: 'Shoulders' },
                    { name: 'Hammer Curls', sets: 3, reps: 12, target: 'Biceps' },
                    { name: 'Barbell Shrugs', sets: 3, reps: 15, target: 'Traps' },
                ],
                Day3: [
                    { name: 'Back Squats', sets: 4, reps: 12, target: 'Legs' },
                    { name: 'Romanian Deadlifts', sets: 4, reps: 10, target: 'Hamstrings' },
                    { name: 'Leg Press', sets: 4, reps: 12, target: 'Legs' },
                    { name: 'Walking Lunges', sets: 3, reps: '20 steps', target: 'Legs' },
                    { name: 'Calf Raises', sets: 3, reps: 15, target: 'Calves' },
                ],
            },
            'Upper-Lower with Cardio': {
                Day1: [
                    { name: 'Bench Press', sets: 4, reps: 10, target: 'Chest' },
                    { name: 'Dumbbell Rows', sets: 4, reps: 12, target: 'Back' },
                    { name: 'Overhead Press', sets: 3, reps: 10, target: 'Shoulders' },
                    { name: 'Incline Flys', sets: 3, reps: 12, target: 'Chest' },
                    { name: 'Barbell Curls', sets: 3, reps: 12, target: 'Biceps' },
                ],
                Day2: [
                    { name: 'Deadlifts', sets: 4, reps: 8, target: 'Back' },
                    { name: 'Leg Press', sets: 4, reps: 12, target: 'Legs' },
                    { name: 'Leg Extensions', sets: 3, reps: 15, target: 'Quadriceps' },
                    { name: 'Hamstring Curls', sets: 3, reps: 15, target: 'Hamstrings' },
                    { name: 'Goblet Squats', sets: 3, reps: 12, target: 'Legs' },
                ],
                Day3: [
                    { name: '30-Minute Jog', sets: 1, reps: '30 min', target: 'Cardio' },
                    { name: 'High-Intensity Sprints', sets: 8, reps: '30 sec', target: 'Cardio' },
                    { name: 'Plank Holds', sets: 3, reps: '1 min', target: 'Core' },
                    { name: 'Russian Twists', sets: 3, reps: 20, target: 'Core' },
                    { name: 'Mountain Climbers', sets: 3, reps: 30, target: 'Core' },
                ],
            },
        },
        FourDay: {
            'Upper-Lower Split': {
                Day1: [
                    { name: 'Bench Press', sets: 4, reps: 10, target: 'Chest' },
                    { name: 'Overhead Press', sets: 3, reps: 10, target: 'Shoulders' },
                    { name: 'Pull-ups', sets: 3, reps: 8, target: 'Back' },
                    { name: 'Dumbbell Rows', sets: 3, reps: 10, target: 'Back' },
                    { name: 'Barbell Curls', sets: 3, reps: 12, target: 'Biceps' },
                    { name: 'Tricep Dips', sets: 3, reps: 12, target: 'Triceps' },
                ],
                Day2: [
                    { name: 'Squats', sets: 4, reps: 12, target: 'Legs' },
                    { name: 'Deadlifts', sets: 4, reps: 8, target: 'Back/Legs' },
                    { name: 'Leg Press', sets: 4, reps: 10, target: 'Legs' },
                    { name: 'Hamstring Curls', sets: 3, reps: 12, target: 'Hamstrings' },
                    { name: 'Calf Raises', sets: 3, reps: 15, target: 'Calves' },
                    { name: 'Plank', sets: 3, reps: '1 min', target: 'Core' },
                ],
                Day3: [
                    { name: 'Incline Dumbbell Press', sets: 4, reps: 10, target: 'Chest' },
                    { name: 'Flat Bench Press', sets: 3, reps: 10, target: 'Chest' },
                    { name: 'Lateral Raises', sets: 3, reps: 12, target: 'Shoulders' },
                    { name: 'Front Raises', sets: 3, reps: 12, target: 'Shoulders' },
                    { name: 'Skull Crushers', sets: 3, reps: 12, target: 'Triceps' },
                    { name: 'Tricep Pushdowns', sets: 3, reps: 12, target: 'Triceps' },
                ],
                Day4: [
                    { name: 'Front Squats', sets: 4, reps: 10, target: 'Legs' },
                    { name: 'Romanian Deadlifts', sets: 4, reps: 10, target: 'Hamstrings' },
                    { name: 'Bulgarian Split Squats', sets: 3, reps: 10, target: 'Legs' },
                    { name: 'Pull-ups', sets: 3, reps: 8, target: 'Back' },
                    { name: 'Barbell Rows', sets: 4, reps: 10, target: 'Back' },
                    { name: 'Goblet Squats', sets: 3, reps: 12, target: 'Legs' },
                ],
            },
            'Push-Pull-Legs': {
                Day1: [
                    { name: 'Incline Bench Press', sets: 4, reps: 10, target: 'Chest' },
                    { name: 'Dumbbell Flys', sets: 3, reps: 12, target: 'Chest' },
                    { name: 'Overhead Press', sets: 3, reps: 10, target: 'Shoulders' },
                    { name: 'Tricep Dips', sets: 3, reps: 12, target: 'Triceps' },
                    { name: 'Front Raises', sets: 3, reps: 15, target: 'Shoulders' },
                ],
                Day2: [
                    { name: 'Pull-ups', sets: 3, reps: 10, target: 'Back' },
                    { name: 'Barbell Rows', sets: 4, reps: 10, target: 'Back' },
                    { name: 'Face Pulls', sets: 3, reps: 15, target: 'Shoulders' },
                    { name: 'Hammer Curls', sets: 3, reps: 12, target: 'Biceps' },
                    { name: 'Barbell Shrugs', sets: 3, reps: 15, target: 'Traps' },
                ],
                Day3: [
                    { name: 'Back Squats', sets: 4, reps: 12, target: 'Legs' },
                    { name: 'Romanian Deadlifts', sets: 4, reps: 10, target: 'Hamstrings' },
                    { name: 'Leg Press', sets: 4, reps: 12, target: 'Legs' },
                    { name: 'Walking Lunges', sets: 3, reps: '20 steps', target: 'Legs' },
                    { name: 'Calf Raises', sets: 3, reps: 15, target: 'Calves' },
                ],
                Day4: [
                    { name: 'Flat Bench Press', sets: 4, reps: 10, target: 'Chest' },
                    { name: 'Chin-ups', sets: 3, reps: 8, target: 'Back' },
                    { name: 'Dumbbell Shoulder Press', sets: 3, reps: 12, target: 'Shoulders' },
                    { name: 'Barbell Curls', sets: 3, reps: 12, target: 'Biceps' },
                    { name: 'Tricep Pushdowns', sets: 3, reps: 12, target: 'Triceps' },
                    { name: 'Cable Rows', sets: 3, reps: 12, target: 'Back' },
                ],
            },
            'Upper-Lower with Focus on Volume': {
                Day1: [
                    { name: 'Bench Press', sets: 4, reps: 10, target: 'Chest' },
                    { name: 'Dumbbell Flys', sets: 3, reps: 12, target: 'Chest' },
                    { name: 'Overhead Press', sets: 3, reps: 10, target: 'Shoulders' },
                    { name: 'Lateral Raises', sets: 3, reps: 12, target: 'Shoulders' },
                    { name: 'Tricep Pushdowns', sets: 3, reps: 12, target: 'Triceps' },
                    { name: 'Tricep Dips', sets: 3, reps: 12, target: 'Triceps' },
                ],
                Day2: [
                    { name: 'Squats', sets: 4, reps: 12, target: 'Legs' },
                    { name: 'Deadlifts', sets: 4, reps: 8, target: 'Back/Legs' },
                    { name: 'Leg Press', sets: 4, reps: 10, target: 'Legs' },
                    { name: 'Bulgarian Split Squats', sets: 3, reps: 10, target: 'Legs' },
                    { name: 'Calf Raises', sets: 3, reps: 15, target: 'Calves' },
                ],
                Day3: [
                    { name: 'Pull-ups', sets: 3, reps: 10, target: 'Back' },
                    { name: 'Barbell Rows', sets: 4, reps: 10, target: 'Back' },
                    { name: 'Seated Cable Rows', sets: 3, reps: 12, target: 'Back' },
                    { name: 'Barbell Curls', sets: 3, reps: 12, target: 'Biceps' },
                    { name: 'Hammer Curls', sets: 3, reps: 12, target: 'Biceps' },
                ],
                Day4: [
                    { name: 'Front Squats', sets: 4, reps: 10, target: 'Legs' },
                    { name: 'Romanian Deadlifts', sets: 4, reps: 10, target: 'Hamstrings' },
                    { name: 'Walking Lunges', sets: 3, reps: '20 steps', target: 'Legs' },
                    { name: 'Leg Extensions', sets: 3, reps: 12, target: 'Quadriceps' },
                    { name: 'Ab Rollouts', sets: 3, reps: 15, target: 'Core' },
                ],
            },
        },
        FiveDay: {
            'Push-Pull-Legs': {
                Day1: [
                    { name: 'Incline Bench Press', sets: 4, reps: 10, target: 'Chest' },
                    { name: 'Overhead Press', sets: 3, reps: 10, target: 'Shoulders' },
                    { name: 'Dumbbell Lateral Raises', sets: 3, reps: 12, target: 'Shoulders' },
                    { name: 'Tricep Dips', sets: 3, reps: 12, target: 'Triceps' },
                    { name: 'Front Raises', sets: 3, reps: 15, target: 'Shoulders' },
                ],
                Day2: [
                    { name: 'Pull-ups', sets: 3, reps: 10, target: 'Back' },
                    { name: 'Barbell Rows', sets: 4, reps: 10, target: 'Back' },
                    { name: 'Face Pulls', sets: 3, reps: 15, target: 'Shoulders' },
                    { name: 'Hammer Curls', sets: 3, reps: 12, target: 'Biceps' },
                    { name: 'Barbell Shrugs', sets: 3, reps: 15, target: 'Traps' },
                ],
                Day3: [
                    { name: 'Back Squats', sets: 4, reps: 12, target: 'Legs' },
                    { name: 'Romanian Deadlifts', sets: 4, reps: 10, target: 'Hamstrings' },
                    { name: 'Leg Press', sets: 4, reps: 12, target: 'Legs' },
                    { name: 'Walking Lunges', sets: 3, reps: '20 steps', target: 'Legs' },
                    { name: 'Calf Raises', sets: 3, reps: 15, target: 'Calves' },
                ],
                Day4: [
                    { name: 'Flat Bench Press', sets: 4, reps: 10, target: 'Chest' },
                    { name: 'Chest Flys', sets: 3, reps: 12, target: 'Chest' },
                    { name: 'Barbell Curls', sets: 3, reps: 12, target: 'Biceps' },
                    { name: 'Tricep Pushdowns', sets: 3, reps: 12, target: 'Triceps' },
                    { name: 'Lateral Raises', sets: 3, reps: 15, target: 'Shoulders' },
                ],
                Day5: [
                    { name: 'Deadlifts', sets: 4, reps: 8, target: 'Back' },
                    { name: 'Pull-ups', sets: 3, reps: 10, target: 'Back' },
                    { name: 'Seated Cable Rows', sets: 3, reps: 12, target: 'Back' },
                    { name: 'Leg Extensions', sets: 3, reps: 15, target: 'Quadriceps' },
                    { name: 'Hamstring Curls', sets: 3, reps: 15, target: 'Hamstrings' },
                ],
            },
            'Upper-Lower Split': {
                Day1: [
                    { name: 'Bench Press', sets: 4, reps: 10, target: 'Chest' },
                    { name: 'Dumbbell Rows', sets: 4, reps: 12, target: 'Back' },
                    { name: 'Overhead Press', sets: 3, reps: 10, target: 'Shoulders' },
                    { name: 'Incline Flys', sets: 3, reps: 12, target: 'Chest' },
                    { name: 'Barbell Curls', sets: 3, reps: 12, target: 'Biceps' },
                ],
                Day2: [
                    { name: 'Squats', sets: 4, reps: 12, target: 'Legs' },
                    { name: 'Leg Press', sets: 4, reps: 12, target: 'Legs' },
                    { name: 'Hamstring Curls', sets: 3, reps: 15, target: 'Hamstrings' },
                    { name: 'Calf Raises', sets: 3, reps: 15, target: 'Calves' },
                    { name: 'Leg Extensions', sets: 3, reps: 15, target: 'Quadriceps' },
                ],
                Day3: [
                    { name: 'Flat Bench Press', sets: 4, reps: 10, target: 'Chest' },
                    { name: 'Chest Flys', sets: 3, reps: 12, target: 'Chest' },
                    { name: 'Tricep Dips', sets: 3, reps: 12, target: 'Triceps' },
                    { name: 'Lateral Raises', sets: 3, reps: 12, target: 'Shoulders' },
                    { name: 'Skull Crushers', sets: 3, reps: 12, target: 'Triceps' },
                ],
                Day4: [
                    { name: 'Back Squats', sets: 4, reps: 12, target: 'Legs' },
                    { name: 'Romanian Deadlifts', sets: 4, reps: 10, target: 'Hamstrings' },
                    { name: 'Walking Lunges', sets: 3, reps: '20 steps', target: 'Legs' },
                    { name: 'Goblet Squats', sets: 3, reps: 12, target: 'Legs' },
                    { name: 'Seated Calf Raises', sets: 3, reps: 15, target: 'Calves' },
                ],
                Day5: [
                    { name: 'Pull-ups', sets: 4, reps: 8, target: 'Back' },
                    { name: 'Barbell Rows', sets: 4, reps: 10, target: 'Back' },
                    { name: 'Face Pulls', sets: 3, reps: 12, target: 'Shoulders' },
                    { name: 'Hammer Curls', sets: 3, reps: 12, target: 'Biceps' },
                    { name: 'Shrugs', sets: 3, reps: 15, target: 'Traps' },
                ],
            },
            'Bro Split': {
                Day1: [
                    { name: 'Flat Bench Press', sets: 4, reps: 10, target: 'Chest' },
                    { name: 'Incline Dumbbell Press', sets: 4, reps: 12, target: 'Chest' },
                    { name: 'Chest Flys', sets: 3, reps: 12, target: 'Chest' },
                    { name: 'Tricep Pushdowns', sets: 3, reps: 12, target: 'Triceps' },
                    { name: 'Dips', sets: 3, reps: 10, target: 'Triceps' },
                ],
                Day2: [
                    { name: 'Barbell Rows', sets: 4, reps: 10, target: 'Back' },
                    { name: 'Pull-ups', sets: 3, reps: 10, target: 'Back' },
                    { name: 'Lat Pulldowns', sets: 3, reps: 12, target: 'Back' },
                    { name: 'Face Pulls', sets: 3, reps: 15, target: 'Shoulders' },
                    { name: 'Shrugs', sets: 3, reps: 12, target: 'Traps' },
                ],
                Day3: [
                    { name: 'Squats', sets: 4, reps: 12, target: 'Legs' },
                    { name: 'Romanian Deadlifts', sets: 4, reps: 10, target: 'Hamstrings' },
                    { name: 'Leg Extensions', sets: 3, reps: 15, target: 'Quadriceps' },
                    { name: 'Goblet Squats', sets: 3, reps: 12, target: 'Legs' },
                    { name: 'Calf Raises', sets: 3, reps: 15, target: 'Calves' },
                ],
                Day4: [
                    { name: 'Overhead Press', sets: 4, reps: 10, target: 'Shoulders' },
                    { name: 'Lateral Raises', sets: 3, reps: 12, target: 'Shoulders' },
                    { name: 'Dumbbell Front Raises', sets: 3, reps: 15, target: 'Shoulders' },
                    { name: 'Barbell Curls', sets: 3, reps: 12, target: 'Biceps' },
                    { name: 'Preacher Curls', sets: 3, reps: 12, target: 'Biceps' },
                ],
                Day5: [
                    { name: 'Deadlifts', sets: 4, reps: 8, target: 'Back' },
                    { name: 'Seated Rows', sets: 3, reps: 12, target: 'Back' },
                    { name: 'Hamstring Curls', sets: 3, reps: 15, target: 'Hamstrings' },
                    { name: 'Dumbbell Shrugs', sets: 3, reps: 12, target: 'Traps' },
                    { name: 'Barbell Curls', sets: 3, reps: 12, target: 'Biceps' },
                ],
            },
            'Full-Body with Accessories': {
                Day1: [
                    { name: 'Squats', sets: 4, reps: 12, target: 'Legs' },
                    { name: 'Bench Press', sets: 4, reps: 10, target: 'Chest' },
                    { name: 'Barbell Rows', sets: 4, reps: 10, target: 'Back' },
                    { name: 'Overhead Press', sets: 3, reps: 12, target: 'Shoulders' },
                    { name: 'Planks', sets: 3, reps: '1 min', target: 'Core' },
                ],
                Day2: [
                    { name: 'Deadlifts', sets: 4, reps: 8, target: 'Back' },
                    { name: 'Leg Press', sets: 4, reps: 12, target: 'Legs' },
                    { name: 'Incline Dumbbell Press', sets: 4, reps: 12, target: 'Chest' },
                    { name: 'Chin-ups', sets: 3, reps: 8, target: 'Back' },
                    { name: 'Leg Curls', sets: 3, reps: 15, target: 'Hamstrings' },
                ],
                Day3: [
                    { name: 'Front Squats', sets: 4, reps: 10, target: 'Legs' },
                    { name: 'Incline Bench Press', sets: 4, reps: 12, target: 'Chest' },
                    { name: 'Pull-ups', sets: 3, reps: 8, target: 'Back' },
                    { name: 'Farmer’s Walk', sets: 3, reps: '30m', target: 'Grip/Full Body' },
                    { name: 'Dumbbell Lateral Raises', sets: 3, reps: 12, target: 'Shoulders' },
                ],
                Day4: [
                    { name: 'Romanian Deadlifts', sets: 4, reps: 10, target: 'Hamstrings' },
                    { name: 'Overhead Press', sets: 3, reps: 10, target: 'Shoulders' },
                    { name: 'Chest Flys', sets: 3, reps: 12, target: 'Chest' },
                    { name: 'Barbell Shrugs', sets: 3, reps: 12, target: 'Traps' },
                    { name: 'Core Twists', sets: 3, reps: 20, target: 'Core' },
                ],
                Day5: [
                    { name: 'Deadlifts', sets: 4, reps: 8, target: 'Back' },
                    { name: 'Dips', sets: 3, reps: 12, target: 'Chest' },
                    { name: 'Hamstring Curls', sets: 3, reps: 15, target: 'Hamstrings' },
                    { name: 'Shrugs', sets: 3, reps: 12, target: 'Traps' },
                    { name: 'Leg Extensions', sets: 3, reps: 15, target: 'Quadriceps' },
                ],
            },
        },
        SixDay: {
            'Push-Pull-Legs': {
                Day1: [
                    { name: 'Incline Bench Press', sets: 4, reps: '8 - 10', target: 'Chest' },
                    { name: 'Flat Bench Press', sets: 4, reps: '8 - 10', target: 'Chest' },
                    { name: 'Overhead Shoulder Press', sets: 3, reps: '8 - 10', target: 'Shoulders' },
                    { name: 'Lateral Raises', sets: 3, reps: 12, target: 'Shoulders' },
                    { name: 'Tricep Dips', sets: 3, reps: 12, target: 'Triceps' },
                    { name: 'Skull Crushers', sets: 3, reps: 12, target: 'Triceps' },
                ],
                Day2: [
                    { name: 'Pull-ups', sets: 4, reps: '8 - 10', target: 'Back' },
                    { name: 'Barbell Rows', sets: 4, reps: '8 - 10', target: 'Back' },
                    { name: 'Lat Pulldowns', sets: 3, reps: 12, target: 'Back' },
                    { name: 'Face Pulls', sets: 3, reps: 15, target: 'Shoulders' },
                    { name: 'Barbell Shrugs', sets: 3, reps: 12, target: 'Traps' },
                    { name: 'Bicep Curls', sets: 3, reps: 12, target: 'Biceps' },
                ],
                Day3: [
                    { name: 'Squats', sets: 4, reps: '8 - 10', target: 'Legs' },
                    { name: 'Romanian Deadlifts', sets: 4, reps: 10, target: 'Hamstrings' },
                    { name: 'Leg Press', sets: 4, reps: 10, target: 'Legs' },
                    { name: 'Walking Lunges', sets: 3, reps: 12, target: 'Legs' },
                    { name: 'Calf Raises', sets: 3, reps: 15, target: 'Calves' },
                ],
                Day4: [
                    { name: 'Flat Bench Press', sets: 4, reps: '8 - 10', target: 'Chest' },
                    { name: 'Incline Dumbbell Press', sets: 4, reps: 10, target: 'Chest' },
                    { name: 'Arnold Press', sets: 3, reps: 12, target: 'Shoulders' },
                    { name: 'Tricep Pushdowns', sets: 3, reps: 12, target: 'Triceps' },
                    { name: 'Dumbbell Front Raises', sets: 3, reps: 12, target: 'Shoulders' },
                ],
                Day5: [
                    { name: 'Deadlifts', sets: 4, reps: '6 - 8', target: 'Back/Legs' },
                    { name: 'T-Bar Rows', sets: 4, reps: 10, target: 'Back' },
                    { name: 'Seated Cable Rows', sets: 3, reps: 12, target: 'Back' },
                    { name: 'Barbell Curls', sets: 3, reps: 12, target: 'Biceps' },
                    { name: 'Hammer Curls', sets: 3, reps: 12, target: 'Biceps' },
                ],
                Day6: [
                    { name: 'Front Squats', sets: 4, reps: '8 - 10', target: 'Legs' },
                    { name: 'Leg Curls', sets: 3, reps: 12, target: 'Hamstrings' },
                    { name: 'Leg Extensions', sets: 3, reps: 12, target: 'Quadriceps' },
                    { name: 'Walking Lunges', sets: 3, reps: '20 steps', target: 'Legs' },
                    { name: 'Calf Raises', sets: 3, reps: 15, target: 'Calves' },
                ],
            },
            'Upper-Lower Split': {
                Day1: [
                    { name: 'Barbell Bench Press', sets: 4, reps: '8 - 10', target: 'Chest' },
                    { name: 'Incline Dumbbell Press', sets: 3, reps: '8 - 10', target: 'Chest' },
                    { name: 'Overhead Press', sets: 3, reps: '8 - 10', target: 'Shoulders' },
                    { name: 'Lateral Raises', sets: 3, reps: 12, target: 'Shoulders' },
                    { name: 'Tricep Dips', sets: 3, reps: 10, target: 'Triceps' },
                ],
                Day2: [
                    { name: 'Squats', sets: 4, reps: '8 - 10', target: 'Legs' },
                    { name: 'Leg Press', sets: 4, reps: 10, target: 'Legs' },
                    { name: 'Romanian Deadlifts', sets: 4, reps: 10, target: 'Hamstrings' },
                    { name: 'Calf Raises', sets: 4, reps: 15, target: 'Calves' },
                    { name: 'Leg Extensions', sets: 3, reps: 12, target: 'Quadriceps' },
                ],
                Day3: [
                    { name: 'Pull-ups', sets: 4, reps: '8 - 10', target: 'Back' },
                    { name: 'Barbell Rows', sets: 4, reps: '8 - 10', target: 'Back' },
                    { name: 'Lat Pulldowns', sets: 3, reps: 10, target: 'Back' },
                    { name: 'Seated Cable Rows', sets: 3, reps: 12, target: 'Back' },
                    { name: 'Barbell Curls', sets: 3, reps: 12, target: 'Biceps' },
                ],
                Day4: [
                    { name: 'Flat Bench Press', sets: 4, reps: '8 - 10', target: 'Chest' },
                    { name: 'Incline Dumbbell Press', sets: 4, reps: 10, target: 'Chest' },
                    { name: 'Dumbbell Shoulder Press', sets: 3, reps: 10, target: 'Shoulders' },
                    { name: 'Tricep Pushdowns', sets: 3, reps: 12, target: 'Triceps' },
                    { name: 'Front Raises', sets: 3, reps: 12, target: 'Shoulders' },
                ],
                Day5: [
                    { name: 'Deadlifts', sets: 4, reps: '6 - 8', target: 'Back/Legs' },
                    { name: 'Barbell Rows', sets: 4, reps: '8 - 10', target: 'Back' },
                    { name: 'Pull-ups', sets: 3, reps: '8 - 10', target: 'Back' },
                    { name: 'Hammer Curls', sets: 3, reps: 12, target: 'Biceps' },
                    { name: 'Barbell Shrugs', sets: 3, reps: 15, target: 'Traps' },
                ],
                Day6: [
                    { name: 'Front Squats', sets: 4, reps: '8 - 10', target: 'Legs' },
                    { name: 'Leg Curls', sets: 3, reps: 12, target: 'Hamstrings' },
                    { name: 'Walking Lunges', sets: 3, reps: '20 steps', target: 'Legs' },
                    { name: 'Leg Extensions', sets: 3, reps: 12, target: 'Quadriceps' },
                    { name: 'Calf Raises', sets: 3, reps: 15, target: 'Calves' },
                ],
            },
            'Bodybuilding Split': {
                Day1: [
                    { name: 'Flat Bench Press', sets: 4, reps: '8 - 10', target: 'Chest' },
                    { name: 'Incline Dumbbell Press', sets: 4, reps: '8 - 10', target: 'Chest' },
                    { name: 'Overhead Shoulder Press', sets: 3, reps: 10, target: 'Shoulders' },
                    { name: 'Lateral Raises', sets: 3, reps: 12, target: 'Shoulders' },
                    { name: 'Tricep Dips', sets: 3, reps: 10, target: 'Triceps' },
                ],
                Day2: [
                    { name: 'Deadlifts', sets: 4, reps: '6 - 8', target: 'Back' },
                    { name: 'T-Bar Rows', sets: 4, reps: 10, target: 'Back' },
                    { name: 'Lat Pulldowns', sets: 4, reps: 10, target: 'Back' },
                    { name: 'Barbell Curls', sets: 3, reps: 12, target: 'Biceps' },
                    { name: 'Hammer Curls', sets: 3, reps: 12, target: 'Biceps' },
                ],
                Day3: [
                    { name: 'Squats', sets: 4, reps: '8 - 10', target: 'Legs' },
                    { name: 'Leg Press', sets: 4, reps: 10, target: 'Legs' },
                    { name: 'Romanian Deadlifts', sets: 4, reps: 10, target: 'Hamstrings' },
                    { name: 'Calf Raises', sets: 3, reps: 15, target: 'Calves' },
                    { name: 'Leg Extensions', sets: 3, reps: 12, target: 'Quadriceps' },
                ],
                Day4: [
                    { name: 'Incline Bench Press', sets: 4, reps: '8 - 10', target: 'Chest' },
                    { name: 'Flat Dumbbell Press', sets: 4, reps: 10, target: 'Chest' },
                    { name: 'Arnold Press', sets: 3, reps: 10, target: 'Shoulders' },
                    { name: 'Front Raises', sets: 3, reps: 12, target: 'Shoulders' },
                    { name: 'Tricep Pushdowns', sets: 3, reps: 12, target: 'Triceps' },
                ],
                Day5: [
                    { name: 'Deadlifts', sets: 4, reps: '6 - 8', target: 'Back' },
                    { name: 'Pull-ups', sets: 4, reps: 10, target: 'Back' },
                    { name: 'Barbell Rows', sets: 3, reps: '8 - 10', target: 'Back' },
                    { name: 'Barbell Curls', sets: 3, reps: 12, target: 'Biceps' },
                    { name: 'Dumbbell Curls', sets: 3, reps: 12, target: 'Biceps' },
                ],
                Day6: [
                    { name: 'Leg Extensions', sets: 4, reps: 12, target: 'Quadriceps' },
                    { name: 'Leg Curls', sets: 4, reps: 12, target: 'Hamstrings' },
                    { name: 'Walking Lunges', sets: 3, reps: 20, target: 'Legs' },
                    { name: 'Goblet Squats', sets: 3, reps: 12, target: 'Legs' },
                    { name: 'Calf Raises', sets: 3, reps: 15, target: 'Calves' },
                ],
            },
        },
        SevenDay: {
            '7-Day Split': {
                Day1: [
                    { name: 'Flat Bench Press', sets: 4, reps: '8-10', target: 'Chest' },
                    { name: 'Incline Dumbbell Press', sets: 4, reps: '8-10', target: 'Chest' },
                    { name: 'Chest Flys', sets: 3, reps: 12, target: 'Chest' },
                    { name: 'Overhead Shoulder Press', sets: 3, reps: '8-10', target: 'Shoulders' },
                    { name: 'Lateral Raises', sets: 3, reps: 12, target: 'Shoulders' },
                    { name: 'Tricep Dips', sets: 3, reps: '10-12', target: 'Triceps' },
                ],
                Day2: [
                    { name: 'Pull-ups', sets: 4, reps: '8-10', target: 'Back' },
                    { name: 'Barbell Rows', sets: 4, reps: '8-10', target: 'Back' },
                    { name: 'Lat Pulldowns', sets: 3, reps: 10, target: 'Back' },
                    { name: 'Seated Cable Rows', sets: 3, reps: 12, target: 'Back' },
                    { name: 'Barbell Shrugs', sets: 3, reps: 12, target: 'Traps' },
                    { name: 'Bicep Curls', sets: 3, reps: 12, target: 'Biceps' },
                ],
                Day3: [
                    { name: 'Squats', sets: 4, reps: '8-10', target: 'Legs' },
                    { name: 'Leg Press', sets: 4, reps: 10, target: 'Legs' },
                    { name: 'Romanian Deadlifts', sets: 4, reps: 10, target: 'Hamstrings' },
                    { name: 'Walking Lunges', sets: 3, reps: 12, target: 'Legs' },
                    { name: 'Leg Curls', sets: 3, reps: 12, target: 'Hamstrings' },
                    { name: 'Calf Raises', sets: 4, reps: 15, target: 'Calves' },
                ],
                Day4: [
                    { name: 'Incline Bench Press', sets: 4, reps: '8-10', target: 'Chest' },
                    { name: 'Flat Dumbbell Press', sets: 4, reps: '8-10', target: 'Chest' },
                    { name: 'Chest Flys', sets: 3, reps: 12, target: 'Chest' },
                    { name: 'Dumbbell Shoulder Press', sets: 3, reps: '8-10', target: 'Shoulders' },
                    { name: 'Arnold Press', sets: 3, reps: 10, target: 'Shoulders' },
                    { name: 'Tricep Pushdowns', sets: 3, reps: 12, target: 'Triceps' },
                ],
                Day5: [
                    { name: 'Deadlifts', sets: 4, reps: '6-8', target: 'Back/Legs' },
                    { name: 'T-Bar Rows', sets: 4, reps: '8-10', target: 'Back' },
                    { name: 'Lat Pulldowns', sets: 4, reps: 10, target: 'Back' },
                    { name: 'Barbell Rows', sets: 3, reps: 10, target: 'Back' },
                    { name: 'Bicep Curls', sets: 3, reps: 12, target: 'Biceps' },
                    { name: 'Hammer Curls', sets: 3, reps: 12, target: 'Biceps' },
                ],
                Day6: [
                    { name: 'Front Squats', sets: 4, reps: '8-10', target: 'Legs' },
                    { name: 'Leg Curls', sets: 3, reps: 12, target: 'Hamstrings' },
                    { name: 'Leg Extensions', sets: 3, reps: 12, target: 'Quadriceps' },
                    { name: 'Goblet Squats', sets: 3, reps: 12, target: 'Legs' },
                    { name: 'Walking Lunges', sets: 3, reps: 20, target: 'Legs' },
                    { name: 'Calf Raises', sets: 4, reps: 15, target: 'Calves' },
                ],
                Day7: [
                    { name: 'Chest Flys', sets: 4, reps: 12, target: 'Chest' },
                    { name: 'Flat Bench Press', sets: 4, reps: '8-10', target: 'Chest' },
                    { name: 'Incline Dumbbell Press', sets: 4, reps: '8-10', target: 'Chest' },
                    { name: 'Dumbbell Shoulder Press', sets: 3, reps: '8-10', target: 'Shoulders' },
                    { name: 'Side Lateral Raises', sets: 3, reps: 12, target: 'Shoulders' },
                    { name: 'Tricep Dips', sets: 3, reps: '10-12', target: 'Triceps' },
                ],
            },
        },
    };

    const [selectedProgram, setSelectedProgram] = useState(null);
    const [selectedWorkout, setSelectedWorkout] = useState(null);

    const handleProgramSelect = (program) => {
        setSelectedProgram(program);
        setSelectedWorkout(null); // Reset workout when program changes
    };

    const handleWorkoutSelect = (workoutName) => {
        setSelectedWorkout({
            name: workoutName,
            details: workoutData[selectedProgram][workoutName],
        });
    };

    return (
        <div className="premade-container">
            {/* Program Selection */}
            <div className="program-options">
                {Object.keys(workoutData).map((program) => (
                    <button
                        key={program}
                        className={`program-button ${selectedProgram === program ? 'active' : ''}`}
                        onClick={() => handleProgramSelect(program)}
                    >
                        {program.replace(/Day/g, ' Day')} Programs
                    </button>
                ))}
            </div>

            {/* Workout Options */}
            {selectedProgram && (
                <div className="workout-options">
                    <h2>{selectedProgram.replace(/Day/g, ' Day')} Workouts</h2>
                    {Object.keys(workoutData[selectedProgram]).map((workoutName) => (
                        <button
                            key={workoutName}
                            className={`workout-button ${selectedWorkout?.name === workoutName ? 'active' : ''}`}
                            onClick={() => handleWorkoutSelect(workoutName)}
                        >
                            {workoutName}
                        </button>
                    ))}
                </div>
            )}

            {/* Display Workout Details in Table */}
            {selectedWorkout && selectedWorkout.details && (
                <div className="workout-details">
                    <h2>{selectedWorkout.name}</h2>
                    {Object.entries(selectedWorkout.details).map(([day, exercises]) => (
                        <div className="day-section" key={day}>
                            <h3 className="day-title">{day}</h3>
                            <table className="exercise-table">
                                <thead>
                                    <tr>
                                        <th>Exercise</th>
                                        <th>Sets</th>
                                        <th>Reps</th>
                                        <th>Target Muscle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {exercises.map(({ name, sets, reps, target }) => (
                                        <tr key={name}>
                                            <td>{name}</td>
                                            <td>{sets}</td>
                                            <td>{reps}</td>
                                            <td>{target}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PreMade;