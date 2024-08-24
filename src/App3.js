import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import GroupSelection from './components/GroupSelection';
import Payment from './components/Payment';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Selecionar Grupo</Link></li>
          <li><Link to="/payment">Realizar Pagamento</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<GroupSelection />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
};

export default App;