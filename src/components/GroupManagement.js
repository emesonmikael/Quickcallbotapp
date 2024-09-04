import React, { useState ,useEffect } from 'react';
import { getContract } from '../contractConfig';
import { ethers } from 'ethers';
import  {contracts}  from './contractConfig'; // Importa a configuração dos contratos

import NetworkSelector from '../NetworkSelector';

const GroupManagement =  () => {
  const [name, setName] = useState('');
  const [telegramId, setTelegramId] = useState('');
  const [value, setValue] = useState('');
  const [wallet, setWallet] = useState('');
  const [groupId, setGroupId] = useState(null);
  const [contract, setContract] = useState(null);
  const [network, setNetwork] = useState();
 
  const handleRegister = async () => {
    //const provider = new ethers.providers.Web3Provider(window.ethereum);
    //const signer = provider.getSigner();
    //const contract = getContract(signer);

    await contract.registerGroup(name, telegramId, value, wallet);
    alert('Group registered successfully');
  };

  
  useEffect(() => {
    if (network) {
      connectToContract(network);
    }
  }, [network]);
  const handleEdit = async () => {
   
   // const provider = new ethers.providers.Web3Provider(window.ethereum);
    //const signer = provider.getSigner();
    //const contract = getContract(signer);

    await contract.editGroup(groupId, name, telegramId, value, wallet);
    alert('Group edited successfully');
  };
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
 

  return (
    <div className='App-header'>
      <NetworkSelector setNetwork={setNetwork} />
      <h2>Register/Edit Group</h2>
      <input 
        type="text" 
        placeholder="Group Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Telegram ID" 
        value={telegramId} 
        onChange={(e) => setTelegramId(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Value" 
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Wallet Address" 
        value={wallet} 
        onChange={(e) => setWallet(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Group ID (for editing)" 
        value={groupId || ''} 
        onChange={(e) => setGroupId(e.target.value)} 
      />
      <button onClick={handleRegister}>Register Group</button>
      <button onClick={handleEdit}>Edit Group</button>
    </div>
  );
};

export default GroupManagement;
