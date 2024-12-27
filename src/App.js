import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';

import './styles/styles.css';

const App = () => {
  return (
      <Router basename="/muscleMetric/frontend">
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/SignUpPage" element={<SignUpPage />} />
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </div>
      </Router>
  );
};

export default App;