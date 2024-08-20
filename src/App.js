import {useLayoutEffect, useEffect,useState} from 'react';
import { ethers } from 'ethers';
import { getTokenBalance, transferToken, getTransaction } from './MetaMaskService';
import { calcBSTTPrice,calcBNBPrice } from './bsttprice';
import { read, utils, writeFileXLSX } from 'xlsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import TelegramForm from './form';
import reportWebVitals from './reportWebVitals';
import App2 from './page2';
import TelegramGroupManager from './meta';

import './App.css';
//import web3 from 'web3';


function App() {
    const [preço, setPreço] = useState("");
    const [preço6, setPreço6] = useState("");
    const [preço7, setPreço7] = useState("");
    const [preço8, setPreço8] = useState("");
    const [preço9, setPreço9] = useState("");
    const [preço10, setPreço10] = useState("");
    const [preço11, setPreço11] = useState("");
    const [preço12, setPreço12] = useState("");
    const [preço13, setPreço13] = useState("");
    const [preço14, setPreço14] = useState("");
    const [preço15, setPreço15] = useState("");
    const [preço16, setPreço16] = useState("");
    const [preço17, setPreço17] = useState("");
    const [preço18, setPreço18] = useState("");
    const [preço19, setPreço19] = useState("");
    const [preço20, setPreço20] = useState("");
    const [preço21, setPreço21] = useState("");
    const [preço22, setPreço22] = useState("");
    const [preço23, setPreço23] = useState("");
    const [preço24, setPreço24] = useState("");
    const [preço25, setPreço25] = useState("");
    const [preço26, setPreço26] = useState("");
    const [preçoEle, setPreçoEle] = useState("");
    const [pres, setPres] = useState([]);
    const [img,setImg]=useState("");
    const [url1,setUrl1]=useState("");
    const [url6,setUrl6]=useState("");
    const [url7,setUrl7]=useState("");
    const [url8,setUrl8]=useState("");
    const [url9,setUrl9]=useState("");
    const [url10,setUrl10]=useState("");
    const [url11,setUrl11]=useState("");
    const [url12,setUrl12]=useState("");
    const [url13,setUrl13]=useState("");
    const [url14,setUrl14]=useState("");
    const [url15,setUrl15]=useState("");
    const [url16,setUrl16]=useState("");
    const [url17,setUrl17]=useState("");
    const [url18,setUrl18]=useState("");
    const [url19,setUrl19]=useState("");
    const [url20,setUrl20]=useState("");
    const [url21,setUrl21]=useState("");
    const [url22,setUrl22]=useState("");
    const [url23,setUrl23]=useState("");
    const [url24,setUrl24]=useState("");
    const [url25,setUrl25]=useState("");
    const [url26,setUrl26]=useState("");
    const [url27,setUrl27]=useState("");
    const [url28,setUrl28]=useState("");
    const [url29,setUrl29]=useState("");
    const [url30,setUrl30]=useState("");
    const [nomeproduto,setNomeProduto]=useState("");
    const [nomeproduto2,setNomeProduto2]=useState("");
    const [nomeproduto3,setNomeProduto3]=useState("");
    const [nomeproduto4,setNomeProduto4]=useState("");
    const [nomeproduto5,setNomeProduto5]=useState("");
    const [nomeproduto6,setNomeProduto6]=useState("");
    const [nomeproduto7,setNomeProduto7]=useState("");
    const [nomeproduto8,setNomeProduto8]=useState("");
    const [nomeproduto9,setNomeProduto9]=useState("");
    const [nomeproduto10,setNomeProduto10]=useState("");
    const [nomeproduto11,setNomeProduto11]=useState("");
    const [nomeproduto12,setNomeProduto12]=useState("");
    const [nomeproduto13,setNomeProduto13]=useState("");
    const [nomeproduto14,setNomeProduto14]=useState("");
    const [nomeproduto15,setNomeProduto15]=useState("");
    const [nomeproduto16,setNomeProduto16]=useState("");
    const [nomeproduto17,setNomeProduto17]=useState("");
    const [nomeproduto18,setNomeProduto18]=useState("");
    const [nomeproduto19,setNomeProduto19]=useState("");
    const [nomeproduto20,setNomeProduto20]=useState("");
    const [nomeproduto21,setNomeProduto21]=useState("");
    const [nomeproduto22,setNomeProduto22]=useState("");
    const [nomeproduto23,setNomeProduto23]=useState("");
    const [nomeproduto24,setNomeProduto24]=useState("");
    const [nomeproduto25,setNomeProduto25]=useState("");
    const [nomeproduto26,setNomeProduto26]=useState("");


    useEffect(() => {
      (async () => {
        const f = await (await fetch("https://docs.google.com/spreadsheets/d/10Qk1jYNJ_wvcR8wXg5q7gTEb-ZdhCXq1/edit?usp=sharing&ouid=105075195163145601215&rtpof=true&sd=true")).arrayBuffer();
        const wb = read(f);
        const ws = wb.Sheets[wb.SheetNames[0]];
        setPreço(ws.F3.v);
        setPreço6(ws.F4.v);
        setPreço7(ws.F5.v);
        setPreço8(ws.F6.v);
        setPreço9(ws.F7.v);
        setPreço10(ws.F8.v);
        setPreço11(ws.F9.v);
        setPreço12(ws.F10.v);
        setPreço13(ws.F11.v);
        setPreço14(ws.F12.v);
        setPreço15(ws.F13.v);
        setPreço16(ws.F14.v);
        setPreço17(ws.F15.v);
        setPreço18(ws.F16.v);
        setPreço19(ws.F17.v);
        setPreço20(ws.F18.v);
        setPreço21(ws.F19.v);
        setPreço22(ws.F20.v);
        setPreço23(ws.F21.v);
        setPreço24(ws.F22.v);
        setPreço25(ws.F23.v);
        setPreço26(ws.F24.v);
        setNomeProduto5(ws.B3.v);
        setNomeProduto6(ws.B4.v);
        setNomeProduto7(ws.B5.v);
        setNomeProduto8(ws.B6.v);
        setNomeProduto9(ws.B7.v);
        setNomeProduto10(ws.B8.v);
        setNomeProduto11(ws.B9.v);
        setNomeProduto12(ws.B10.v);
        setNomeProduto13(ws.B11.v);
        setNomeProduto14(ws.B12.v);
        setNomeProduto15(ws.B13.v);
        setNomeProduto16(ws.B14.v);
        setNomeProduto17(ws.B15.v);
        setNomeProduto18(ws.B16.v);
        setNomeProduto19(ws.B17.v);
        setNomeProduto20(ws.B18.v);
        setNomeProduto21(ws.B19.v);
        setNomeProduto22(ws.B20.v);
        setNomeProduto23(ws.B21.v);
        setNomeProduto24(ws.B22.v);
        setNomeProduto25(ws.B23.v);
        setNomeProduto26(ws.B24.v);
        //setNomeProduto27(ws.B25.v);
        //setNomeProduto28(ws.B26.v);
        //setNomeProduto29(ws.B27.v);
        const data = utils.sheet_to_json(ws);
        setPres(data);
       
        setUrl1(ws.E3.v);
        setUrl6(ws.E4.v);
        setUrl7(ws.E5.v);
        setUrl8(ws.E6.v);
        setUrl9(ws.E7.v);
        setUrl10(ws.E8.v);
        setUrl11(ws.E9.v);
        setUrl12(ws.E10.v);
        setUrl13(ws.E11.v);
        setUrl14(ws.E12.v);
        setUrl15(ws.E13.v);
        setUrl16(ws.E14.v);
        setUrl17(ws.E15.v);
        setUrl18(ws.E16.v);
        setUrl19(ws.E17.v);
        setUrl20(ws.E18.v);
        setUrl21(ws.E19.v);
        setUrl22(ws.E20.v);
        setUrl23(ws.E21.v);
        setUrl24(ws.E22.v);
        setUrl25(ws.E23.v);
        setUrl26(ws.E24.v);
        setImg(ws.N19.v);
       
        
        console.log(nomeproduto5);
      })();
    }, []);
    
    const updateCellE3 = () => {
      // Diminui o valor da célula E3 em 1 unidade
      const newPreço = Number(preço) - 1;
      setPreço(newPreço);
    };
  
    const exportFile = () => {
      const ws = utils.json_to_sheet(pres);
      const wb = utils.book_new();
      utils.book_append_sheet(wb, ws, "Data");
      writeFileXLSX(wb, "SheetJSReactAoO.xlsx");
    };
    const [groups, setGroups] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [chatId,setChatid] = useState('');

    const sendMessage = async () => {
      const token = '7316901237:AAHVxRhR5_F9YtlGuUf1dJSGxkDf-EZHh_w';//'6777312253:AAHnEyhYfNPB8_t675-rdbYgE1xaXQYp8ho';
     
      const imageUrl = formData.produto;
  
      try {
        await axios.post(`https://api.telegram.org/bot${token}/sendPhoto`, 
          {
          chat_id: chatId,
          photo: imageUrl,
          caption: formData.hash
        });
        alert('Imagem e descrição enviadas com sucesso!');
      } catch (error) {
        alert('Erro ao enviar imagem e descrição');
        console.error('Erro ao enviar:', error);
      }
    };
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

const [error, setError] = useState("");
//const [to , setTo] = useState("0xE6d7083A880b5D30170b5335D8Ac9e30Aa0fa8a2");
const [transaction, setTransaction] = useState("");
//const CONTRACT_ADDRESS = "0x983060ea9ae659045C130C17312065139a479442";
async function pagina2(){
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App2 />
    </React.StrictMode>
  );
  
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();

}
async function formulario(){
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <TelegramGroupManager />
    </React.StrictMode>
  );
  
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
}

