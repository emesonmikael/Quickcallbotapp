import { ethers } from 'ethers';

// Endereço do contrato e ABI
const contractAddress = '0x1973030c1B338aC87C764DAdF010Ffe98c68c705';
const contractABI = [
  // ABI do seu contrato vai aqui
  // Copie o ABI gerado quando você compila o contrato
  "function registerGroup(string memory _name, string memory _telegramId, uint256 _value, address _wallet) public onlyOwner ",
  "function editGroup(uint256 groupId, string memory _name, string memory _telegramId, address _wallet) public onlyOwner ",
  "function pay(uint256 groupId, uint256 amount) public",
  "function getGroupCount() public view returns (uint256)",
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