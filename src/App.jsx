import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <div className="app">
          <Sidebar />
          <div className="main-content">
            <Navbar />
            <main className="content">
              <Routes>
                <Route path="/" element={
                  <div className="page-content">
                    <h2>Dashboard</h2>
                    <p>Welcome to your admin dashboard</p>
                  </div>
                } />
                <Route path="/profile" element={
                  <div className="page-content">
                    <h2>Profile</h2>
                    <p>Profile management section</p>
                  </div>
                } />
                <Route path="/messages" element={
                  <div className="page-content">
                    <h2>Messages</h2>
                    <p>Message center</p>
                  </div>
                } />
                <Route path="/statistics" element={
                  <div className="page-content">
                    <h2>Statistics</h2>
                    <p>Analytics and statistics</p>
                  </div>
                } />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
