import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Person as PersonIcon, 
  Message as MessageIcon, 
  BarChart as StatsIcon,
  Menu as MenuIcon,
  Close as CloseIcon
} from '@mui/icons-material';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
      <nav>
        <ul>
          <li>
            <Link to="/profile">
              <PersonIcon />
              {isOpen && <span>Profile</span>}
            </Link>
          </li>
          <li>
            <Link to="/messages">
              <MessageIcon />
              {isOpen && <span>Messages</span>}
            </Link>
          </li>
          <li>
            <Link to="/statistics">
              <StatsIcon />
              {isOpen && <span>Statistics</span>}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar; 