async function getContract(){
if (!window.ethereum) return setError('metamask nao conectada!');
//const web3 = new Web3(window.ethereum);
//if (!accounts || !accounts.length) return setError('wallet not found/allowed!');
}

async function checkTransaction() {
  const result = await getTransaction(transaction);

  setMessage(`
  Status: ${result.status}
  Confirmations: ${result.confirmations}`);
}
 //const [myAddress, setMyAddress] = useState("");
  const [address, setAddress] = useState("");
  const [contract, setContract] = useState("0x3ea5502bA0d8BE6222EE0202Ea79F74eC6458793");
  //const [contract2, setContract2] = useState("0x983060ea9ae659045C130C17312065139a479442");
  const [balance, setBalance] = useState('');

  const [toAddress, setToAddress] = useState("0x8bCea3942295f3b847B49C190862781C4fC2EFe3");
  const [quantity, setQuantity] = useState("");
    const [quantity3, setQuantity3] = useState("");
   const [quantity4, setQuantity4] = useState("");
   const [quantity5, setQuantity5] = useState("");
   const [quantity6, setQuantity6] = useState("");
   const [quantity7, setQuantity7] = useState("");
   const [quantity8, setQuantity8] = useState("");
   const [quantity9, setQuantity9] = useState("");
   const [quantity10, setQuantity10] = useState("");
   const [quantity11, setQuantity11] = useState("");
   const [quantity12, setQuantity12] = useState("");
   const [quantity13, setQuantity13] = useState("");
   const [quantity14, setQuantity14] = useState("");
   const [quantity15, setQuantity15] = useState("");
   const [quantity16, setQuantity16] = useState("");
   const [quantity17, setQuantity17] = useState("");
   const [quantity18, setQuantity18] = useState("");
   const [quantity19, setQuantity19] = useState("");
   const [quantity20, setQuantity20] = useState("");
   const [quantity21, setQuantity21] = useState("");
   const [quantity22, setQuantity22] = useState("");
   const [quantity23, setQuantity23] = useState("");
   const [quantity24, setQuantity24] = useState("");
   const [quantity25, setQuantity25] = useState("");
   const [quantity26, setQuantity26] = useState("");
  const [message, setMessage] = useState('');
    const [message3, setMessage3] = useState('');
    const [message2, setMessage2] = useState('');
    const [message4, setMessage4] = useState('');
    const [message5, setMessage5] = useState('');
    const [message6, setMessage6] = useState('');
