import { ethers } from 'ethers';

const CONTRACT_ADDRESS2 = '0x55d398326f99059fF775485246999027B3197955';
const CONTRACT_ADDRESS = '0x6Ba83cc4D7D9b7b2f3B8421e56FE9E54AD89e9A5';
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
    address: '0xBscContractAddress', // Substitua pelo endereço do contrato na BSC
    abi: [/* ABI do contrato na BSC */],
  },
  polygon: {
    address: '0xPolygonContractAddress', // Substitua pelo endereço do contrato na Polygon
    abi: [/* ABI do contrato na Polygon */],
  },
};
 
