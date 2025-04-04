import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/profile" element={<div className="page-content"><h2>Profile</h2><p>Profile page content goes here</p></div>} />
              <Route path="/messages" element={<div className="page-content"><h2>Messages</h2><p>Messages page content goes here</p></div>} />
              <Route path="/statistics" element={<div className="page-content"><h2>Statistics</h2><p>Statistics page content goes here</p></div>} />
              <Route path="/" element={<div className="page-content"><h2>Dashboard</h2><p>Welcome to your dashboard</p></div>} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
