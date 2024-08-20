import React, { useState } from 'react';
import { getContract } from './contract';

const PayGroup = () => {
  const [groupId, setGroupId] = useState('');
  const [amount, setAmount] = useState('');

  const payGroup = async () => {
    try {
      const contract = getContract();
      await contract.pay(groupId, ethers.utils.parseUnits(amount, 18));
      alert("Pagamento realizado com sucesso!");
    } catch (error) {
      console.error("Erro ao realizar o pagamento:", error);
    }
  };

  return (
    <div>
      <input
        type="number"
        placeholder="ID do Grupo"
        value={groupId}
        onChange={(e) => setGroupId(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantidade de USDT"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={payGroup}>Pagar</button>
    </div>
  );
};

export default PayGroup;