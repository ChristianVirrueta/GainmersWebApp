import React from 'react';
import { Menu, Dropdown, Image, Icon,Button } from 'semantic-ui-react';
import{ Link} from '../routes';

const trigger = (
    <span>
     More
    
    </span>
  )
  const options = [
    {
      key: 1,
      text: '',
      value: 1,
      content:  <span>
                    <Icon name='medium' />
                    About Gainmers
                </span>,
    },
    {
      key: 2,
      text: 'Configuration123',
      value: 2,
      content:  <span>
                    <Icon name='law' />
                    User Terms
                 </span>,
    }
  ]


export default ()=> {
    return (
        <Menu style={{marginTop: '30px'}}  secondary>
            <Link route="/">
                <a className="item" >
                <Image src='http://gainmers.io/DappGainmers/images/logo.png' size='small'/>
                </a>
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
                <Menu.Item as='a'>FAQs</Menu.Item>
                <Menu.Item as='a'>Blog</Menu.Item>


                <Menu.Item>
                    <Dropdown trigger={trigger}  options={options} item >
                    </Dropdown>
                </Menu.Item>
            </Menu.Menu>
       </Menu>
    );
  
}