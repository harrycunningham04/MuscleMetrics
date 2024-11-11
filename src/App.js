import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import SignUpPage from './components/SignUpPage';
import UserMain from './components/UserMain';
import './styles.css'; 

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/SignUpPage" element={<SignUpPage />} />
          <Route path="/userMain" element={<UserMain />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
