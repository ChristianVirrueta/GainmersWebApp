import React,{Component} from 'react';
import Router from 'next/router';
import Web3 from 'web3';
import Fetch from 'isomorphic-unfetch';

const mockedRouter = { push: () => {} }
Router.router = mockedRouter


class netValidation extends Component{
    api_call = async function(path, method){
        //const rest = await fetch(path);
        const rest = await fetch(path,{
            method: method
        });
        const response = await rest.json();
        return response;
    };

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
                        //http://api.gainmers.io/api/users/find
                        //http://localhost:8000/api/users/find
                        let account = '';
                        let current = this;
                        let server_api = 'http://api.gainmers.io/api/users/find';
                        web3.eth.getAccounts().then(function(value){
                            if(value[0]){
                                account = value[0];
                                server_api = server_api+'?address='+account;
                                current.api_call(server_api, 'GET').then(function(response){
                                    if(response.length === 0 && Router.router.pathname !== '/login/sign-up'){
                                        Router.pushRoute('/login/sign-up');
                                    }
                                    if(response.length === 1 && Router.router.pathname === '/login/sign-up'){
                                        Router.pushRoute('/betting');
                                    }
                                });
                            }
                        });
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