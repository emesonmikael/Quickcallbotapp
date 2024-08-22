import React from 'react';
import GetGroup from './GetGroup';
import EditGroup from './EditGroup';
import PayGroup from './PayGroup';
import RegisterGroup from './RegisterGroup';


function App() {
  return (
    <div>
      <h1>Gerenciamento de Grupos do Telegram</h1>
      <GetGroup />
      <EditGroup />
      <PayGroup />
      <RegisterGroup/>
    </div>
  );
}

export default App;