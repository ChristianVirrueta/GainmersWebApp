import React from 'react';
import { Menu, Dropdown, Image, Icon,Button } from 'semantic-ui-react';
import{ Link} from '../routes';



export default ()=> {
    return (
        <Menu style={{marginTop: '30px', marginBottom: '60px'}}  secondary>
            <Link route="/">
                <a className="item" >
                <Image src='http://dapp.gainmers.io/assets/images/logo.png' size='small'/>
                </a>
            </Link>
            <Menu.Menu position='right'>
            <span className="item">Share : </span>
            <ul className="redes-top item">
                <li><a href="#" className="facebook">facebook</a></li>
                <li><a href="#" className="messenger">messenger</a></li>
                <li><a href="#" className="twitter">twitter</a></li>
                <li><a href="#" className="whatsapp">whatsapp</a></li>
              </ul>
                <Menu.Item>
                    <Dropdown item  text='Language'>
                    <Dropdown.Menu>
                        <Dropdown.Item >English</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
 
                <Menu.Item >
                    <Link route="/login/faqs">
                            <a>
                                FAQs
                            </a>
                </Link>
                </Menu.Item>
                <Menu.Item >
                    <Link href="https://medium.com/@gainmers1">
                            <a target='_blank'>
                                Blog
                            </a>
                </Link>
                </Menu.Item>


            </Menu.Menu>
       </Menu>
    );
  
}