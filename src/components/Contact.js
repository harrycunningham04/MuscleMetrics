import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

import '../styles.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submissionStatus, setSubmissionStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        
        try {
            // Email to you
            await emailjs.sendForm('service_jocxuiy', 'template_507bnuo', e.target, 'bZqbSJh3f7FAiF8tT');
            // Email to the user
            await emailjs.sendForm('service_jocxuiy', 'template_c2elrmi', e.target, 'bZqbSJh3f7FAiF8tT');
            setSubmissionStatus('Your message has been submitted successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setSubmissionStatus('There was an error submitting your message. Please try again later.');
            console.error('EmailJS error:', error);
        }
    };

    return (
        <div className="contact-container">
            <h2>Contact</h2>
            <p>Please fill out the form below and we will get back to you shortly.</p>
            <form onSubmit={sendEmail}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder='Your Name'
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder='email@example.com'
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        placeholder='Your message here'
                        value={formData.message}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            {submissionStatus && <p className="submission-status">{submissionStatus}</p>}
        </div>
    );
};

export default Contact;
