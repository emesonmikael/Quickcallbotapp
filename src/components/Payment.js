import React, { useState,useEffect } from 'react';
import Web3 from 'web3';
import TelegramGroupManagerABI from '../TelegramGroupManagerABI.json';

const TelegramGroupManagerAddress = '0x67DE6659f6F9882Fa749EaBeAf5c6d2D4ee74a32';

const Payment = () => {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [groupId, setGroupId] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWeb3(web3Instance);

        const contractInstance = new web3Instance.eth.Contract(TelegramGroupManagerABI, TelegramGroupManagerAddress);
        setContract(contractInstance);
      } else {
        console.error("Metamask não detectado");
      }
    };

    initWeb3();
  }, []);

  const handlePayment = async () => {
    if (contract && groupId && amount) {
      const accounts = await web3.eth.getAccounts();
      await contract.methods.pay(groupId, web3.utils.toWei(amount, 'mwei')).send({ from: accounts[0] });
      alert('Pagamento realizado com sucesso!');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div>
      <h1>Realizar Pagamento</h1>
      <div>
        <label>Group ID:</label>
        <input
          type="text"
          value={groupId}
          onChange={(e) => setGroupId(e.target.value)}
        />
      </div>
      <div>
        <label>Valor (USDT):</label>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button onClick={handlePayment}>Pagar</button>
    </div>
  );
};

export default Payment;