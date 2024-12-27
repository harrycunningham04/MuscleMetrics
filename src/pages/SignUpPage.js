import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Logo from '../images/MuscleMetricLogo.jpg';
import Footer from '../components/Footer';
import '../styles/styles.css';

import '@fortawesome/fontawesome-free/css/all.min.css';

const SignUpPage = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        dob: '',
        gender: 'male',
        height: '',
        weight: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [progress, setProgress] = useState(0);

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

    const getProgressColor = () => {
        if (progress < 50) return 'red';
        if (progress < 75) return 'orange';
        return 'green';
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

    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const isValidDOB = (dob) => {
        const today = new Date();
        const birthDate = new Date(dob);
        const minAge = 13;
        const age = today.getFullYear() - birthDate.getFullYear();
        return birthDate < today && age >= minAge;
    };

    const isValidName = (name) => /^[A-Za-z\s]{3,}$/.test(name);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        calculateProgress({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccessMessage('');

        if (!isValidName(formData.name)) {
            setError('Name must be at least 3 characters long and contain only letters and spaces.');
            return;
        }
        if (!formData.gender) {
            setError('Please select your gender.');
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
            const response = await axios.post('https://hc920.brighton.domains/muscleMetric/php/signup.php', formData, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (response.data.success) {
                setSuccessMessage('Sign up successful!');
                setTimeout(() => navigate('/'), 2000);
            } else {
                setError(response.data.message || 'An error occurred during sign up.');
            }
        } catch (err) {
            console.error('Error:', err);
            if (err.response) {
                setError(`Server error: ${err.response.data.message || err.response.statusText}`);
            } else if (err.request) {
                setError('No response from server. Please check your network connection and try again.');
            } else {
                setError('Error setting up the request. Please try again.');
            }
        }
    };

    return (
        <div className="sign-up-page">
            <header>
                <div className="header-content">
                    <img src={Logo} alt="Muscle Metric Logo" className="header-img" />
                </div>
            </header>
            <main>
                <div className="left-container">
                    <h2>Sign Up</h2>
                    <p>Secure your account by following password guidelines and entering accurate details.</p>
                    <div className="progress-container">
                        <div className="progress-bar" style={{ width: `${progress}%`, backgroundColor: getProgressColor() }}></div>
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
                        <div className="password-container">
                            <input type={showPassword ? 'text' : 'password'} id="password" name="password" required value={formData.password} onChange={handleChange} />
                            <button type="button" className='password-toggle-button' onClick={() => setShowPassword(!showPassword)}>
                                <i className={showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}> </i>
                            </button>
                        </div>

                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <div className="password-container">
                            <input type={showPassword ? 'text' : 'password'} id="confirmPassword" name="confirmPassword" required value={formData.confirmPassword} onChange={handleChange} />
                            <button
                                type="button"
                                className="password-toggle-button"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                <i className={showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
                            </button>
                        </div>

                        {error && <p className="error-message">{error}</p>}
                        {successMessage && <p className="success-message">{successMessage}</p>}

                        <input type="submit" value="Sign Up" />
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default SignUpPage;