let [quantity2, setQuantity2] = useState("");
//const [wallet, setWallet] = useState('');
const [carteirapag,setCarteirapag]=useState("")

const provider = new ethers.providers.Web3Provider(window.ethereum);


    
    checkBalance();


  async function checkBalance() {
      const accounts = await provider.send("eth_requestAccounts", []);
      setAddress(accounts[0]);
    let balance;

      balance = await getTokenBalance( address,contract);
      let bnbPrice = await calcBNBPrice() // query pancakeswap to get the price of BNB in USDT
      let bsttPrice = await calcBSTTPrice() // query pancakeswap to get the price of BSTT in BNB
      let bsttprice = bsttPrice * bnbPrice;
      let valorDolar1 = 40; //valor em dolar do primeiro produto
      let valorProduto1 = valorDolar1/bsttprice;
      let valorDolar2 = 281; //valor em dolar do segundo produto
      let valorProduto2 = valorDolar2/bsttprice;
      let valorDolar3 = 826; //valor em dolar do terceiro produto
      let valorProduto3 = valorDolar3/bsttprice;
	  let valorDolar4 = 224;
	  let valorProduto4 = valorDolar4/bsttprice;


    setBalance(balance);
    setPreçoEle(bsttprice);
     setQuantity2(valorProduto1.toFixed());
     setQuantity(valorProduto2.toFixed());
     setQuantity3(valorProduto3.toFixed());
	  setQuantity4(valorProduto4.toFixed());
    setQuantity5((preço/preçoEle).toFixed());
    setQuantity6((preço6/preçoEle).toFixed());  
    setQuantity7((preço7/preçoEle).toFixed());
    setQuantity8((preço8/preçoEle).toFixed());
    setQuantity9((preço9/preçoEle).toFixed());
    setQuantity10((preço10/preçoEle).toFixed());
    setQuantity11((preço11/preçoEle).toFixed());
    setQuantity12((preço12/preçoEle).toFixed());
    setQuantity13((preço13/preçoEle).toFixed());
    setQuantity14((preço14/preçoEle).toFixed());
    setQuantity15((preço15/preçoEle).toFixed());
    setQuantity16((preço16/preçoEle).toFixed());
    setQuantity17((preço17/preçoEle).toFixed());
    setQuantity18((preço18/preçoEle).toFixed());
    setQuantity19((preço19/preçoEle).toFixed());
    setQuantity20((preço20/preçoEle).toFixed());
    setQuantity21((preço21/preçoEle).toFixed());
    setQuantity22((preço22/preçoEle).toFixed());
    setQuantity23((preço23/preçoEle).toFixed());
    setQuantity24((preço24/preçoEle).toFixed());
    setQuantity25((preço25/preçoEle).toFixed());
    setQuantity26((preço26/preçoEle).toFixed());
    setMessage6(bsttprice);
     console.log(quantity2);
    

  }

   // Função para lidar com a seleção do grupo
 const handleGroupSelect = (groupId) => {
  const group = groups.find(g => g.id === groupId);
  if (group) {
    setSelectedGroup(group);
    setQuantity(group.valor); // Define a variável quantity com o valor correspondente
    setChatid(group.grupoid);
    console.log(quantity);
  }
};

  async function transfer() {

    let result;
      if(balance < "1")
      alert("saldo insuficiente");
         // setMessage2('saldo insuficiente');
      if (balance )
      result = await transferToken(toAddress, contract, quantity);
    setMessage4(JSON.stringify(result.hash));
sendMessage();
      setCarteirapag(JSON.stringify(result.from));

      //setMessage3('Compra efetuada com sucesso HASH:');
      formulario();


  }
	 async function transfer4() {

    let result;
      if(balance < "1")
      alert("saldo insuficiente");
         // setMessage2('saldo insuficiente');
      if (balance )
      result = await transferToken(toAddress, contract, quantity4);
    setMessage4(JSON.stringify(result.hash));

      setCarteirapag(JSON.stringify(result.from));

      formulario();


  }
 async function transfer2() {
    let result;
   
     if(balance < "1")
     alert("saldo insuficiente");
         //setMessage2('saldo insuficiente');
     if (balance )
     console.log(balance);
         result = await transferToken(toAddress, contract, quantity2);
	;
    setMessage5(JSON.stringify(result.hash));
     setCarteirapag(JSON.stringify(result.from));
    
     formulario();
 }
    async function transfer3() {
        let result;
        if(balance <"1")
        alert("saldo insuficiente");
           // setMessage2('saldo insuficiente');
        if (balance)

            result = await transferToken(toAddress, contract, quantity3);

        setMessage6(JSON.stringify(result.hash));
        setCarteirapag(JSON.stringify(result.from));
        formulario();
    }
    async function transfer5() {
      let result;
      if(balance <"1")
      alert("saldo insuficiente");
         // setMessage2('saldo insuficiente');
      if (balance)

          result = await transferToken(toAddress, contract, quantity5);

      setMessage6(JSON.stringify(result.hash));
      setCarteirapag(JSON.stringify(result.from));
      formulario();
  }
  async function transfer6() {
    let result;
    if(balance <"1")
    alert("saldo insuficiente");
       // setMessage2('saldo insuficiente');
    if (balance)

        result = await transferToken(toAddress, contract, quantity6);

    setMessage6(JSON.stringify(result.hash));
    setCarteirapag(JSON.stringify(result.from));
    formulario();
}
async function transfer7() {
  let result;
  if(balance <"1")
  alert("saldo insuficiente");
     // setMessage2('saldo insuficiente');
  if (balance)

      result = await transferToken(toAddress, contract, quantity7);

  setMessage6(JSON.stringify(result.hash));
  setCarteirapag(JSON.stringify(result.from));
  formulario();
}
async function transfer8() {
  let result;
  if(balance <"1")
  alert("saldo insuficiente");
     // setMessage2('saldo insuficiente');
  if (balance)

      result = await transferToken(toAddress, contract, quantity8);

  setMessage6(JSON.stringify(result.hash));
  setCarteirapag(JSON.stringify(result.from));
  formulario();
}
async function transfer9() {
  let result;
  if(balance <"1")
  alert("saldo insuficiente");
     // setMessage2('saldo insuficiente');
  if (balance)

      result = await transferToken(toAddress, contract, quantity9);

  setMessage6(JSON.stringify(result.hash));
  setCarteirapag(JSON.stringify(result.from));
  formulario();
}
async function transfer10() {
  let result;
  if(balance <"1")
  alert("saldo insuficiente");
     // setMessage2('saldo insuficiente');
  if (balance)

      result = await transferToken(toAddress, contract, quantity10);

  setMessage6(JSON.stringify(result.hash));
  setCarteirapag(JSON.stringify(result.from));
  formulario();

}
async function transfer11() {
  let result;
  if(balance <"1")
  alert("saldo insuficiente");
     // setMessage2('saldo insuficiente');
  if (balance)

      result = await transferToken(toAddress, contract, quantity11);

  setMessage6(JSON.stringify(result.hash));
  setCarteirapag(JSON.stringify(result.from));
  formulario();
}

