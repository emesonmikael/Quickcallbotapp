// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SelectGroupPage from './pages/SelectGroupPage';
import ManageGroupPage from './pages/ManageGroupPage';
import Header from './Header';
import Footer from './Footer';
import './App.css'
import { getContract } from './contractConfig';
import { ethers } from 'ethers';
import './botaodireito.css';


function App() {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [usuario, setUsuario] = useState('');

   async function login(){
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const acount = await provider.send("eth_requestAccounts", [0]);
  setUsuario((acount[0]));
  console.log(usuario)
  }

  return (
    <Router>
      <Header/>
      <header className="App-header">
      <nav>
        <button className='botao-direito' onClick={login}>botao</button>
        <ul>
          <li>
            <Link className='App-link' to="/">selecione um Grupo</Link>
          </li>
          
           
           {usuario !== "0x725e02d671aa828515e4080e97d0679eb3e867ac" ?(
           <p></p>
        ):(
          <p><li>
          <Link className='App-link' to="/manage">Manage Groups</Link>
          </li></p>
        
        )}
           
         
        </ul>
        <p>Conecte sua carteira para promover  </p>
        <p> seu projeto em canais e grupos   </p>
        <p> ativos do telegram com apenas um click.</p>
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