import Web3 from 'web3';

var web3;// let se usa para poder reasignar la variable

if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    //estamos en el browser
     web3 = new Web3(window.web3.currentProvider);

}else{
    /*Sin metamask o no estamos en el browser*/
    const provider = new Web3.providers.HttpProvider(
        'https://mainnet.infura.io/HIW4CRrLPL8Rx0ThCs5u'
    );
    web3 = new Web3(provider);


}
export default web3;




