import web3 from './web3';

import CampaignFactory from './build/CampaingGenerator.json';

const instance = new web3.eth.Contract(JSON.parse(CampaignFactory.interface),
'0xf871EBe89D09a62eB4f4AA4E801143D1cD2e32aB');

export default instance;
