import { ethers } from 'ethers';

const CONTRACT_ADDRESS2 = '0x8d008B313C1d6C7fE2982F62d32Da7507cF43551';
const CONTRACT_ADDRESS = '0xEb20948C752E4ea23EEa44f2B950d9F27F785F2F';
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
