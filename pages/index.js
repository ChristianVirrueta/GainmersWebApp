import React,{Component} from 'react';
import Layout from '../components/layout1';
import{Link} from '../routes';
import {Accordion,Header,Button, Embed, Icon, Segment, Divider, Menu} from 'semantic-ui-react';


class MainIndex extends Component{
    
    render() {
        return(
        <Layout>     
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