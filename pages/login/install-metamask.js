import React,{Component} from 'react';
import Layout from '../../components/layout1';
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
            <Layout>
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
                    To add a pre-existing account to MetaMask, use the Import Account menu item. Afterward, you can configure MetaMask to use the imported account by selecting it with the Switch Accounts menu item.

Warning: Imported accounts are not protected by the seed phrase that was generated when you created your original MetaMask account and are therefore marked as loose. Therefore, back-up all account information for accounts before you import them to MetaMask.
                        </p>
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
                    To add a pre-existing account to MetaMask, use the Import Account menu item. Afterward, you can configure MetaMask to use the imported account by selecting it with the Switch Accounts menu item.

Warning: Imported accounts are not protected by the seed phrase that was generated when you created your original MetaMask account and are therefore marked as loose. Therefore, back-up all account information for accounts before you import them to MetaMask.
                        </p>
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
                    To add a pre-existing account to MetaMask, use the Import Account menu item. Afterward, you can configure MetaMask to use the imported account by selecting it with the Switch Accounts menu item.

Warning: Imported accounts are not protected by the seed phrase that was generated when you created your original MetaMask account and are therefore marked as loose. Therefore, back-up all account information for accounts before you import them to MetaMask.
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
                    To add a pre-existing account to MetaMask, use the Import Account menu item. Afterward, you can configure MetaMask to use the imported account by selecting it with the Switch Accounts menu item.

Warning: Imported accounts are not protected by the seed phrase that was generated when you created your original MetaMask account and are therefore marked as loose. Therefore, back-up all account information for accounts before you import them to MetaMask.
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
                    <p style={{ fontSize: '1.33em', textAlign: 'justify' }} >
                    To add a pre-existing account  MetaMask, 
                    use the Import Account menu item. Afterward,
                     you can configure MetaMask to use the imported 
                     account by selecting it with the Switch Accounts
                      menu item. Warning: Imported accounts are not 
                      protected by the seed phrase that was generated
                       when you created your original MetaMask account
                        and are therefore marked as loose. Therefore, 
                        back-up all account information for accounts 
                        before you import them to MetaMask.
                        </p>
                </Accordion.Content>

              
        </Accordion>

        </Layout>
        );
    }       
}
export default InstallMetamask;