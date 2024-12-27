import React, { useState } from 'react';
import Dash from '../components/Dash';
import PreMade from '../components/PreMade';
import Plans from '../components/Plans';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/styles.css';



const UserMain = (userInfo) => {
    const [selectedTab, setSelectedTab] = useState('Dash');

    const renderContent = () => {
        switch (selectedTab) {
            case 'Dash': return <Dash />;
            case 'Plans': return <Plans />;
            case 'PreMade': return <PreMade />;
            case 'Contact': return <Contact />;
            default: return <Dash />;
        }
    };

    return (
        <div className="main-page">
            <header>
                <Header userInfo={userInfo} />
            </header>
            <nav className="top-navigation">
                <button
                    className={selectedTab === 'Dash' ? 'active-tab' : ''}
                    onClick={() => setSelectedTab('Dash')}
                >
                    Dashboard
                </button>
                <button
                    className={selectedTab === 'Plans' ? 'active-tab' : ''}
                    onClick={() => setSelectedTab('Plans')}
                >
                    Workout Plans
                </button>
                <button
                    className={selectedTab === 'PreMade' ? 'active-tab' : ''}
                    onClick={() => setSelectedTab('PreMade')}
                >
                    Pre-Made
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