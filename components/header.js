import React,{ReactElement} from 'react';
import { Menu, Dropdown, Image, Icon,Button,Message } from 'semantic-ui-react';
import{ Link,Routes} from '../routes';
import web3 from '../ethereum/web3';

export default ()=> {
    let firstAcc= " ";
    
    web3.eth.getAccounts().then(e => {
        firstAcc=e;
            document.querySelector(".account")
            .innerHTML=firstAcc;     
    });
    
   

    return (
        <Menu style={{marginTop: '40px', marginBottom: '60px'}}  secondary>
            <Link route="/betting">
                <a className="item"><Image src='http://dapp.gainmers.io/assets/images/logo.png' size='small'/></a>
            </Link>
            <Menu.Menu position='right'>
                <Menu.Item>
                    <Dropdown item  text='Language'>
                    <Dropdown.Menu>
                        <Dropdown.Item >English</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>

                <Menu.Item>
                    <span className="item">Wallet : </span>

                    <div className="wallet account"/>
  
                </Menu.Item>

          
            </Menu.Menu>
       </Menu>
    );
  
}