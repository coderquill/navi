import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaUser, FaProcedures, FaClipboardList, FaChalkboardTeacher } from 'react-icons/fa';

const SidebarContainer = styled.div<{ isVisible: boolean }>`
  width: 220px;
  background: #f90242;
  padding: 20px;
  position: fixed;
  height: 100vh;
  color: white;
  transform: ${({ isVisible }) => (isVisible ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const MenuItem = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  padding: 10px 0;
  font-size: 16px;
  cursor: pointer;
  background: ${({ selected }) => (selected ? 'white' : 'transparent')};
  color: ${({ selected }) => (selected ? '#ff3855' : 'white')};
  border-radius: 4px;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const IconWrapper = styled.div`
  margin-right: 10px;
`;

interface SidebarProps {
  isVisible: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isVisible }) => {
  const location = useLocation();

  return (
    <SidebarContainer isVisible={isVisible}>
      <Logo>MyApp</Logo>
      <h2 style={{ margin: '10px 0', fontSize: '18px' }}>Procedural Trainer</h2>
      <nav>
        <Link to="/account">
          <MenuItem selected={location.pathname === '/account'}>
            <IconWrapper><FaUser /></IconWrapper>
            My Account
          </MenuItem>
        </Link>
        <Link to="/emergency-procedures">
          <MenuItem selected={location.pathname === '/emergency-procedures'}>
            <IconWrapper><FaProcedures /></IconWrapper>
            Emergency Procedures
          </MenuItem>
        </Link>
        <Link to="/scenarios">
          <MenuItem selected={location.pathname === '/scenarios'}>
            <IconWrapper><FaClipboardList /></IconWrapper>
            Scenarios
          </MenuItem>
        </Link>
        <Link to="/cfi">
          <MenuItem selected={location.pathname === '/cfi'}>
            <IconWrapper><FaChalkboardTeacher /></IconWrapper>
            CFI
          </MenuItem>
        </Link>
      </nav>
    </SidebarContainer>
  );
};

export default Sidebar;