async function transfer12() {
  let result;
  if(balance <"1")
  alert("saldo insuficiente");
     // setMessage2('saldo insuficiente');
  if (balance)

      result = await transferToken(toAddress, contract, quantity12);

  setMessage6(JSON.stringify(result.hash));
  setCarteirapag(JSON.stringify(result.from));
  formulario();
}

async function transfer13() {
  let result;
  if(balance <"1")
  alert("saldo insuficiente");
     // setMessage2('saldo insuficiente');
  if (balance)

      result = await transferToken(toAddress, contract, quantity13);

  setMessage6(JSON.stringify(result.hash));
  setCarteirapag(JSON.stringify(result.from));
  formulario();
}

async function transfer14() {
  let result;
  if(balance <"1")
  alert("saldo insuficiente");
     // setMessage2('saldo insuficiente');
  if (balance)

      result = await transferToken(toAddress, contract, quantity14);

  setMessage6(JSON.stringify(result.hash));
  setCarteirapag(JSON.stringify(result.from));
  formulario();
}

async function transfer15() {
  let result;
  if(balance <"1")
  alert("saldo insuficiente");
     // setMessage2('saldo insuficiente');
  if (balance)

      result = await transferToken(toAddress, contract, quantity15);

  setMessage6(JSON.stringify(result.hash));
  setCarteirapag(JSON.stringify(result.from));
  formulario();
}

