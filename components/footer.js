import React from 'react';
import NetValidation from './netValidation';
import { Menu, Dropdown,Input,Icon, Button,Image, Header } from 'semantic-ui-react';
import{ Link} from '../routes';
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
                    Configuration
                </span>,
    },
    {
      key: 2,
      text: 'Configuration123',
      value: 2,
      content:  <span>
                    <Icon name='currency' />
                    My bets
                 </span>,
    }
  ]


export default ()=> {
    return (
      <div>
        <Menu className="padding-top"  style={{marginTop: '40px', marginBottom: '40px', height: '62px', width: '100%', borderTop: '1px solid #000'}}  compact secondary>
          <Menu className="CentraFooter">
            <Menu.Item>
                    <Link route="/">
                     <Image src='http://dapp.gainmers.io/assets/images/logo-footer.png'/>
                    </Link>
                        
            </Menu.Item>           
            <Menu.Menu >
                
                <Menu.Item>
                <a className="item" style={{color:'#000000'}}>SHARE: </a>

                <div>
                    <ul className="redes">
                      <li><a href="#" className= "facebook">facebook</a></li>
                      <li><a href="#" className= "messenger">messenger</a></li>
                      <li><a href="#" className= "twitter">twitter</a></li>
                      <li><a href="#" className= "whatsapp">whatsapp</a></li>
                    </ul>

                </div>
                </Menu.Item>
                <Menu.Item>
                <a className="item" style={{color:'#000000'}}>EMAIL:  </a>
                <Link route="/">
                   <a href="mailto:contact@gainmers.com"><span className="contact">contact@gainmers.com</span></a>
                 </Link>
            </Menu.Item>
            <Menu.Item style={{color:'#000000'}}>
              <NetValidation />

            </Menu.Item>
            </Menu.Menu>
            </Menu>
       </Menu>
       </div>
    );
  
}