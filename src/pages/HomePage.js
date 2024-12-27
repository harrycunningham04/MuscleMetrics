import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import UserMain from './UserMain';
import Footer from '../components/Footer';
import LoginModal from '../components/LoginModal';
import Panel from '../components/Panel';

import '../styles/styles.css';

import Logo from '../images/MuscleMetricLogo.jpg';
import WelcomeImage from '../images/Welcome.jpg';
import WorkoutPlansImage from '../images/WorkoutPlans.jpg';
import GoalsImage from '../images/Goals.jpg';

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
    const [auth, setAuth] = useState(false);
    const [loading, setLoading] = useState(true);
    const [userInfo, setUserInfo] = useState('');
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const navigate = useNavigate();

    const toggleLoginModal = () => {
        setIsLoginModalOpen(!isLoginModalOpen);
    };

    const handleSignUpClick = () => navigate('/SignUpPage');

    const handleLoginSuccess = (userData) => {
        setAuth(true);
        setUserInfo(userData);
    };

    useScrollFade();

    useEffect(() => {
        axios.get('https://hc920.brighton.domains/muscleMetric/php/verify_user.php', { withCredentials: true })
            .then((res) => {
                if (res.data.success) {
                    setAuth(true);
                    setUserInfo(res.data.user);
                } else {
                    setAuth(false);
                    setUserInfo('');
                }
            })
            .catch((error) => {
                console.error('Error during authentication verification:', error);
                setAuth(false);
                setUserInfo('');
            })
            .finally(() => setLoading(false));
    }, []);

    const handleLogout = () => {
        axios.post('https://hc920.brighton.domains/muscleMetric/php/logout.php', {}, { withCredentials: true })
            .then(() => {
                setAuth(false);
                setUserInfo(null);
            })
            .catch(error => console.error('Logout failed:', error));
    };

    if (loading) {
        return <div className="loader">Loading...</div>;
    }

    return (
        <div>
            {auth ? (
                <UserMain userInfo={userInfo} onLogout={handleLogout} />
            ) : (
                <div>
                    <header>
                        <div className="header-content">
                            <img src={Logo} alt="Muscle Metric Logo" className="header-img" />
                            <div className="buttons">
                                <button className="btn login" onClick={toggleLoginModal}>Login</button>
                                <button onClick={handleSignUpClick} className="btn signup">Sign Up</button>
                            </div>
                        </div>
                    </header>
                    <LoginModal isOpen={isLoginModalOpen} onClose={toggleLoginModal} onLoginSuccess={handleLoginSuccess} />
                    <Panel
                        title="Welcome to Muscle Metric"
                        description="Muscle Metric is your ultimate fitness companion. Whether you're just starting your fitness journey or you're an experienced athlete, we provide tools and resources to help you succeed. From detailed workout plans to advanced progress tracking, our platform is designed to empower you at every step of the way. Discover a community of fitness enthusiasts and unlock your potential with Muscle Metric today."
                        imgSrc={WelcomeImage}
                        reverse={false}
                    />
                    <Panel
                        title="Workout Plans"
                        description="Achieving your fitness goals starts with a well-structured plan. At Muscle Metric, we offer a library of customizable workout plans tailored to your fitness level and specific goals. Whether you’re looking to build muscle, lose weight, or increase endurance, our plans include a diverse range of exercises, complete with video demonstrations and expert tips to keep your routines safe, dynamic, and effective."
                        imgSrc={WorkoutPlansImage}
                        reverse={true}
                    />
                    <Panel
                        title="Goals and Progress Tracking"
                        description="Tracking progress is key to staying motivated and reaching your fitness objectives. Muscle Metric provides powerful tools to monitor your achievements, set benchmarks, and visualize your growth over time. From detailed graphs showing weight lifted to goal completion percentages, we make it easy to understand your journey and celebrate your success every step of the way."
                        imgSrc={GoalsImage}
                        reverse={false}
                    />
                    <footer>
                        <Footer />
                    </footer>
                </div>
            )}
        </div>
    );
};

export default HomePage;
