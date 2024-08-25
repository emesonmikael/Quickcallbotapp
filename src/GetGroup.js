import React, { useState } from 'react';
import { getContract } from './contract';
import axios from 'axios';
import './App.css';
import { ethers } from 'ethers';

const GetGroup = () => {
  const [groupId, setGroupId] = useState('');
  const [groupData, setGroupData] = useState(null);
  const [groupCount, setGroupCount] = useState(0);
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [quantity, setQuantity] = useState("");
  const [chatId,setChatid] = useState('');

  

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
     
     
   // console.log(JSON.stringify(group[3]));
  } catch (error) {
   console.error("Erro ao buscar o grupo:", error);
  } 
  };
  const handleGroupSelect = async (event) => {
    setSelectedGroup(event.target.value);
    const contract = getContract();
    const dados = await contract.getGroup(selectedGroup);
    console.log(dados[0]);
    setChatid(dados[1]);
    console.log(chatId);
    setQuantity(JSON.parse(dados[2]));
    console.log(quantity);
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
    const token = '7399236144:AAE1z92lc-Oy9Mon4snPWx2Nzul1LS7DNh4';//'6777312253:AAHnEyhYfNPB8_t675-rdbYgE1xaXQYp8ho';
   
    const imageUrl = formData.produto;

    try {
      await axios.post(`https://api.telegram.org/bot${token}/sendPhoto`, 
        {
        chat_id:chatId ,
        photo: imageUrl,
        caption: formData.hash
      });
      alert('Imagem e descrição enviadas com sucesso!');
    } catch (error) {
      alert('Erro ao enviar imagem e descrição');
      console.error('Erro ao enviar:', error);
    }
  };
 
  
    const payGroup = async () => {
      try {
        const contract = getContract();
        await contract.pay(selectedGroup, ethers.utils.parseUnits(quantity, 18));
        alert("Pagamento realizado com sucesso!");
        sendMessage();
      } catch (error) {
        console.error("Erro ao realizar o pagamento:", error);
      }
    };
    
  
  return (
    <div className="App">
   <header className="App-header">
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
    {selectedGroup !== null && (
        <div>
          <h2>Grupo Selecionado</h2>
          <p>Nome: </p>
          <p>Telegram ID: </p>
          <p>Valor: {quantity}</p>
          <p>Carteira:</p>
        </div>
      )}
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
      <button onClick={payGroup}>Enviar Imagem e Descrição</button>

      </header>
    </div>
  );
};

export default GetGroup;