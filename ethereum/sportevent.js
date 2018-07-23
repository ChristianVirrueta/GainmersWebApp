import SportEvent from './build/sportEvent.json';
import web3 from '../ethereum/web3'

export default address =>{
    return new web3.eth.Contract(JSON.parse(SportEvent.interface),address);
};
