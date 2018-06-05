import web3 from './web3';

import SportEvent from './build/sportEvent.json';

export default address =>{
    return new web3.eth.Contract(JSON.parse(SportEvent.interface),address);
};
