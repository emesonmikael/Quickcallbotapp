import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import TelegramGroupManagerABI from './TelegramGroupManagerABI.json'; // ABI do contrato

const TelegramGroupManagerAddress = 'ENDEREÇO_DO_CONTRATO';

const App = () => {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [groupCount, setGroupCount] = useState(0);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const initWeb3 = async () => {
      // Conecte-se ao Metamask
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWeb3(web3Instance);

        const contractInstance = new web3Instance.eth.Contract(TelegramGroupManagerABI, TelegramGroupManagerAddress);
        setContract(contractInstance);

        const groupCount = await contractInstance.methods.groupCount().call();
        setGroupCount(groupCount);

        const groupsData = [];
        for (let i = 0; i < groupCount; i++) {
          const group = await contractInstance.methods.getGroup(i).call();
          groupsData.push(group);
        }
        setGroups(groupsData);
      } else {
        console.error("Metamask não detectado");
      }
    };

    initWeb3();
  }, []);

  const handleGroupSelect = (event) => {
    setSelectedGroup(event.target.value);
  };

  return (
    <div>
      <h1>Selecionar Grupo do Telegram</h1>
      {groupCount > 0 ? (
        <select onChange={handleGroupSelect}>
          <option value="">Selecione um grupo</option>
          {groups.map((group, index) => (
            <option key={index} value={index}>
              {group[0]} - ID: {group[1]} - Carteira: {group[3]}
            </option>
          ))}
        </select>
      ) : (
        <p>Nenhum grupo cadastrado.</p>
      )}

      {selectedGroup !== null && (
        <div>
          <h2>Grupo Selecionado</h2>
          <p>Nome: {groups[selectedGroup][0]}</p>
          <p>Telegram ID: {groups[selectedGroup][1]}</p>
          <p>Valor: {groups[selectedGroup][2]}</p>
          <p>Carteira: {groups[selectedGroup][3]}</p>
        </div>
      )}
    </div>
  );
};

export default App