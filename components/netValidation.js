import React,{Component} from 'react';
import Router from 'next/router';
import Web3 from 'web3';

const mockedRouter = { push: () => {} }
Router.router = mockedRouter


class netValidation extends Component{

    render(){
        var web3;// let se usa para poder reasignar la variable

        var IDred;
        var el;
        var accountDetail; 
        if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
            //estamos en el browser
             web3 = new Web3(window.web3.currentProvider);
             web3.eth.getAccounts(function(err, accounts){
                if (err != null) {
                    console.error("An error occurred: "+err);
                    accountDetail=0;
    
    
                }
                else if (accounts.length == 0) {
                    console.log("User is not logged in to MetaMask");
                    accountDetail=1;
    
                    }
                else {
                    console.log("User is logged in to MetaMask");
                    accountDetail=2;
    
                }
            });
            web3.eth.net.getId().then(netId => {
                switch (netId) {
                case 1:
                    IDred = "Main NetWork detected";
                    el = document.querySelector(".Identificador-red");
                    el.innerHTML=IDred;
                    if(accountDetail == 1){
                        Router.pushRoute('/login/account-locked');
    
                    }else if(accountDetail==2){
                        //Router.pushRoute('/');
    
                    }
                    break;
                 
                case 2:
                    IDred = "Morden Network Detected";
                    el = document.querySelector(".Identificador-red");
                    el.innerHTML=IDred;
                    Router.pushRoute('/login/change-provider');
                    break;
                case 3:
                    IDred = "Ropsten Network Detected";
                    el = document.querySelector(".Identificador-red");
                    el.innerHTML=IDred;
                    Router.pushRoute('/login/change-provider');
                    break;
                case 4:
                    IDred = "Rinkeby Network Detected";

                    el = document.querySelector(".Identificador-red");
                    el.innerHTML=IDred;
                    Router.pushRoute('/login/change-provider');
                    break
                case 42:
                    IDred = "Kovan Network Detected";
                    el = document.querySelector(".Identificador-red");
                    el.innerHTML=IDred;
                    Router.pushRoute('/login/change-provider');
                    break;
                default:
                IDred = "Kovan Network Detected";
                el = document.querySelector(".Identificador-red");
                el.innerHTML=IDred;
                Router.pushRoute('/login/change-provider');
                }
              });
        
        }else{        
            console.log("YOU SHOULD INSTALL METAMASK");
            Router.pushRoute('/login/install-metamask');

        }       
    return (
    <p className= 'Identificador-red' style={{color:'#43eee4'}} ></p>
    );
}
}
    
export default netValidation;