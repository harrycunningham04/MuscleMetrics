import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

const LoginModal = ({ isOpen, onClose }) => {
    const navigate = useNavigate();

    if (!isOpen) return null;

    const handleLoginClick = (e) => {
        e.preventDefault();
        onClose();  
        navigate('/UserMain');
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
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required />
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