async function transfer16() {
  let result;
  if(balance <"1")
  alert("saldo insuficiente");
     // setMessage2('saldo insuficiente');
  if (balance)

      result = await transferToken(toAddress, contract, quantity16);

  setMessage6(JSON.stringify(result.hash));
  setCarteirapag(JSON.stringify(result.from));
  formulario();
}

async function transfer17() {
  let result;
  if(balance <"1")
  alert("saldo insuficiente");
     // setMessage2('saldo insuficiente');
  if (balance)

      result = await transferToken(toAddress, contract, quantity17);

  setMessage6(JSON.stringify(result.hash));
  setCarteirapag(JSON.stringify(result.from));
  formulario();
}

async function transfer18() {
  let result;
  if(balance <"1")
  alert("saldo insuficiente");
     // setMessage2('saldo insuficiente');
  if (balance)

      result = await transferToken(toAddress, contract, quantity18);

  setMessage6(JSON.stringify(result.hash));
  setCarteirapag(JSON.stringify(result.from));
  formulario();
}

async function transfer19() {
  let result;
  if(balance <"1")
  alert("saldo insuficiente");
     // setMessage2('saldo insuficiente');
  if (balance)

      result = await transferToken(toAddress, contract, quantity19);

  setMessage6(JSON.stringify(result.hash));
  setCarteirapag(JSON.stringify(result.from));
  formulario();
}

