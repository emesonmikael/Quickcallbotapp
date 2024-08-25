import { ethers} from "ethers";
import { useState } from "react";
import TelegramGroupManagerABI from '../TelegramGroupManagerABI.json';

const contractAddress = "0x1973030c1B338aC87C764DAdF010Ffe98c68c705"; // Coloque o endereço do seu contrato aqui
const abi = TelegramGroupManagerABI;

export default function App() {
    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);
    const [contract, setContract] = useState(null);

    // Conectar à carteira (Metamask)
    async function connectWallet() {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        setProvider(provider);
        setSigner(signer);

        // Conectar ao contrato
        const contractInstance = new ethers.Contract(contractAddress, abi, signer);
        setContract(contractInstance);
    }

    // Registrar um novo grupo
    async function registerGroup(name, telegramId, wallet) {
        if (!contract) return;

        try {
            const tx = await contract.registerGroup(name, telegramId, wallet);
            await tx.wait();
            console.log("Grupo registrado com sucesso!");
        } catch (error) {
            console.error("Erro ao registrar grupo:", error);
        }
    }

    // Editar um grupo existente
    async function editGroup(groupId, name, telegramId, wallet) {
        if (!contract) return;

        try {
            const tx = await contract.editGroup(groupId, name, telegramId, wallet);
            await tx.wait();
            console.log("Grupo editado com sucesso!");
        } catch (error) {
            console.error("Erro ao editar grupo:", error);
        }
    }

    return (
        <div>
            <button onClick={connectWallet}>Conectar à Carteira</button>

            <button onClick={ registerGroup("Nome do Grupo", "TelegramID", "0xWalletAddress")}>
                Registrar Grupo
            </button>

            <button onClick={() => editGroup(0, "Novo Nome", "NovoTelegramID", "0xNovaWalletAddress")}>
                Editar Grupo
            </button>
        </div>
    );
}