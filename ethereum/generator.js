
import EventGenerator from './build/bettingGenerator.json';
import web3 from '../ethereum/web3'


const instance = new web3.eth.Contract(JSON.parse(EventGenerator.interface),
'0xa2F13a9D1641211aDe896CD0E0a3716f51533cdA');

export default instance;
