import { ethers } from 'ethers';

const CONTRACT_ADDRESS2 = '0x55d398326f99059fF775485246999027B3197955';
const CONTRACT_ADDRESS = '0xf60b0939283657eaa3c83b635bdb28a35aef7225';
const ABI = [
  "function editGroup(uint256 groupId, string memory _name, string memory _telegramId, string memory _value, address _wallet) public onlyOwner ",
  "function pay(uint256 groupId, uint256 amount) public",
  "function registerGroup(string memory _name, string memory _telegramId, string memory _value, address _wallet) public onlyOwner ",
  "function setUsdtToken(address _usdtToken) public onlyOwner",
  "function getGroupCount() public view returns (uint256)",
  "function approve(address spender, uint256 amount) public override returns (bool)",
  "function getGroup(uint256 groupId) public view returns (string memory, string memory, string memory, address)"
  // Coloque aqui a ABI do seu contrato
];

export const getContract = (providerOrSigner) => {
  return new ethers.Contract(CONTRACT_ADDRESS, ABI, providerOrSigner);
};
export const getContract2 = (providerOrSigner) => {
  return new ethers.Contract(CONTRACT_ADDRESS2, ABI, providerOrSigner);
};

export const contracts = {
  bsc: {
    address: '0xf60B0939283657EAa3c83B635BDB28A35AEF7225', // Substitua pelo endereço do contrato na BSC
    abi: [
      "function editGroup(uint256 groupId, string memory _name, string memory _telegramId, string memory _value, address _wallet) public onlyOwner ",
  "function pay(uint256 groupId, uint256 amount) public",
  "function registerGroup(string memory _name, string memory _telegramId, string memory _value, address _wallet) public onlyOwner ",
  "function setUsdtToken(address _usdtToken) public onlyOwner",
  "function getGroupCount() public view returns (uint256)",
  "function approve(address spender, uint256 amount) public override returns (bool)",
  "function getGroup(uint256 groupId) public view returns (string memory, string memory, string memory, address)"
  
      /* ABI do contrato na BSC */],
  },
  polygon: {
    address: '0x0D47699aeeFA93Bf25daFd5eC8cC973Dd239C8a0', // Substitua pelo endereço do contrato na Polygon
    abi: [
      "function editGroup(uint256 groupId, string memory _name, string memory _telegramId, string memory _value, address _wallet) public onlyOwner ",
  "function pay(uint256 groupId, uint256 amount) public",
  "function registerGroup(string memory _name, string memory _telegramId, string memory _value, address _wallet) public onlyOwner ",
  "function setUsdtToken(address _usdtToken) public onlyOwner",
  "function getGroupCount() public view returns (uint256)",
  "function approve(address spender, uint256 amount) public override returns (bool)",
  "function getOwner() external view override returns (address) ",
  "function getGroup(uint256 groupId) public view returns (string memory, string memory, string memory, address)"
  
      /* ABI do contrato na Polygon */],
  },
};
 
