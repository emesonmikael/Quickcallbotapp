import { ethers } from 'ethers';

const CONTRACT_ADDRESS = 'ENDEREÇO_DO_CONTRATO';
const ABI = [
  "function editGroup(uint256 groupId, string memory _name, string memory _telegramId, string memory _value, address _wallet) public onlyOwner ",
  "function pay(uint256 groupId, uint256 amount) public",
  "function registerGroup(string memory _name, string memory _telegramId, string memory _value, address _wallet) public onlyOwner ",
  "function setUsdtToken(address _usdtToken) public onlyOwner",
  "function getGroupCount() public view returns (uint256)",
  "function getGroup(uint256 groupId) public view returns (string memory, string memory, string memory, address)"
  // Coloque aqui a ABI do seu contrato
];

export const getContract = (providerOrSigner) => {
  return new ethers.Contract(CONTRACT_ADDRESS, ABI, providerOrSigner);
};
