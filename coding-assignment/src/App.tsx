import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useParams } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard'; 
import ProcedurePage from './components/ProcedurePage'; 
import { FaBars } from 'react-icons/fa';
import './App.css'; 

const App: React.FC = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const WrappedProcedurePage = () => {
    const { id } = useParams<{ id: string }>();
    return <ProcedurePage procedureId={Number(id)} />;
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
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/procedure/:id" element={<WrappedProcedurePage />} />
            <Route path="/" element={<Navigate to="/dashboard" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
