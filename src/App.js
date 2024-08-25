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
            <Link to="/">Select Group</Link>
          </li>
          <li>
            <Link to="/manage">Manage Groups</Link>
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
      {selectedGroup && (
        <div>
          <h3>Selected Group Details:</h3>
          <p>ID: {selectedGroup.id}</p>
          <p>Name: {selectedGroup.name}</p>
          <p>Telegram ID: {selectedGroup.telegramId}</p>
          <p>Value: {selectedGroup.value}</p>
          <p>Wallet: {selectedGroup.wallet}</p>
        </div>
      )}
    </Router>
  );
}

export default App;
