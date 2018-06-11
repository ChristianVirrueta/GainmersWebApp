import React,{Component} from 'react';
import Layout from '../components/layout1';
import{Link,Router} from '../routes';
import web3 from '../ethereum/web3';
import {Accordion,Header,Button, Embed, Icon, Segment, Divider, Menu} from 'semantic-ui-react';




class MainIndex extends Component{
    renderNetID(){
        var IDred;
        var el;
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
                Router.pushRoute('/login/sign-up');
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
          }).then()
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