async function transfer20() {
  let result;
  if(balance <"1")
  alert("saldo insuficiente");
     // setMessage2('saldo insuficiente');
  if (balance)

      result = await transferToken(toAddress, contract, quantity20);

  setMessage6(JSON.stringify(result.hash));
  setCarteirapag(JSON.stringify(result.from));
  formulario();
}

async function transfer21() {
  let result;
  if(balance <"1")
  alert("saldo insuficiente");
     // setMessage2('saldo insuficiente');
  if (balance)

      result = await transferToken(toAddress, contract, quantity21);

  setMessage6(JSON.stringify(result.hash));
  setCarteirapag(JSON.stringify(result.from));
  
 formulario();
}
async function transfer22() {
  let result;
  if(balance <"1")
  alert("saldo insuficiente");
     
  if (balance)

      result = await transferToken(toAddress, contract, quantity22);

  setMessage6(JSON.stringify(result.hash));
  setCarteirapag(JSON.stringify(result.from));
  //setMessage3('Compra efetuada com sucesso HASH:');
  formulario();
}
async function transfer23() {
  let result;
  if(balance <"1")
  alert("saldo insuficiente");
     // setMessage2('saldo insuficiente');
  if (balance)

      result = await transferToken(toAddress, contract, quantity23);

  setMessage6(JSON.stringify(result.hash));
  setCarteirapag(JSON.stringify(result.from));
  //setMessage3('Compra efetuada com sucesso HASH:');
  formulario();
}
async function transfer24() {
  let result;
  if(balance <"1")
  alert("saldo insuficiente");
     // setMessage2('saldo insuficiente');
  if (balance)

      result = await transferToken(toAddress, contract, quantity24);

  setMessage6(JSON.stringify(result.hash));
  setCarteirapag(JSON.stringify(result.from));
  //setMessage3('Compra efetuada com sucesso HASH:');
  formulario();
}
async function transfer25() {
  let result;
  if(balance <"1")
  alert("saldo insuficiente");
     // setMessage2('saldo insuficiente');
  if (balance)

      result = await transferToken(toAddress, contract, quantity25);

  setMessage6(JSON.stringify(result.hash));
  setCarteirapag(JSON.stringify(result.from));
  //setMessage3('Compra efetuada com sucesso HASH:');
  formulario();
}
async function transfer26() {
  let result;
  if(balance <"1")
  alert("saldo insuficiente");
     // setMessage2('saldo insuficiente');
  if (balance)

      result = await transferToken(toAddress, contract, quantity26);

  setMessage6(JSON.stringify(result.hash));
  setCarteirapag(JSON.stringify(result.from));
  //setMessage3('Compra efetuada com sucesso HASH:');
  formulario();
}


 

  return (
  <div className="App">
<h1>ELETRO EXPRESSO</h1>
<header className="App-header">
 <nav> <button onChange={formulario}>login</button></nav>
<h1>Selecione um Grupo</h1>
      <select onChange={(e) => handleGroupSelect(parseInt(e.target.value))}>
        <option value="">Selecione um grupo</option>
        {groups.map(group => (
          <option key={group.id} value={group.id}>
            {group.name}
          </option>
        ))}
      </select>

      {selectedGroup && (
        <div>
          <h2>Informações do Grupo</h2>
          <p>Grupo: {selectedGroup.name}</p>
          <p>Valor: {selectedGroup.valor}</p>
          <p>Grupo id :{selectedGroup.grupoid}</p>
          <p>Quantidade Selecionada: {quantity}</p>
        </div>
      )}
 <form >
     
     <label for="scales">Envie o link de uma imagem </label>

      <input
        type="text"
        name="produto"
        placeholder="Imagem"
        value={formData.produto}
        onChange={handleChange}
        font-size='10'
      />
      
       
      
      </form>

      <form>
        <p>
        <label for="scales">Descreva seu projeto </label>
                  </p>
     
      <textarea 
      name="hash"
      rows="10" 
      cols="50"
      value={formData.hash}
      onChange={handleChange}
      >Discriçao do seu projeto aqui</textarea> 
      </form>
      <button onClick={transfer}>Enviar Imagem e Descrição</button>

</header>
    


</div >
  );

}


export default App;
