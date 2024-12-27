import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../styles/styles.css';

const LoginModal = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    console.log("Form values:", values);

    const handleLoginClick = async (e) => {
        e.preventDefault();

        axios.defaults.withCredentials = true;
        try {
            const { email, password } = values;
            const res = await axios.post('https://hc920.brighton.domains/muscleMetric/php/login.php', { email, password }, { withCredentials: true });

            if (res.data.success) {
                onClose();
            } else {
                alert("Invalid email or password");
            }
        } catch (err) {
            console.error("Error during login:", err);
            alert("An error occurred during login. Please try again.");
        };
        window.location.reload();
    };

    const handleSignUpClick = () => {
        onClose();
        navigate('/SignUpPage');
    };

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <span className="close-button" onClick={onClose}>&times;</span>
                <h2 className="modal-title">Login</h2>
                <form id="loginForm" className="modal-form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" name="email" required onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required onChange={handleChange} />
                    </div>
                    <button type="submit" className="modal-submit-btn" onClick={handleLoginClick}>Login</button>
                    <a href='/' className="forgot-password-link">Forgot Password?</a>
                    <hr />
                    <button type="button" className="signup-btn" onClick={handleSignUpClick}>Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default LoginModal;