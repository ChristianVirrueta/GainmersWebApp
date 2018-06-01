import React from 'react';
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
        <Menu  style={{marginTop: '40px', marginBottom: '40px', height: '62px', width: '100%'}}  compact secondary>
          <Menu className="CentraFooter">
            <Menu.Item>
                    <Link route="/">
                     <Image src='http://gainmers.io/DappGainmers/images/logo-footer.png'/>
                    </Link>
                        
            </Menu.Item>           
            <Menu.Menu >
                
                <Menu.Item>
                <a className="item">SHARE: </a>

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
                <a className="item">EMAIL:  </a>
                <Link route="/">
                   <a href="mailto:contact@gainmers.com"><span className="contact">contact@gainmers.com</span></a>
                 </Link>
            </Menu.Item>
            </Menu.Menu>
            </Menu>
       </Menu>
    );
  
}