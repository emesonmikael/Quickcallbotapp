import React, { useState } from 'react';
import { getContract } from './contract';

const GetGroup = () => {
  const [groupId, setGroupId] = useState('');
  const [groupData, setGroupData] = useState(null);
  const [groupCount, setGroupCount] = useState(0);
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);

  

  const fetchGroup = async () => {
    try {
      const contract = getContract();
      const count = await contract.getGroupCount();
      setGroupCount(count);
      console.log(JSON.parse(groupCount));
      const data = 0;
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
   // console.log(JSON.stringify(group[3]));
  } catch (error) {
   console.error("Erro ao buscar o grupo:", error);
  } 
  };
  const handleGroupSelect = (event) => {
    setSelectedGroup(event.target.value);
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

      <h1>Selecionar Grupo do Telegram</h1>
      {groupCount > 0 ? (
        <select onChange={handleGroupSelect}>
          <option value="">Selecione um grupo</option>
          {groups.map((group, index) => (
            <option key={index} value={index}>
            Grupo:  {group[0]} - VALOR: {JSON.parse(group[2])} 
            </option>
          ))}
        </select>
      ) : (
        <p>Nenhum grupo cadastrado.</p>
      )}

      
    </div>
  );
};

export default GetGroup;