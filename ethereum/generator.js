
import EventGenerator from './build/bettingGenerator.json';
import web3 from '../ethereum/web3'


const instance = new web3.eth.Contract(JSON.parse(EventGenerator.interface),
'0xf7143a7f8fd470b141ff6585c2dbf79b5cd52c90');

export default instance;
