// App.js
import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import NetworkSelector from './NetworkSelector';
import  {contracts}  from './contractConfig'; // Importa a configuração dos contratos
import { networks } from './networks';

const App = () => {
  const [network, setNetwork] = useState();
  const [contract, setContract] = useState(null);
  const [usuario, setUsuario] = useState('');

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
      <h1>Escolha a Rede e Conecte ao Contrato</h1>
      <NetworkSelector setNetwork={setNetwork} />
      <button onClick={connectWallet}>Conectar Carteira</button>
      <button onClick={interactWithContract}>Interagir com o Contrato</button>
      
    </div>
  );
};

export default App;