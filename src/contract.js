import { ethers } from 'ethers';

// Endereço do contrato e ABI
const contractAddress = '0x67DE6659f6F9882Fa749EaBeAf5c6d2D4ee74a32';
const contractABI = [
  // ABI do seu contrato vai aqui
  // Copie o ABI gerado quando você compila o contrato
  "function pay(uint256 groupId, uint256 amount) public",
    "function getGroup(uint256 groupId) public view returns (string memory, string memory, uint256, address)"
  
];

export const getContract = () => {
  // Conecte-se ao provider padrão do Metamask
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  // Solicite que o usuário conecte sua conta (via Metamask)
  const signer = provider.getSigner();

  // Retorne uma instância do contrato
  return new ethers.Contract(contractAddress, contractABI, signer);
};