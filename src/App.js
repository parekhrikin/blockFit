// src/app.js
import "./App.css";
import { ethers } from "ethers";
import { useState } from "react";
import TokenArtifact from "./artifacts/contracts/MDToken.sol/Token.json";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import Dashboard from "./components/Dashboard/Dashboard";

const tokenAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const Routing = () => {

  const navigate = useNavigate();  

  return (
    <Routes>
      <Route exact path="/" element={<WelcomePage />} />
      <Route path="/dash" element={<Dashboard />} />      
    </Routes>
  );

};

function App() {
/*  const [tokenData, setTokenData] = useState({});
  const [amount, setAmount] = useState();
  const [userAccountId, setUserAccountId] = useState();

  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }
  
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();  

  async function _intializeContract(init) {
    // We first initialize ethers by creating a provider using window.ethereum
    // When, we initialize the contract using that provider and the token's
    // artifact. You can do this same thing with your contracts.
    const contract = new ethers.Contract(tokenAddress, TokenArtifact.abi, init);
    return contract;
  }
  async function _getTokenData() {
    const contract = await _intializeContract(signer);
    const name = await contract.name();
    const symbol = await contract.symbol();
    const tokenData = { name, symbol };
    setTokenData(tokenData);
  }
  async function sendMDToken() {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const contract = await _intializeContract(signer);
      const transaction = await contract.transfer(userAccountId, amount);
      await transaction.wait();
      console.log(`${amount} MDToken has been sent to ${userAccountId}`);
    }
  }
  async function getBalance() {
    if (typeof window.ethereum !== "undefined") {
      const contract = await _intializeContract(signer);
      const [account] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const balance = await contract.balanceOf(account);
      console.log("Account Balance: ", balance.toString());
    }
  }

  return (
    
    <header className="App-header">
        <button onClick={_getTokenData}>get token data</button>
        <h1>{tokenData.name}</h1>
        <h1>{tokenData.symbol}</h1>
        <button onClick={getBalance}>Get Balance</button>
        <button onClick={sendMDToken}>Send MDToken</button>
        <input
          onChange={(e) => setUserAccountId(e.target.value)}
          placeholder="Account ID"
        />
        <input
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
        />
      </header>
  
  )*/
  return (
    <div className="App">
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </div>
  );
  
}
export default App;
