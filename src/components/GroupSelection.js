import React, { useState, useEffect } from 'react';
import { getContract,getContract2} from '../contractConfig';
import { ethers } from 'ethers';
import axios from 'axios';
import  {contracts}  from '../contractConfig'; // Importa a configuração dos contratos
import NetworkSelector from '../NetworkSelector';
import { getContract3, getContract4 } from './contractConfig';


const GroupSelection = ({ setSelectedGroup }) => {
  const [groups, setGroups] = useState([]);
  const [selectedGroupId, setSelectedGroupId] = useState(null);
  const [valor, setValor] = useState("");
  const [rede, setRede] = useState('');
  const [chatId,setChatid] = useState('');
  const [text, setText] = useState('');
  const maxCharacters = 1000; // Defina o limite de caracteres desejado
  const [contract, setContract] = useState(null);
  const [network, setNetwork] = useState();
  const [usuario, setUsuario] = useState('');
 

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
    setText(event.target.value);
   
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
  const connectWallet = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const acount = await provider.send("eth_requestAccounts", [0]);
    setUsuario((acount[0]));
    console.log(usuario)
    connectToContract(network);
    console.log(network);

  };

   // Função para conectar ao contrato correto baseado na rede selecionada
   const connectToContract = async (selectedNetwork) => {
    try {
      const { address, abi } = contracts[selectedNetwork.Name];
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contractInstance = new ethers.Contract(address, abi, signer);
      setContract(contractInstance);
      console.log(selectedNetwork.Name);
      setRede(selectedNetwork.Name);
    } catch (error) {
      console.error('Erro ao conectar ao contrato:', error);
    }
  };

  const interactWithContract = async () => {
    if (!contract) {
      alert('Nenhum contrato conectado!');
      return;
    }
    // Exemplo: Chamada para uma função do contrato
    try {
      const result = await contract.getGroup('0'); // Substitua 'someFunction' pela função do seu contrato
      console.log('Resultado da interação:', result);
    } catch (error) {
      console.error('Erro ao interagir com o contrato:', error);
    }
  };

  const handlePayment = async () => {
    if (!groups) {
      alert('Por favor, selecione um grupo primeiro.');
      return;
    }
    const CONTRACT_ADDRESS2 = '0xf60B0939283657EAa3c83B635BDB28A35AEF7225';
   
    if (!window.ethereum) throw new Error(`No MetaMask found!`);
    await window.ethereum.send('eth_requestAccounts');
 

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
   // const contract = getContract(signer);
    const contract2 = getContract2(signer);
    const contract3 = getContract3(signer);
    if(formData.produto==''){
      alert('precisa de imagem em link');
      return;
    }
      if(valor=="0"){
          alert("enviando mensagem teste");
          sendMessage();
          return;
      }
    try {
      if(
        rede == 'bsc'
      ){
        const tx2 = await contract2.approve(CONTRACT_ADDRESS2, ethers.utils.parseUnits(valor, 18));
        await tx2.wait();
      }else{
        const tx3 = await contract3.approve(CONTRACT_ADDRESS2, ethers.utils.parseUnits(valor, 18));
       await tx3.wait()
      }
      //const tx2 = await contract2.approve(CONTRACT_ADDRESS2, ethers.utils.parseUnits(valor, 18));
     
     alert('Pagamento sendo processado');
     //await tx2.wait();
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
    connectToContract(network);
    const fetchGroups = async () => {
      if(rede == 'bsc'){
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
      }else{
        const provider = new ethers.providers.Web3Provider(window.ethereum);
     const contract = getContract4(provider);
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
      }
      

      

    };

    fetchGroups();
  }, [ network]);

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
      <div className ='botao-direito'>
      <NetworkSelector setNetwork={setNetwork} />
      </div>
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
     maxLength={maxCharacters} // Define o limite de caracteres
     placeholder={`Digite até ${maxCharacters} caracteres...`}
     >Discriçao do seu projeto aqui</textarea> 
      <p>{`${text.length} / ${maxCharacters} caracteres`}</p> {/* Exibe o contador de caracteres */}
     </form>
         <button onClick={handlePayment}>Enviar Imagem e Descrição</button>
         
      </p>
      
      </ul>
      </header>
    </div>
  );
};

export default GroupSelection;
