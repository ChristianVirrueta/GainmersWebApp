const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
//const {interface , bytecode} = require ('./compile');
const compiledFactory = require('./build/CampaingGenerator.json')
const provider = new HDWalletProvider(
    'purpose magic stone pond vague electric rate habit issue fatal uncover unit',
  'https://rinkeby.infura.io/HIW4CRrLPL8Rx0ThCs5u');
const web3= new Web3(provider);

const deploy =async () =>{
    const accounts = await web3.eth.getAccounts();
    console.log('esperando hacer deploy desde',accounts[0])
    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: '0x' + compiledFactory.bytecode })
    .send({from: accounts[0], gas: '1000000'});
    console.log(compiledFactory.interface);
    console.log('Contract deployed in ', result.options.address);
};
deploy();