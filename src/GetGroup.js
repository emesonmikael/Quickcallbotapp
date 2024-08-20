import React, { useState } from 'react';
import { getContract } from './contract';

const GetGroup = () => {
  const [groupId, setGroupId] = useState('');
  const [groupData, setGroupData] = useState(null);

  const fetchGroup = async () => {
    try {
      const contract = getContract();
      const data = await contract.getGroup(groupId);
      setGroupData({
        name: data[0],
        telegramId: data[1],
        value: data[2],
        wallet: data[3],
      });
    } catch (error) {
      console.error("Erro ao buscar o grupo:", error);
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
      <button onClick={fetchGroup}>Buscar Grupo</button>

      {groupData && (
        <div>
          <h3>Detalhes do Grupo:</h3>
          <p>Nome: {groupData.name}</p>
          <p>ID do Telegram: {groupData.telegramId}</p>
          <p>Valor: {groupData.value}</p>
          <p>Carteira: {groupData.wallet}</p>
        </div>
      )}
    </div>
  );
};

export default GetGroup;