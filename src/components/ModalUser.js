// Modal.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Modal.css'; 

const ModalUser = ({ isOpen, onClose, userInfo }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        dob: '',
        gender: '',
        height: '',
        weight: '',
        password: '',
    });

    // Populate the form with userInfo if available
    useEffect(() => {
        if (userInfo) {
            const formattedDob = userInfo?.userInfo?.dob
                ? new Date(userInfo.userInfo.dob).toISOString().split('T')[0] 
                : '';
            setFormData({
                name: userInfo?.userInfo?.name || '',
                email: userInfo?.userInfo?.email || '',
                dob: formattedDob,
                gender: userInfo?.userInfo?.gender || '',
                height: userInfo?.userInfo?.height || '',
                weight: userInfo?.userInfo?.weight || '',
                password: '',
            });
        }
    }, [userInfo]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        console.log('Form data being submitted:', formData);
        console.log("Gender received: " . $data['gender']);

    
        axios.post('https://hc920.brighton.domains/muscleMetric/php/update_user.php', formData, { withCredentials: true })
            .then((response) => {
                console.log('Response from server:', response);
                if (response.data.success) {
                    alert('Your profile has been updated!');
                    onClose(); // Close the modal on success
                } else {
                    console.error('Error updating user data:', response.data.message || 'Unknown error');
                    alert('Failed to update your profile. Please try again.');
                }
            })
            .catch((error) => {
                console.error('Error occurred while updating user:', error);
                alert('An error occurred while updating your profile. Please try again.');
            });
    }; 

    const handleLogout = () => {
        axios.post('https://hc920.brighton.domains/muscleMetric/php/logout.php', {}, { withCredentials: true })
            .then(() => {
                console.log('Logout successful');
                window.location.reload(); // Reload the page to reset state
            })
            .catch((error) => {
                console.error('Logout failed:', error);
            });
    };


    if (!isOpen) return null; // Don't render the modal if it's not open

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>User Information</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />

                    <label htmlFor="dob">Date of Birth:</label>
                    <input type="date" id="dob" name="dob" required value={formData.dob} onChange={handleChange} />

                    <label>Gender:</label>
                    <div className="gender-options">
                        <input type="radio" id="male" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} />
                        <label htmlFor="male">Male</label>
                        <input type="radio" id="female" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} />
                        <label htmlFor="female">Female</label>
                        <input type="radio" id="other" name="gender" value="other" checked={formData.gender === 'other'} onChange={handleChange} />
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

                    <button type="submit">Save Changes</button>
                </form>
                <button onClick={handleLogout}>Logout</button>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default ModalUser;