import React, { useState } from 'react';
import { getContract } from './contract';

const RegisterGroup = () => {
  const [groupId, setGroupId] = useState('');
  const [name, setName] = useState('');
  const [telegramId, setTelegramId] = useState('');
  const [value, setValue] = useState('');
  const [wallet, setWallet] = useState('');

  const editGroup = async () => {
    try {
      const contract = getContract();
      await contract.editGroup(groupId, name, telegramId, value, wallet);
      alert("Grupo editado com sucesso!");
    } catch (error) {
      console.error("Erro ao editar o grupo:", error);
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
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="ID do Telegram"
        value={telegramId}
        onChange={(e) => setTelegramId(e.target.value)}
      />
      <input
        type="number"
        placeholder="Valor"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <input
        type="text"
        placeholder="Carteira"
        value={wallet}
        onChange={(e) => setWallet(e.target.value)}
      />
      <button onClick={editGroup}>Editar Grupo</button>
    </div>
  );
};

export default RegisterGroup;