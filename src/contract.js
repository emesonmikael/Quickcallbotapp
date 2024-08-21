import { ethers } from 'ethers';

// Endereço do contrato e ABI
const contractAddress = '0x67DE6659f6F9882Fa749EaBeAf5c6d2D4ee74a32';
const contractABI = [
  // ABI do seu contrato vai aqui
  // Copie o ABI gerado quando você compila o contrato
  [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
];

export const getContract = () => {
  // Conecte-se ao provider padrão do Metamask
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  // Solicite que o usuário conecte sua conta (via Metamask)
  const signer = provider.getSigner();

  // Retorne uma instância do contrato
  return new ethers.Contract(contractAddress, contractABI, signer);
};