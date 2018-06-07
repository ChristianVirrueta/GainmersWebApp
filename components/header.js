import React,{ReactElement} from 'react';
import { Menu, Dropdown, Image, Icon,Button,Message } from 'semantic-ui-react';
import{ Link,Routes} from '../routes';
import web3 from '../ethereum/web3';

const trigger = (
    <span>
      <Icon name='user' /> CapitanGafio
    
    </span>
  )
  const options = [
    {
      key: 1,
      text: '',
      value: 1,
      content:  <span>
                    <Icon name='cogs' />
                    <Link route='/configuration'>
                    <a> Configuration</a>
                    </Link>
                </span>,
    },
    {
      key: 2,
      text: 'Configuration123',
      value: 2,
      content:  <span>
                    <Icon name='currency' />
                    <Link route='/mybets'>
                    <a> My Bets</a>
                    </Link>               
                </span>,
    }
  ]


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
                <a className="item"><Image src='http://gainmers.io/DappGainmers/images/logo.png' size='small'/></a>
            </Link>
            <Menu.Menu position='right'>
                <Menu.Item>
                    <Dropdown item  text='Language'>
                    <Dropdown.Menu>
                        <Dropdown.Item >English</Dropdown.Item>
                        <Dropdown.Item>Spanish</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>

                <Menu.Item>
                    <span className="item">Wallet : </span>
                    <div className="wallet account"></div>
                    <div className="copy">Copy</div>
                </Menu.Item>

                <Menu.Item>
                    <Dropdown trigger={trigger}  options={options} item >
                    </Dropdown>
                </Menu.Item>
          
            </Menu.Menu>
       </Menu>
    );
  
}