import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import myAccountLogo from '../images/my_account_icon.png';
import '../styles/Sidebar.css';

interface SidebarProps {
  isVisible: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isVisible }) => (
  <div className={`sidebar-container ${isVisible ? 'visible' : ''}`}>
    <div className="menu-content">
      <nav className="nav">
        <div className="menu-item">
          <div className="icon-wrapper"><img src={myAccountLogo} alt="My Account" className="custom-icon" /></div>
          <div className="bullet-wrapper">&#8226;</div>
          My Account
        </div>
        <div className="menu-item">
          <div className="bullet-wrapper">&#8226;</div>
          Emergency Procedures
        </div>
        <div className="menu-item">
          <div className="bullet-wrapper">&#8226;</div>
          Scenarios
        </div>
        <div className="menu-item">
          <div className="bullet-wrapper">&#8226;</div>
          CFI
        </div>
      </nav>
    </div>
    <div className="logout-button">
      <FaSignOutAlt style={{ marginRight: '10px' }} />
      Logout
    </div>
  </div>
);

export default Sidebar;
