import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Footer from './Footer';
import LoginModal from './LoginModal';
import Panel from './Panel';
import '../styles.css';

const useScrollFade = () => {
    const handleScroll = () => {
        const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
            if (isInViewport) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
};

const HomePage = () => {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const toggleLoginModal = () => setIsLoginModalOpen(!isLoginModalOpen);

    useScrollFade();

    const navigate = useNavigate();

    const handleSignUpClick = () => {
        navigate('/SignUpPage');
    };

    return (
        <div>
            <header>
                <div className="header-content">
                    <img src='../images/MuscleMetricLogo.jpg' alt="Muscle Metric Logo" className="header-img" />
                    <div className="buttons">
                        <button className="btn login" onClick={toggleLoginModal}>Login</button>
                        <button onClick={handleSignUpClick} className="btn signup">Sign Up</button>
                    </div>
                </div>
            </header>

            <LoginModal isOpen={isLoginModalOpen} onClose={toggleLoginModal} />

            {/* Panel sections */}
            <Panel
                title="Welcome to Muscle Metric"
                description="Your one-stop solution for achieving fitness goals, tracking progress, and accessing personalized workout plans."
                imgSrc="images/MuscleMetricIcon.jpg"
                reverse={false}
            />
            <Panel
                title="Workout Plans"
                description="Explore and create customized workout plans tailored to your fitness level and goals. Muscle Metric offers a variety of exercises to keep your routines dynamic and effective."
                imgSrc="images/MuscleMetricIcon.jpg"
                reverse={true}
            />
            <Panel
                title="Goals and Progress Tracking"
                description="Set your fitness goals and monitor your progress over time. Muscle Metric provides insights with detailed tracking and visualization tools to keep you motivated."
                imgSrc="images/MuscleMetricIcon.jpg"
                reverse={false}
            />

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default HomePage;
