import React, { useState, useEffect } from 'react';
import { getContract } from '../contractConfig';
import { ethers } from 'ethers';

const GroupSelection = ({ setSelectedGroup }) => {
  const [groups, setGroups] = useState([]);
  const [selectedGroupId, setSelectedGroupId] = useState(null);

  useEffect(() => {
    const fetchGroups = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = getContract(provider);
      const groupCount = await contract.getGroupCount();

      let groupList = [];
      for (let i = 0; i < groupCount; i++) {
        const group = await contract.getGroup(i);
        groupList.push({
          id: i,
          name: group[0],
          telegramId: group[1],
          value: group[2],
          wallet: group[3],
        });
      }
      setGroups(groupList);
    };

    fetchGroups();
  }, []);

  const handleSelectGroup = (groupId) => {
    const group = groups.find(g => g.id === groupId);
    setSelectedGroup(group);
    setSelectedGroupId(groupId);
  };

  return (
    <div>
      <h2>Select a Group</h2>
      <ul>
        {groups.map(group => (
          <li key={group.id}>
            <button onClick={() => handleSelectGroup(group.id)}>
              {group.name} - {group.telegramId}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroupSelection;
