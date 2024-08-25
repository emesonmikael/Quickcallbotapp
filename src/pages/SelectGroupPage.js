import React, { useState } from 'react';
import GroupSelection from '../components/GroupSelection';

const SelectGroupPage = ({ setSelectedGroup }) => {
  return (
    <div>
      <h1>Select Group</h1>
      <GroupSelection setSelectedGroup={setSelectedGroup} />
    </div>
  );
};

export default SelectGroupPage;
