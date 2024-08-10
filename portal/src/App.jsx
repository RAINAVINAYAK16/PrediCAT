import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignuPage';
import LandingPage from './Pages/landingpage';
import Catbot from './Pages/Catbot';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />            
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/catbot" element={<Catbot />} />
       
        </Routes>
      </div>
    </Router>
  );
}

export default App;