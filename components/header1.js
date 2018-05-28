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
        <Menu style={{marginTop: '10px'}}  secondary>
        <Menu.Item>
        <Image src='https://farm1.staticflickr.com/826/42126573832_d2c8ab7203_m.jpg' size='tiny'/>
        </Menu.Item>
            <Link route="/">
                <a className="item">GAINMERS</a>
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
                <Menu.Item as='a'>View FAQs</Menu.Item>
                <Menu.Item as='a'>Blog</Menu.Item>


                <Menu.Item>
                    <Dropdown trigger={trigger}  options={options} item >
                    </Dropdown>
                </Menu.Item>
            </Menu.Menu>
       </Menu>
    );
  
}