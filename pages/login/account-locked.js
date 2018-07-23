import Layout from '../../client/layouts/layoutMain'
import Router from 'next/router'
import Auth from '../../client/session/authSession'
import $ from 'jquery'
import { Link } from '../../server/routes';
import { Accordion, Header, Button, Embed, Icon, Divider, Menu} from 'semantic-ui-react';

class AccountLocked extends Auth{

    componentDidMount(){
        this.sessionValidate(Router)
        $(document).on('click', '.accordion .title .circle', function(e){
            var $title = $(this).parent().parent().parent()
            var $content = $title.next()
            if(!$title.hasClass('active')){
                $title.addClass('active')
                $content.addClass('active')
            }else{
                $title.removeClass('active')
                $content.removeClass('active')
            }
        })
    }

    render() {
        return (
            <Layout {...this.props} style={'default'} navbar={true} footer={true} session={this.state}>
                <div style={{ textAlign: 'center' }}>
                    <h1>Your Metamask is Locked</h1>
                    <Header 
                        color= 'teal'
                        as='h2'
                        content='Please unlock your Metamask just by typing your password to start playing.'
                        style={{
                        fontSize:  '1.7em',
                        fontWeight: 'normal',
                        marginTop: '1.5em',
                        }}
                    />
                    <Link route="/">
                        <a target='_blank'><Button primary size='huge'>Continue <Icon name='right arrow' /></Button></a>
                    </Link>

                    <Divider hidden/>
                    <Divider hidden/>

                    <h3 style={{textAlign: 'left', padding: '0 1em', marginBottom: '40px' }}>For beginers  - FAQs</h3>

                    <Accordion fluid styled>
                        <Accordion.Title>
                            <Menu secondary>
                                <h3>What do I need to play ?</h3>
                                <Menu.Menu position='right'><Icon size='large' name='add circle'/></Menu.Menu>
                            </Menu>
                        </Accordion.Title>
                        <Accordion.Content>
                            <p>Here’s what you need to start playing:</p>
                            <ul>
                                <li ><p>A computer running the desktop version of Chrome or Firefox browsers.</p></li>
                                <li ><p>Metamask, a digital Ethereum wallet used specifically with web apps.</p></li>
                                <li><p>Ether (ETH), the form of digital payment accepted in GAINMERS.</p></li>
                            </ul>
                        </Accordion.Content>
                        <Accordion.Title>
                            <Menu secondary>
                                <h3>Installing Metamask</h3>
                                <Menu.Menu position='right'><Icon size='large' name='add circle'/></Menu.Menu>
                            </Menu>
                        </Accordion.Title>
                        <Accordion.Content>
                            <p>To play at GAINMERS, you need a way to link your Ethereum wallet with the web. For that purpose you need to install Metamask addon on your Chrome or Firefox browsers. Your Metamask wallet will work as your login in this platform. Then you need to add some ether in your wallet to start playing.</p>
                            <Embed style={{ marginBottom: 10 }}
                                icon=''
                                id='6Gf_kRE4MJU'
                                placeholder='https://farm1.staticflickr.com/830/28305627398_ae4c376da8_z.jpg'
                                source='youtube'
                            />
                        </Accordion.Content>
                        <Accordion.Title>
                            <Menu secondary>
                                <h3>Why is Metamask Locked ?</h3>
                                <Menu.Menu position='right'><Icon size='large' name='add circle'/></Menu.Menu>
                            </Menu>
                        </Accordion.Title>
                        <Accordion.Content>
                            <p>Each time you start your browser, your Metamask wallet will be locked. To unlock it just type your Metamask password. A piece of cake!</p>
                        </Accordion.Content>
                        <Accordion.Title>
                            <Menu secondary>
                                <h3>How to get Ether?</h3>
                                <Menu.Menu position='right'><Icon size='large' name='add circle'/></Menu.Menu>
                            </Menu>
                        </Accordion.Title>
                        <Accordion.Content>
                            <p>You will need to purchase ETH from an exchange and then transfer the ETH from your exchange wallet to your Metamask wallet. Unfortunately, you cannot play at GAINMERS with only an exchange account.</p>
                            <p>You cannot use fiat money to play on GAINMERS — currencies need to be converted into ETH first. Also, some exchanges accept credit cards as payment to buy ETH.</p>
                        </Accordion.Content>
                        <Accordion.Title>
                            <Menu secondary>
                                <h3>How to send Ether to metamask?</h3>
                                <Menu.Menu position='right'><Icon size='large' name='add circle'/></Menu.Menu>
                            </Menu>
                        </Accordion.Title>
                        <Accordion.Content>
                            <p>Here we detail some steps:</p>
                            <ul>
                                <li ><p>You need to buy ETH from an exchange using normal fiat currency. </p></li>
                                <li ><p>Copy your Metamask address by clicking on the large ‘...’ next to your account, then select ‘Copy Address to clipboard’. </p></li>
                                <li><p>Go to your exchange, click ‘Accounts’, and select your ETH Wallet and click ‘send’. </p></li>
                                <li><p>Paste the Metamask address in the box with the amount you’d like to transfer and confirm the transaction.</p></li>
                            </ul>
                        </Accordion.Content>
                    </Accordion>
                </div>
             </Layout>
        );
    }       
}
export default  AccountLocked;