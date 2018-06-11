import React,{Component} from 'react';
import Layout from '../components/layout1';
import Router from 'next/router';
import {Link} from '../routes';
import web3 from '../ethereum/web3';
import {Accordion,Header,Button, Embed, Icon, Segment, Divider, Menu} from 'semantic-ui-react';

const mockedRouter = { push: () => {} }
Router.router = mockedRouter


class MainIndex extends Component{

    renderNetID(){
        var IDred;
        var el;
        var accountDetail; 
        if (typeof web3 == 'undefined') {

            Router.pushRoute('/login/install-metamask');
         
           } else {
            web3.eth.getAccounts(function(err, accounts){
                if (err != null) {
                    console.error("An error occurred: "+err);
                    accountDetail=0;
                    console.log(accountDetail);
    
    
                }
                else if (accounts.length == 0) {
                    console.log("User is not logged in to MetaMask");
                    accountDetail=1;
                    console.log(accountDetail);
    
                    }
                else {
                    console.log("User is logged in to MetaMask");
                    accountDetail=2;
                    console.log(accountDetail);
    
                }
            });
            web3.eth.net.getId().then(netId => {
                switch (netId) {
                case 1:
                    IDred = "Main NetWork detected";
                    el = document.querySelector(".Identificador-red");
                    el.innerHTML=IDred;
                    Router.pushRoute('/login/change-provider');
                    console.log(IDred);
                    break
                case 2:
                    IDred = "Morden Network Detected";
                    el = document.querySelector(".Identificador-red");
                    el.innerHTML=IDred;
                    Router.pushRoute('/login/change-provider');
                    console.log(IDred);
                    break;
                case 3:
                    IDred = "Ropsten Network Detected";
                    el = document.querySelector(".Identificador-red");
                    el.innerHTML=IDred;
                    Router.pushRoute('/login/change-provider');
                    console.log(IDred);
                    break;
                case 4:
                    IDred = "Rinkeby Network Detected";
                    el = document.querySelector(".Identificador-red");
                    el.innerHTML=IDred;
                    if(accountDetail == 1){
                        Router.pushRoute('/login/account-locked');
    
                    }else if(accountDetail==2){
                        Router.pushRoute('/login/sign-up');
    
                    }
                    console.log(IDred);
                    break;
                case 42:
                    IDred = "Kovan Network Detected";
                    el = document.querySelector(".Identificador-red");
                    el.innerHTML=IDred;
                    Router.pushRoute('/login/change-provider');
                    console.log(IDred);
                    break;
                default:
                IDred = "Kovan Network Detected";
                el = document.querySelector(".Identificador-red");
                el.innerHTML=IDred;
                Router.pushRoute('/login/change-provider');
                console.log(IDred);            }
              });
           }
        
     
        
    return (
    <h1 className= 'Identificador-red' ></h1>
    );
}
    
    render() {
        return(
        <Layout>
            <Segment>
                        {this.renderNetID()}
            </Segment>
                <div>
                    <h3> Pagina Principal</h3>
                    <Link route="/login/account-locked">
                        <a>
                            <Button 
                                icon labelPosition='right' 
                                primary > 
                                Ventana de bloqueo
                                <Icon name= 'add circle'/>
                            
                            </Button>
                        </a>
                    </Link>
                    <Link route="/login/install-metamask">
                        <a>
                            <Button 
                                icon labelPosition='right' 
                                primary > 
                                Instalando Metamask
                                <Icon name= 'add circle'/>
                            
                            </Button>
                        </a>
                    </Link>
                    
                    <Link route="/login/change-provider">
                        <a>
                            <Button 
                                icon labelPosition='right' 
                                primary > 
                                Cambiando de ETH Network
                            
                                <Icon name= 'add circle'/>
                            
                            </Button>
                        </a>
                    </Link>

                    <Link route="/betting">
                        <a>
                            <Button 
                                as='h2'
                                icon labelPosition='right' 
                                primary > 
                                CONTINUE                            
                                <Icon name= 'add circle'/>
                            
                            </Button>
                        </a>
                    </Link>
                </div>
        </Layout>
        );
    }       
}
export default MainIndex;