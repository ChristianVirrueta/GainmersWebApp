import React,{ReactElement,Component} from 'react';
import { Menu, Dropdown, Image, Icon,Button,Message } from 'semantic-ui-react';
import{ Link,Routes} from '../server/routes';
import web3 from '../ethereum/web3';

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
    //{
      //key: 2,
      //text: 'Configuration123',
      //value: 2,
      //content:  <span><Icon name='currency' /><Link route='/mybets'><a> My Bets</a></Link></span>,
    //}
];

let firstAcc= " ";
class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            address:''
        };
    };
    api_call = async function(path, method){
        const rest = await fetch(path,{
            method: method
        });
        const response = await rest.json();
        return response;
    };
    componentDidMount(){
        let current = this;
        let server_api = 'http://api.gainmers.io/api/users/find';
        web3.eth.getAccounts().then(e => {
            firstAcc=e;
            //document.querySelector(".account").innerHTML=firstAcc;
            current.setState({
                address: firstAcc[0]
            });

            server_api = server_api+'?address='+firstAcc[0];
            current.api_call(server_api, 'GET').then(function(response){
                if(response.length === 1){
                  current.setState({
                    name: response[0].name,
                    email: response[0].email
                  });
                }
            });
        });
    }


    render(){
        return(
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
                    <div className="wallet account">{this.state.address}</div>
                </Menu.Item>
                <Menu.Item>
                    <Dropdown trigger={<span><Icon name='user' /> {this.state.name}</span>}  options={options} item >
                    </Dropdown>
                </Menu.Item>
            </Menu.Menu>
       </Menu>
        );
    }
};

export default Header;