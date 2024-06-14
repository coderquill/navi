import React from 'react';
import styled from 'styled-components';
import { FaUser, FaProcedures, FaClipboardList, FaChalkboardTeacher } from 'react-icons/fa';

const SidebarContainer = styled.div<{ isVisible: boolean }>`
  width: 220px;
  background: #f90242;
  padding: 20px;
  position: fixed;
  height: 100vh;
  color: white;
  left: ${({ isVisible }) => (isVisible ? '0' : '-600px')};
  transition: left 0.3s ease-in-out;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  font-size: 16px;
  cursor: pointer;
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

const Sidebar: React.FC<SidebarProps> = ({ isVisible }) => (
  <SidebarContainer isVisible={isVisible}>
    <Logo>MyApp</Logo>
    <h2 style={{ margin: '10px 0', fontSize: '18px' }}>Procedural Trainer</h2>
    <nav>
      <MenuItem>
        <IconWrapper><FaUser /></IconWrapper>
        My Account
      </MenuItem>
      <MenuItem>
        <IconWrapper><FaProcedures /></IconWrapper>
        Emergency Procedures
      </MenuItem>
      <MenuItem>
        <IconWrapper><FaClipboardList /></IconWrapper>
        Scenarios
      </MenuItem>
      <MenuItem>
        <IconWrapper><FaChalkboardTeacher /></IconWrapper>
        CFI
      </MenuItem>
    </nav>
  </SidebarContainer>
);

export default Sidebar;
