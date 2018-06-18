import React,{Component} from 'react';
import Layout from '../../components/layout1';
import Encabezado from '../../components/header1';
import Head from 'next/head';
import{Link} from '../../routes';
import {Accordion,Header,Button, Embed, Icon, Segment, Container, Divider, Menu} from 'semantic-ui-react';


class InstallMetamask extends Component{
    state = { activeIndex: -1 }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index
    
        this.setState({ activeIndex: newIndex })
      }
     
    render() {
        const { activeIndex } = this.state


        return (
            <Container textAlign='center'>
            <Head>
                <link rel="stylesheet" 
                href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
                <link rel="stylesheet" 
                href="http://dapp.gainmers.io/assets/style/styles.css"></link>
            </Head>

            <Encabezado/>
             <h1 >Want to play?</h1>
            <Header
                block
                color= 'teal'
                as='h2'
                content='To play at GAINMERS You need a way to link your Ethereum wallet with the web. For that purpose you need to install Metamask addon on your Chrome or Firefox browsers. Your Metamask wallet will work as your login in this platform. Then you need to add some ether in your wallet to play.
'   
                style={{
                    fontSize:  '1.7em',
                    fontWeight: 'normal',
                    marginTop: '1.5em',
                }}
            />
            <Link href='https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en'>
            <a target='_blank' style={{position: 'relative', top: '-55px', display: 'block'}}>
            <Button primary size='huge'>
                Install Metamask
            
            </Button>  
            </a>
            </Link>

            <Link route="/">
            <a style={{position: 'relative', top: '-55px', display: 'block'}}>
            <Button primary size='huge' style={{marginTop:'40px'}}>
                Continue
            
            </Button>  
            </a>
            </Link>
            <Container style={{ padding: '40px' }}>
     
            <Embed style={{ marginBottom: 10 }}
                icon=''
                id='6Gf_kRE4MJU'
                placeholder='https://farm1.staticflickr.com/830/28305627398_ae4c376da8_z.jpg'
                source='youtube'
            />
            </Container>

                             <Accordion fluid styled>

<Accordion.Title  active={activeIndex === 0} index={0} onClick={this.handleClick}>
    <Menu secondary>
        <h3>What do I need to play ?</h3>
        <Menu.Menu position='right'>
        <Icon   size='large' name='add circle'/>
        </Menu.Menu>
    </Menu>
</Accordion.Title>
<Accordion.Content active={activeIndex === 0}>
<p>
Here’s what you need to start playing:
 </p>
 <ul>
     <li >
     <p>A computer running the desktop version of Chrome or Firefox browsers.
     </p>
     </li>
     <li >
     <p>
     Metamask, a digital Ethereum wallet used specifically with web apps.
     </p>
     </li>
     <li>
     <p>
     Ether (ETH), the form of digital payment accepted in GAINMERS.
     </p>
     </li>
 </ul>
</Accordion.Content>

<Accordion.Title  active={activeIndex === 1} index={1} onClick={this.handleClick}>
    <Menu secondary>
        <h3>Installing Metamask</h3>
        <Menu.Menu position='right'>
        <Icon   size='large' name='add circle'/>
        </Menu.Menu>
    </Menu>
</Accordion.Title>
<Accordion.Content active={activeIndex === 1}>
    <p>
    To play at GAINMERS, you need a way to link your Ethereum wallet with the web. For that purpose you need to install Metamask addon on your Chrome or Firefox browsers. Your Metamask wallet will work as your login in this platform. Then you need to add some ether in your wallet to start playing.
    </p>
        
        <Embed style={{ marginBottom: 10 } }
            icon=''
            id='6Gf_kRE4MJU'
            placeholder='https://farm1.staticflickr.com/830/28305627398_ae4c376da8_z.jpg'
            source='youtube'
        />
</Accordion.Content>
<Accordion.Title  active={activeIndex === 2} index={2} onClick={this.handleClick}>
    <Menu secondary>
        <h3>Why is Metamask Locked ?</h3>
        <Menu.Menu position='right'>
        <Icon   size='large' name='add circle'/>
        </Menu.Menu>
    </Menu>
</Accordion.Title>
<Accordion.Content active={activeIndex === 2}>
    <p>
       Each time you start your browser, your Metamask wallet will be locked. To unlock it just type your Metamask password. A piece of cake!
    </p>
</Accordion.Content>
<Accordion.Title  active={activeIndex === 3} index={3} onClick={this.handleClick}>
    <Menu secondary>
        <h3>How to get Ether?</h3>
        <Menu.Menu position='right'>
        <Icon   size='large' name='add circle'/>
        </Menu.Menu>
    </Menu>
</Accordion.Title>
<Accordion.Content active={activeIndex === 3}>
    <p>
        You will need to purchase ETH from an exchange and then transfer the ETH from your exchange wallet to your Metamask wallet. Unfortunately, you cannot play at GAINMERS with only an exchange account.
    </p>
    <p>
    You cannot use fiat money to play on GAINMERS — currencies need to be converted into ETH first. Also, some exchanges accept credit cards as payment to buy ETH.
    </p>
</Accordion.Content>


<Accordion.Title  active={activeIndex === 4} index={4} onClick={this.handleClick}>
    <Menu secondary>
        <h3>How to send Ether to metamask?</h3>
        <Menu.Menu position='right'>
        <Icon   size='large' name='add circle'/>
        </Menu.Menu>
    </Menu>
</Accordion.Title>
<Accordion.Content active={activeIndex === 4}>
    <p>
      Here we detail some steps:
    </p>
    <ul>
     <li >
     <p>
     You need to buy ETH from an exchange using normal fiat currency. 
     </p>
     </li>
     <li >
     <p>
     Copy your Metamask address by clicking on the large ‘...’ next to your account, then select ‘Copy Address to clipboard’. 
     </p>
     </li>
     <li>
     <p>
     Go to your exchange, click ‘Accounts’, and select your ETH Wallet and click ‘send’. 
     </p>
     </li>
     <li>
     <p>
     Paste the Metamask address in the box with the amount you’d like to transfer and confirm the transaction.
     </p>
     </li>
 </ul>
</Accordion.Content>


</Accordion>
</Container>
        );
    }       
}
export default InstallMetamask;