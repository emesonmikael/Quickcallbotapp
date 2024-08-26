// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SelectGroupPage from './pages/SelectGroupPage';
import ManageGroupPage from './pages/ManageGroupPage';

function App() {
  const [selectedGroup, setSelectedGroup] = useState(null);

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Selecionar Grupo</Link>
          </li>
          <li>
            <Link to="/manage">Gerenciar Grupos</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route 
          path="/" 
          element={<SelectGroupPage setSelectedGroup={setSelectedGroup} />} 
        />
        <Route 
          path="/manage" 
          element={<ManageGroupPage />} 
        />
      </Routes>
    </Router>
  );
}

export default App;