import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

import Header from './Header';
import Footer from './Footer';
import '../styles.css';

const SignUpPage = () => {
    const navigate = useNavigate(); 
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        dob: '',
        gender: '',
        height: '',
        weight: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [progress, setProgress] = useState(0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        calculateProgress({ ...formData, [name]: value });
    };

    const isValidPassword = (password) => {
        const minLength = /.{8,}/;
        const hasUpper = /[A-Z]/;
        const hasLower = /[a-z]/;
        const hasNumber = /[0-9]/;
        const hasSpecial = /[!@#$%^&*]/;
        return (
            minLength.test(password) &&
            hasUpper.test(password) &&
            hasLower.test(password) &&
            hasNumber.test(password) &&
            hasSpecial.test(password)
        );
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isValidDOB = (dob) => {
        const today = new Date();
        const birthDate = new Date(dob);
        const minAge = 13; 
        const age = today.getFullYear() - birthDate.getFullYear();

        return (
            birthDate < today && 
            age >= minAge 
        );
    };

    const isValidName = (name) => {
        const nameRegex = /^[A-Za-z\s]{3,}$/;
        return nameRegex.test(name);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError('');

        if (!isValidName(formData.name)) {
            setError('Name must be at least 3 characters long and contain only letters and spaces.');
            return;
        }

        if (formData.height < 50 || formData.height > 300) {
            setError('Height must be between 50 and 300 cm.');
            return;
        }
        if (formData.weight < 20 || formData.weight > 300) {
            setError('Weight must be between 20 and 300 kg.');
            return;
        }

        if (!isValidEmail(formData.email)) {
            setError('Please enter a valid email address.');
            return;
        }

        if (!isValidDOB(formData.dob)) {
            setError('Please enter a valid date of birth. You must be at least 13 years old.');
            return;
        }

        if (!isValidPassword(formData.password)) {
            setError(
                'Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character.'
            );
            return;
        }
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                alert(data.message);
                navigate('/UserMain'); 
            } else {
                setError(data.error || 'Error signing up.');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('Error connecting to server.');
        }
    };

    const calculateProgress = (data) => {
        let validFields = 0;
        const totalFields = 8; 

        if (isValidName(data.name)) validFields++;
        if (isValidEmail(data.email)) validFields++;
        if (isValidDOB(data.dob)) validFields++;
        if (data.gender) validFields++; 
        if (data.height >= 50 && data.height <= 300) validFields++;
        if (data.weight >= 20 && data.weight <= 300) validFields++;
        if (isValidPassword(data.password)) validFields++;
        if (data.password && data.password === data.confirmPassword) validFields++;

        setProgress((validFields / totalFields) * 100);
    };

    return (
        <div className="sign-up-page">
            <header>
                <Header />
            </header>
            <main>
                <div className="left-container">
                    <h2>Sign Up</h2>
                    <p>Information about password protection and why it is essential for security, plus steps taken to ensure safety.</p>
                    <div className="progress-container">
                        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                    </div>
                </div>
                <div className="right-container">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />

                        <label htmlFor="dob">Date of Birth:</label>
                        <input type="date" id="dob" name="dob" required value={formData.dob} onChange={handleChange} />

                        <label>Gender:</label>
                        <div className="gender-options">
                            <input type="radio" id="male" name="gender" value="male" onChange={handleChange} />
                            <label htmlFor="male">Male</label>
                            <input type="radio" id="female" name="gender" value="female" onChange={handleChange} />
                            <label htmlFor="female">Female</label>
                            <input type="radio" id="other" name="gender" value="other" onChange={handleChange} />
                            <label htmlFor="other">Other</label>
                        </div>

                        <div className="height-weight-container">
                            <div>
                                <label htmlFor="height">Height (cm):</label>
                                <input type="number" id="height" name="height" required value={formData.height} onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="weight">Weight (kg):</label>
                                <input type="number" id="weight" name="weight" required value={formData.weight} onChange={handleChange} />
                            </div>
                        </div>

                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" required value={formData.password} onChange={handleChange} />

                        <label htmlFor="confirmPassword">Re-enter Password:</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" required value={formData.confirmPassword} onChange={handleChange} />

                        {error && <p className="error-message">{error}</p>}

                        <input type="submit" value="Sign Up" />
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default SignUpPage;
