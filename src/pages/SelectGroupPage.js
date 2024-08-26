// src/pages/SelectGroupPage.js
import React, { useState } from 'react';
import GroupSelection from '../components/GroupSelection';
import { getContract } from '../contractConfig';
import { ethers } from 'ethers';

const SelectGroupPage = ({ setSelectedGroup }) => {
  const [selectedGroup, setSelectedGroupState] = useState(null);
  const [amount, setAmount] = useState('');

  const handlePayment = async () => {
    if (!selectedGroup) {
      alert('Por favor, selecione um grupo primeiro.');
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = getContract(signer);

    try {
      const tx = await contract.pay(selectedGroup.id, ethers.utils.parseUnits(amount, 6)); // USDT usa 6 casas decimais
      await tx.wait();
      alert('Pagamento realizado com sucesso');
    } catch (error) {
      console.error('Falha no pagamento:', error);
      alert('Falha no pagamento');
    }
  };

  const handleGroupSelection = (group) => {
    setSelectedGroup(group);
    setSelectedGroupState(group);
  };

  return (
    <div>
      <h1>Selecione um Grupo</h1>
      <GroupSelection setSelectedGroup={handleGroupSelection} />
      
      {selectedGroup && (
        <div>
          <h3>Detalhes do Grupo Selecionado:</h3>
          <p>ID: {selectedGroup.id}</p>
          <p>Nome: {selectedGroup.name}</p>
          <p>Telegram ID: {selectedGroup.telegramId}</p>
          <p>Valor: {selectedGroup.value}</p>
          <p>Carteira: {selectedGroup.wallet}</p>

          <h3>Fazer Pagamento</h3>
          <input
            type="number"
            placeholder="Valor a Pagar (USDT)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button onClick={handlePayment}>Pagar Grupo</button>
        </div>
      )}
    </div>
  );
};

export default SelectGroupPage;