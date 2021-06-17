import web3 from "./web3";

const address = '0x971Ed09f67bCb677036ECf3E7dF69EDad06a8676';

const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},
{"inputs":[],"name":"enter","outputs":[],"stateMutability":"payable","type":"function"},
{"inputs":[],"name":"getPlayers","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],
"stateMutability":"view","type":"function"},{"inputs":[],"name":"manager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pickWinner","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"winner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}];

  export default new web3.eth.Contract(abi,address);
