// src/pages/SelectGroupPage.js
import React, { useState } from 'react';
import GroupSelection from '../components/GroupSelection';
import { getContract } from '../contractConfig';
import { ethers } from 'ethers';
import axios from 'axios';

const SelectGroupPage = ({ setSelectedGroup }) => {
  const [selectedGroup, setSelectedGroupState] = useState(null);
  const [amount, setAmount] = useState('');
  const [chatId,setChatid] = useState('');

  const handlePayment = async () => {
    if (!selectedGroup) {
      alert('Por favor, selecione um grupo primeiro.');
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = getContract(signer);

    try {
      const tx = await contract.pay(selectedGroup.id, ethers.utils.parseUnits(amount, 18)); // USDT usa 6 casas decimais
      await tx.wait();
      alert('Pagamento realizado com sucesso');
      sendMessage();
    } catch (error) {
      console.error('Falha no pagamento:', error);
      alert('Falha no pagamento');
    }
  };
  const [formData, setFormData] = useState({
    nome: '',
    endereco: '',
    cep: '',
    bairro: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
   
   
  };
  const sendMessage = async () => {
    const token = '7316901237:AAHVxRhR5_F9YtlGuUf1dJSGxkDf-EZHh_w';//'6777312253:AAHnEyhYfNPB8_t675-rdbYgE1xaXQYp8ho';
   
    const imageUrl = formData.produto;

    try {
      await axios.post(`https://api.telegram.org/bot${token}/sendPhoto`, 
        {
        chat_id: chatId,
        photo: imageUrl,
        caption: formData.hash
      });
      alert('Imagem e descrição enviadas com sucesso!');
    } catch (error) {
      alert('Erro ao enviar imagem e descrição');
      console.error('Erro ao enviar:', error);
    }
  };

  const handleGroupSelection = (group) => {
    setSelectedGroup(group);
    setSelectedGroupState(group);
    setAmount(group.value);
    setChatid(group.telegramId);
  };

  return (
    <div>
      <h1>Selecione um Grupo</h1>
      <GroupSelection setSelectedGroup={handleGroupSelection} />
      
      {selectedGroup && (
        <div>
          <h3>Detalhes do Grupo Selecionado:</h3>
          <p>ID: {selectedGroup.id}</p>
          <p>Nome: {selectedGroup.name}</p>
          <p>Telegram ID: {selectedGroup.telegramId}</p>
          <p>Valor: {selectedGroup.value}</p>
          <p>Carteira: {selectedGroup.wallet}</p>

          <h3>Fazer Pagamento</h3>
          <input
            type="number"
            placeholder="Valor a Pagar (USDT)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <form >
     
     <label for="scales">Envie o link de uma imagem </label>

      <input
        type="text"
        name="produto"
        placeholder="Imagem"
        value={formData.produto}
        onChange={handleChange}
        font-size='10'
      />
      
       
      
      </form>
      <form>
        <p>
        <label for="scales">Descreva seu projeto </label>
                  </p>
     
      <textarea 
      name="hash"
      rows="10" 
      cols="50"
      value={formData.hash}
      onChange={handleChange}
      >Discriçao do seu projeto aqui</textarea> 
      </form>
          <button onClick={handlePayment}>Enviar Imagem e Descrição</button>
        </div>
      )}
    </div>
  );
};

export default SelectGroupPage;