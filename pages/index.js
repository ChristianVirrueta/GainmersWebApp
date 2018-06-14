import React,{Component} from 'react';
import Layout from '../components/layout1';
import {Segment,Container} from 'semantic-ui-react';
import Encabezado from '../components/header1';
import Head from 'next/head';

import Router from 'next/router';
import Web3 from 'web3';

const mockedRouter = { push: () => {} }
Router.router = mockedRouter



class MainIndex extends Component{
    renderValidation(){
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
                IDred = "Main Network Detected";
                el = document.querySelector(".Identificador-red");
                el.innerHTML=IDred;
                if(accountDetail == 1){
                    Router.pushRoute('/login/account-locked');

                }else if(accountDetail==2){
                    Router.pushRoute('/betting');

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
                    IDred = "Rinkeby Network detected";
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
        
            Router.pushRoute('/login/install-metamask');

        }       
    return (
    <p className= 'Identificador-red' style={{color:'#43eee4',textAlign:'center'}} ></p>
    );
}
    render() {
        return(
            <Segment>

        <Container style={{textAlign:'center !important'}}>
             <Head>
                <link rel="stylesheet" 
                href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
                <link rel="stylesheet" 
                href="http://dapp.gainmers.io/assets/style/styles.css"></link>
            </Head>
            <Encabezado/>
            <h1 style={{width:'100%',textAlign:'center'}}>Welcome to Gainmers</h1>
            {this.renderValidation()}

        </Container>
        </Segment>

        );
    }       
}
export default MainIndex;