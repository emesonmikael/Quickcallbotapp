import React, { useState, useEffect } from 'react';
import { getContract,getContract2 } from '../contractConfig';
import { ethers } from 'ethers';
import axios from 'axios';


const GroupSelection = ({ setSelectedGroup }) => {
  const [groups, setGroups] = useState([]);
  const [selectedGroupId, setSelectedGroupId] = useState(null);
  const [valor, setValor] = useState("");
  const [amount, setAmount] = useState('');
  const [chatId,setChatid] = useState('');

  const [formData, setFormData] = useState({
    nome: '',
    endereco: '',
    cep: '',
    produto: '',
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

  const handlePayment = async () => {
    if (!groups) {
      alert('Por favor, selecione um grupo primeiro.');
      return;
    }
    const CONTRACT_ADDRESS2 = '0xEb20948C752E4ea23EEa44f2B950d9F27F785F2F';
   
    if (!window.ethereum) throw new Error(`No MetaMask found!`);
    await window.ethereum.send('eth_requestAccounts');
 

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = getContract(signer);
    const contract2 = getContract2(signer);

    if(formData.produto==''){
      alert('precisa de imagem em link');
      return;
    }

    try {

     const tx2 = await contract2.approve(CONTRACT_ADDRESS2, ethers.utils.parseUnits(valor, 18));
     alert('Pagamento sendo processado');
     await tx2.wait();
      const tx = await contract.pay(selectedGroupId, ethers.utils.parseUnits(valor, 18)); // USDT usa 6 casas decimais
      await tx.wait();
      alert('Pagamento realizado com sucesso');
      sendMessage();
    } catch (error) {
      console.error('Falha no pagamento:', error);
      alert('Falha no pagamento');
    }
  };


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
    setValor(group.value);
    setChatid(group.telegramId);
    console.log(valor);
    console.log(group.id);
   

  
  };
  async function pagament()
  {
    const contract = getContract();
    await contract.pay(groups.id, ethers.utils.parseUnits(valor, 18));
    alert("Pagamento realizado com sucesso!");
  };

  return (
    <div className ="App">
      <header className="App-header2">
      <p>Selecione um Grupo</p>
      <ul>
      <select onChange={(e) => handleSelectGroup(parseInt(e.target.value))}>
        <option value="">Selecione um grupo</option>
        {groups.map(group => (
          <option key={group.id} value={group.id}>
          Grupo:  {group.name} Valor: {group.value} USDT
          </option>
         
        ))}
      </select>
      <p><label for="scales">Envie o link de uma imagem </label></p>
      <p>
      <form >
     
    

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
      </p>
      
      </ul>
      </header>
    </div>
  );
};

export default GroupSelection;
