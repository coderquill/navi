import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ProceduralTrainer from './components/ProceduralTrainer';
import ProcedureDetails from './components/ProcedureDetails';
import { FaBars } from 'react-icons/fa';
import './App.css';

const App: React.FC = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <Router>
      <div className="app-container">
        <div className="top-bar">
          <button 
            className="menu-button" 
            onClick={toggleSidebar}
          >
            <FaBars />
          </button>
          <img src="/logo.png" alt="Logo" className="logo" />
        </div>
        <Sidebar isVisible={sidebarVisible} />
        <div className={`content ${sidebarVisible ? 'shifted' : ''}`}>
          <Routes>
            <Route path="/account" element={<div>My Account</div>} />
            <Route path="/emergency-procedures" element={<ProceduralTrainer />} />
            <Route path="/scenarios" element={<div>Scenarios</div>} />
            <Route path="/cfi" element={<div>CFI</div>} />
            <Route path="/procedure/:id" element={<ProcedureDetailsWrapper />} />
            <Route path="/" element={<Navigate to="/account" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

const ProcedureDetailsWrapper: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return <ProcedureDetails procedureId={parseInt(id!)} />;
};

export default App;
