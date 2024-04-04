import React, { useState } from 'react';
import axios from 'axios';


const TelegramForm = () => {
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Substitua 'SEU_TOKEN' pelo seu token de acesso do Telegram
    const telegramToken = '6777312253:AAHnEyhYfNPB8_t675-rdbYgE1xaXQYp8ho';
    const chatId = '6587022667'; // O ID do chat onde você deseja enviar os dados

    try {
      await axios.post(
          `https://api.telegram.org/bot${telegramToken}/sendMessage`,
        //`https://api.telegram.org/bot${telegramToken}/sendMessage`,
        {
          chat_id: chatId,
          text: `
            Produto: ${formData.produto}
            Hash: ${formData.hash}
            Nome: ${formData.nome}
            Endereço: ${formData.endereco}
            CEP: ${formData.cep}
            Bairro: ${formData.bairro}
          `,
        }
      );

      console.log('Dados enviados com sucesso para o Telegram!');
      alert("dados enviado om suesso");
    } catch (error) {
      console.error('Erro ao enviar dados para o Telegram:', error);
    }
  };

  return (
   
    <form onSubmit={handleSubmit}>
       <input
        type="text"
        name="produto"
        placeholder="Produto"
        value={formData.produto}
        onChange={handleChange}
        font-size='10'
      />
       <input
        type="text"
        name="hash"
        placeholder="Hash"
        value={formData.hash}
        onChange={handleChange}
      />
      <input
        type="text"
        name="nome"
        placeholder="Nome"
        value={formData.nome}
        onChange={handleChange}
      />
      <input
        type="text"
        name="endereco"
        placeholder="Endereço"
        value={formData.endereco}
        onChange={handleChange}
      />
      <input
        type="text"
        name="cep"
        placeholder="CEP"
        value={formData.cep}
        onChange={handleChange}
      />
      <input
        type="text"
        name="bairro"
        placeholder="Bairro"
        value={formData.bairro}
        onChange={handleChange}
      />
      <button type="submit">Enviar para o Telegram</button>
    </form>
  );
};

export default TelegramForm;
