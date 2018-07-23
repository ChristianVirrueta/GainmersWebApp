import { Menu, Dropdown, Image, Icon } from 'semantic-ui-react';
import{ Link } from '../../server/routes';

export function renderNavbar(props){
    if(props.style === 'session'){
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
                text: '',
                value: 2,
                content:  <span><Icon name='currency' /><Link route='/mybets'><a> My Bets</a></Link></span>,
            }
        ];
        return(
            <Menu style={{marginTop: '40px', marginBottom: '60px'}}  secondary>
                <Link route="/betting"><a className="item"><Image src='../../static/images/logo.png' size='small'/></a></Link>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Dropdown item text='Language'>
                            <Dropdown.Menu>
                                <Dropdown.Item >English</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Item>
                    <Menu.Item>
                        <span className="item">Wallet : </span>
                        <div className="wallet account">{props.session.account}</div>
                    </Menu.Item>
                    <Menu.Item>
                        <Dropdown trigger={<span><Icon name='user' /> {props.session.user}</span>}  options={options} item >
                        </Dropdown>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }

    return (
        <Menu style={{marginTop: '30px', marginBottom: '60px'}}  secondary>
            <Link route="/"><a className="item" ><Image src='../../static/images/logo.png' size='small'/></a></Link>
            <Menu.Menu position='right'>
                <span className="item">Share : </span>
                <ul className="redes-top item">
                    <li><a href="https://web.facebook.com/gainmers/" target="_blank" className="facebook">facebook</a></li>
                    <li><a href="#" className="messenger">messenger</a></li>
                    <li><a href="https://twitter.com/GMRplatform/" target="_blank" className="twitter">twitter</a></li>
                    <li><a href="https://web.whatsapp.com://send?text=http://dapp.gainmers.io/" target="_blank" className="whatsapp">whatsapp</a></li>
                </ul>
                <Menu.Item>
                    <Dropdown item text='Language'>
                        <Dropdown.Menu>
                            <Dropdown.Item >English</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
                <Menu.Item>
                    <Link route="/login/faqs"><a>FAQs</a></Link>
                </Menu.Item>
                <Menu.Item >
                    <Link href="https://medium.com/@gainmers1"><a target='_blank'>Blog</a></Link>
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )

}

export default (props)=> {
    return (
        renderNavbar(props)
    );
}