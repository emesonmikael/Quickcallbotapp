// App.js
import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import NetworkSelector from './NetworkSelector';
import  {contracts}  from './contractConfig'; // Importa a configuração dos contratos
import { networks } from './networks';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SelectGroupPage from './pages/SelectGroupPage';
import ManageGroupPage from './pages/ManageGroupPage';
import Header from './Header';
import Footer from './Footer';
import './App.css'
import './botaodireito.css';

const App = () => {
  const [network, setNetwork] = useState();
  const [contract, setContract] = useState(null);
  const [usuario, setUsuario] = useState('');
  const [selectedGroup, setSelectedGroup] = useState(null);

  useEffect(() => {
    if (network) {
      connectToContract(network);
    }
  }, [network]);

  // Função para conectar ao contrato correto baseado na rede selecionada
  const connectToContract = async (selectedNetwork) => {
    try {
      const { address, abi } = contracts[selectedNetwork.Name];
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contractInstance = new ethers.Contract(address, abi, signer);
      setContract(contractInstance);
    } catch (error) {
      console.error('Erro ao conectar ao contrato:', error);
    }
  };

  const connectWallet = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const acount = await provider.send("eth_requestAccounts", [0]);
    setUsuario((acount[0]));
    console.log(usuario)
    connectToContract(network);
    console.log(network);

  };

  // Função de exemplo para interagir com o contrato
  const interactWithContract = async () => {
    if (!contract) {
      alert('Nenhum contrato conectado!');
      return;
    }
    // Exemplo: Chamada para uma função do contrato
    try {
      const result = await contract.getOwner(); // Substitua 'someFunction' pela função do seu contrato
      console.log('Resultado da interação:', result);
    } catch (error) {
      console.error('Erro ao interagir com o contrato:', error);
    }
  };

  return (
    <div>
     
      <Router>
      <Header/>
      <header className="App-header">
      <nav>
        <button className='botao-direito2' onClick={connectWallet}>Conectar</button>
        <ul>
          <li>
            <Link className='App-link' to="/">selecione um Grupo</Link>
          </li>
          
           
           {usuario !== "0x6EB3e28b52ECFB46BC52561e22fDEA167612a927" ?(
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
    </div>
  );
};

export default App;