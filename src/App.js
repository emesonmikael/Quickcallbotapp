// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SelectGroupPage from './pages/SelectGroupPage';
import ManageGroupPage from './pages/ManageGroupPage';
import Header from './Header';
import Footer from './Footer';
import './App.css'


function App() {
  const [selectedGroup, setSelectedGroup] = useState(null);

  return (
    <Router>
      <Header/>
      <header className="App-header">
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
      </header>
      <Footer/>
    </Router>
  );
}

export default App;