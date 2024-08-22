import React, { useState } from 'react';
import { ethers } from 'ethers';

const TelegramGroupManager = () => {
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);
  const [signer, setSigner] = useState(null);
  const [groupId, setGroupId] = useState('');
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [telegramId, setTelegramId] = useState('');
  const [value, setValue] = useState('');
  const [wallet, setWallet] = useState('');

  const contractAddress = '0x67DE6659f6F9882Fa749EaBeAf5c6d2D4ee74a32';
  const usdtTokenAddress = '0x8d008B313C1d6C7fE2982F62d32Da7507cF43551';
  const contractABI = [
   "function registerGroup(string memory _name, string memory _telegramId, uint256 _value, address _wallet) public onlyOwner ",
  "function editGroup(uint256 groupId, string memory _name, string memory _telegramId, uint256 _value, address _wallet) public onlyOwner ",
  "function pay(uint256 groupId, uint256 amount) public",
    "function getGroup(uint256 groupId) public view returns (string memory, string memory, uint256, address)"
  
];
  
  // Conectar ao MetaMask
  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send('eth_requestAccounts', []);
      const signer = provider.getSigner();
      setProvider(provider);
      setSigner(signer);

      const contract = new ethers.Contract(contractAddress, contractABI, signer);
      setContract(contract);
    } else {
      alert('MetaMask não está instalada.');
    }
  };

  // Registrar um grupo
  const registerGroup = async () => {
    try {
      const tx = await contract.registerGroup(name, telegramId, ethers.utils.parseUnits(value, 18), wallet);
      await tx.wait();
      alert('Grupo registrado com sucesso!');
    } catch (error) {
      console.error('Erro ao registrar o grupo:', error);
    }
  };

  // Fazer o pagamento para um grupo
  const payGroup = async () => {
    try {
      const tx = await contract.pay(groupId, ethers.utils.parseUnits(amount, 18));
      await tx.wait();
      alert('Pagamento processado com sucesso!');
    } catch (error) {
      console.error('Erro ao processar o pagamento:', error);
    }
  };

  return (
    <div>
      <h1>Telegram Group Manager</h1>
      <button onClick={connectWallet}>Conectar à MetaMask</button>

      <h2>Registrar Grupo</h2>
      <input
        type="text"
        placeholder="Nome do Grupo"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Telegram ID"
        value={telegramId}
        onChange={(e) => setTelegramId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Valor"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <input
        type="text"
        placeholder="Endereço da Wallet"
        value={wallet}
        onChange={(e) => setWallet(e.target.value)}
      />
      <button onClick={registerGroup}>Registrar Grupo</button>

      <h2>Fazer Pagamento</h2>
      <input
        type="text"
        placeholder="ID do Grupo"
        value={groupId}
        onChange={(e) => setGroupId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Valor do Pagamento"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={payGroup}>Pagar</button>
    </div>
  );
};

export default TelegramGroupManager;