import React, { useState } from 'react';
import MuscleMetricLogo from '../images/MuscleMetricLogo.jpg';

import Modal from './ModalUser';
import '../styles/styles.css';

const Header = ({ userInfo }) => {

    const [isModalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    const name = userInfo?.userInfo?.name || 'User';

    return (
        <div className="header-container">
            <div className="header-content">
                <img src={MuscleMetricLogo} alt="Muscle Metric Logo" className="header-img" />
            </div>
            <div className="header-right">
                <div className="circle" onClick={toggleModal} style={{ cursor: 'pointer' }}>
                    {name.charAt(0).toUpperCase()}
                </div>
                <h1 className="header-title" onClick={toggleModal} style={{ cursor: 'pointer' }}>{name}</h1>
            </div>
            <Modal
                isOpen={isModalOpen}
                onClose={toggleModal}
                userInfo={userInfo}
            />
        </div>
    );
};

export default Header;

