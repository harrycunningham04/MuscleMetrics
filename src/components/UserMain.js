import React, { useState } from 'react';
import Dash from './Dash';
import Search from './Search';
import Workouts from './Workouts';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';
import '../styles.css';

const UserMain = () => {
    const [selectedTab, setSelectedTab] = useState('Dash');

    const renderContent = () => {
        switch (selectedTab) {
            case 'Dash': return <Dash />;
            case 'Workouts': return <Workouts />;
            case 'Search': return <Search />;
            case 'Contact': return <Contact />;
            default: return <Dash />;
        }
    };

    return (
        <div className="main-page">
            <header>
                <Header />
            </header>
            <nav className="top-navigation">
                <button
                    className={selectedTab === 'Dash' ? 'active-tab' : ''}
                    onClick={() => setSelectedTab('Dash')}
                >
                    Dashboard
                </button>
                <button
                    className={selectedTab === 'Workouts' ? 'active-tab' : ''}
                    onClick={() => setSelectedTab('Workouts')}
                >
                    Workouts
                </button>
                <button
                    className={selectedTab === 'Search' ? 'active-tab' : ''}
                    onClick={() => setSelectedTab('Search')}
                >
                    Exercises
                </button>
                <button
                    className={selectedTab === 'Contact' ? 'active-tab' : ''}
                    onClick={() => setSelectedTab('Contact')}
                >
                    Contact
                </button>
            </nav>
            <main>
                <div className="content">
                    {renderContent()}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default UserMain;
