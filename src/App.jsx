import React from 'react';
import './App.css';

function App() {
  return (
    <div className="dashboard">
      <header className="header">
        <h1>Admin Dashboard</h1>
        <div className="user-info">
          <span>Admin User</span>
          <button className="logout-btn">Logout</button>
        </div>
      </header>
      
      <div className="main-content">
        <div className="card">
          <h2>Welcome</h2>
          <p>This is your admin dashboard</p>
        </div>
        
        <div className="stats-container">
          <div className="stat-card">
            <h3>Users</h3>
            <p>1,234</p>
          </div>
          <div className="stat-card">
            <h3>Messages</h3>
            <p>56</p>
          </div>
          <div className="stat-card">
            <h3>Tasks</h3>
            <p>12</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
