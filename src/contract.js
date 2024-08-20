import { ethers } from 'ethers';

// Endereço do contrato e ABI
const contractAddress = 'SEU_CONTRATO_ENDERECO';
const contractABI = [
  // ABI do seu contrato vai aqui
  // Copie o ABI gerado quando você compila o contrato
];

export const getContract = () => {
  // Conecte-se ao provider padrão do Metamask
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  // Solicite que o usuário conecte sua conta (via Metamask)
  const signer = provider.getSigner();

  // Retorne uma instância do contrato
  return new ethers.Contract(contractAddress, contractABI, signer);
};