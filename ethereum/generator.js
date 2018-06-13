
import EventGenerator from './build/bettingGenerator.json';
import web3 from '../ethereum/web3'


const instance = new web3.eth.Contract(JSON.parse(EventGenerator.interface),
'0x4A0A3BcD9e1A2F60857Ab1D847a314e87F8d5292');

export default instance;
