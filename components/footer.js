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
        <Menu  style={{marginTop: '40px'}}  compact secondary>
            <Menu.Item>
                    <Link route="/">
                     <Image src='https://farm1.staticflickr.com/826/42126573832_d2c8ab7203_m.jpg' size='mini'/>
                    </Link>
                        <span className="item" >
                        <Icon name='copyright' />
                        2018 Gainmers Dapp
                        </span>
            </Menu.Item>           
            <Menu.Menu >
                
                <Menu.Item>
                <a className="item">Social Media |  </a>

                <div>
                    <Button circular icon='facebook' color='facebook' />
                    <Button circular icon='twitter' color='twitter' />
                    <Button circular icon='instagram' color='instagram' />
                    <Button circular icon='wechat' color='green' />
                    <Button circular icon='youtube' color='youtube' />

                </div>
                </Menu.Item>
                <Menu.Item>
                <a className="item">Contact us:  </a>
                <Link route="/">
                   <a> gainmersofficial@gainmers.io</a>
                 </Link>
            </Menu.Item>
            <Menu.Item>
                <a className="item">Term & conditions </a>
            </Menu.Item>

             
            </Menu.Menu>
       </Menu>
    );
  
}