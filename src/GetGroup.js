import React, { useState } from 'react';
import { getContract } from './contract';

const GetGroup = () => {
  const [groupId, setGroupId] = useState('');
  const [groupData, setGroupData] = useState(null);
  const [groupCount, setGroupCount] = useState(0);
  const [groups, setGroups] = useState([]);

  

  const fetchGroup = async () => {
    try {
      const contract = getContract();
      const count = await contract.getGroupCount();
      setGroupCount(count);
      console.log(JSON.parse(groupCount));
      //const data = await contract.getGroup(groupId);
      const groupsData = [];
      for (let i = 0; i < count; i++){
        const group = await contract.getGroup(i);
        groupsData.push(group);
          console.log(group);
      }
      setGroups(groupsData);
     
     setGroupData({
      name:JSON.stringify(data[0]),
      telegramId: JSON.stringify(data[1]),
      value: JSON.parse(data[2]),
      wallet: JSON.stringify(data[3]),
    });
    console.log(JSON.stringify(data[3]));
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