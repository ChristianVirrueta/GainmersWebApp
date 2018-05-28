import React,{Component} from 'react';
import Layout from '../../components/layout';
import {Input,Dimmer,Loader,Form,Message,Card,Grid,List,Tab,Header,Flag,Icon,Container,Checkbox,Button,Segment} from 'semantic-ui-react';
import {Link,Router} from '../../routes';
import Choices from '../../components/choices';
import factory from '../../ethereum/factory.js';
import web3 from '../../ethereum/web3';


class MyBets extends Component {
    
    static async getInitialProps(){
        const campaigns =  await factory.methods.getDeployedCampaigns().call();

        return {campaigns: campaigns};// e devuelve como props
        //return {campaigns}
    }
    state = { 
        checked1: false,
        checked2: false,
        checked3: false,
        checked4: false,
        checked5: false,
        checked6: false,
        checked7: false,
        checked8: false,
        checked9: false,
        checked10: false,
        checked11: false,
        checked12: false,
        checked1Contribution:'',
        checked2Contribution:'',
        checked3Contribution:'',
        checked4Contribution:'',
        checked5Contribution:'',
        checked6Contribution:'',
        checked7Contribution:'',
        checked8Contribution:'',
        checked9Contribution:'',
        checked10Contribution:'',
        checked11Contribution:'',
        checked12Contribution:'',
        errorMessage:'',
        loading: false,
        tryValue:''


    }

onSubmit = async (event) =>{

        event.preventDefault();

        this.setState({loading : true,
             errorMessage:''});

        try{
            const accounts = await web3.eth.getAccounts();
            await factory.methods
                  .createCampaing(this.state.tryValue)
                  .send({
                        from: accounts[0]
                  })
                  Router.pushRoute('/');

        }catch(err){
            this.setState({errorMessage: err.message.split("\n")[0]});

        }
        this.setState({loading : false});

     }
     
renderCampaigns(){

        const items = this.props.campaigns.map( address => {
            
            return {
                header: address,
                description: (
                <Link route={`/campaigns/${address}`}>
                <a> Detalles de Campaña</a>
                </Link>
                ),
                fluid: true //para que se alargue
            };
        });

        return <Card.Group items={items}/>;
}
renderBets(){

   return( <div>
    <List divided relaxed >

        {this.state.checked1 ? (
              <List.Item >
                <List.Content floated='right'>
                    <Input                               
                            placeholder='Value in Ether'
                            value={this.state.checked1Contribution}
                            onChange={ event=> this.setState({
                            checked1Contribution: event.target.value})}
                        />
                    <Button
                     onClick={()=>{
                         this.setState((prevState , props)=>({
                            checked1: !this.state.checked1,
                            checked1Contribution: ''
                            }));
                        }}
                      icon='close'/>
                </List.Content>

                

                <List.Content >
                    <Header as='h3'>
                        <span 
                        style={{color:'blue',
                        marginRight:'5px'}}>
                         0
                        </span>-
                        <span style={{
                         color:'red',
                        marginLeft:'5px'}}>
                        0
                        </span>
                    </Header>
               </List.Content>               
             </List.Item>       
         
       ) : null }

       {this.state.checked2 ? (
              <List.Item >
                <List.Content floated='right'>
                    <Input                               
                            placeholder='Value in Ether'
                            value={this.state.checked2Contribution}
                            onChange={ event=> this.setState({
                            checked2Contribution: event.target.value})}
                        />
                    <Button
                     onClick={()=>{
                         this.setState((prevState , props)=>({
                            checked2: !this.state.checked2,
                            checked2Contribution: ''
                            }));
                        }}
                      icon='close'/>
                </List.Content>

                

                <List.Content >
                    <Header as='h3'>
                        <span 
                        style={{color:'blue',
                        marginRight:'5px'}}>
                         0
                        </span>-
                        <span style={{
                         color:'red',
                        marginLeft:'5px'}}>
                        1
                        </span>
                    </Header>
               </List.Content>               
             </List.Item>       
         
       ) : null }

       {this.state.checked3 ? (
              <List.Item >
                <List.Content floated='right'>
                    <Input                               
                            placeholder='Value in Ether'
                            value={this.state.checked3Contribution}
                            onChange={ event=> this.setState({
                            checked3Contribution: event.target.value})}
                        />
                    <Button
                     onClick={()=>{
                         this.setState((prevState , props)=>({
                            checked3: !this.state.checked3,
                            checked3Contribution: ''
                            }));
                        }}
                      icon='close'/>
                </List.Content>

                

                <List.Content >
                    <Header as='h3'>
                        <span 
                        style={{color:'blue',
                        marginRight:'5px'}}>
                         0
                        </span>-
                        <span style={{
                         color:'red',
                        marginLeft:'5px'}}>
                        2
                        </span>
                    </Header>
               </List.Content>               
             </List.Item>       
         
       ) : null }

       {this.state.checked4 ? (
              <List.Item >
                <List.Content floated='right'>
                    <Input                               
                            placeholder='Value in Ether'
                            value={this.state.checked4Contribution}
                            onChange={ event=> this.setState({
                            checked4Contribution: event.target.value})}
                        />
                    <Button
                     onClick={()=>{
                         this.setState((prevState , props)=>({
                            checked4: !this.state.checked4,
                            checked4Contribution: ''
                            }));
                        }}
                      icon='close'/>
                </List.Content>

                

                <List.Content >
                    <Header as='h3'>
                        <span 
                        style={{color:'blue',
                        marginRight:'5px'}}>
                        1
                        </span>-
                        <span style={{
                         color:'red',
                        marginLeft:'5px'}}>
                        0
                        </span>
                    </Header>
               </List.Content>               
             </List.Item>       
         
       ) : null }
       
       {this.state.checked5 ? (
              <List.Item >
                <List.Content floated='right'>
                    <Input                               
                            placeholder='Value in Ether'
                            value={this.state.checked5Contribution}
                            onChange={ event=> this.setState({
                            checked5Contribution: event.target.value})}
                        />
                    <Button
                     onClick={()=>{
                         this.setState((prevState , props)=>({
                            checked5: !this.state.checked5,
                            checked5Contribution: ''
                            }));
                        }}
                      icon='close'/>
                </List.Content>

                

                <List.Content >
                    <Header as='h3'>
                        <span 
                        style={{color:'blue',
                        marginRight:'5px'}}>
                        1
                        </span>-
                        <span style={{
                         color:'red',
                        marginLeft:'5px'}}>
                        1
                        </span>
                    </Header>
               </List.Content>               
             </List.Item>       
         
       ) : null }

       {this.state.checked6 ? (
              <List.Item >
                <List.Content floated='right'>
                    <Input                               
                            placeholder='Value in Ether'
                            value={this.state.checked6Contribution}
                            onChange={ event=> this.setState({
                            checked6Contribution: event.target.value})}
                        />
                    <Button
                     onClick={()=>{
                         this.setState((prevState , props)=>({
                            checked6: !this.state.checked6,
                            checked6Contribution: ''
                            }));
                        }}
                      icon='close'/>
                </List.Content>

                

                <List.Content >
                    <Header as='h3'>
                        <span 
                        style={{color:'blue',
                        marginRight:'5px'}}>
                        1
                        </span>-
                        <span style={{
                         color:'red',
                        marginLeft:'5px'}}>
                        2
                        </span>
                    </Header>
               </List.Content>               
             </List.Item>       
         
       ) : null }

       {this.state.checked7 ? (
              <List.Item >
                <List.Content floated='right'>
                    <Input                               
                            placeholder='Value in Ether'
                            value={this.state.checked7Contribution}
                            onChange={ event=> this.setState({
                            checked7Contribution: event.target.value})}
                        />
                    <Button
                     onClick={()=>{
                         this.setState((prevState , props)=>({
                            checked7: !this.state.checked7,
                            checked7Contribution: ''
                            }));
                        }}
                      icon='close'/>
                </List.Content>

                

                <List.Content >
                    <Header as='h3'>
                        <span 
                        style={{color:'blue',
                        marginRight:'5px'}}>
                        2
                        </span>-
                        <span style={{
                         color:'red',
                        marginLeft:'5px'}}>
                        0
                        </span>
                    </Header>
               </List.Content>               
             </List.Item>       
         
       ) : null }

       {this.state.checked8 ? (
              <List.Item >
                <List.Content floated='right'>
                    <Input                               
                            placeholder='Value in Ether'
                            value={this.state.checked8Contribution}
                            onChange={ event=> this.setState({
                            checked8Contribution: event.target.value})}
                        />
                    <Button
                     onClick={()=>{
                         this.setState((prevState , props)=>({
                            checked8: !this.state.checked8,
                            checked8Contribution: ''
                            }));
                        }}
                      icon='close'/>
                </List.Content>

                

                <List.Content >
                    <Header as='h3'>
                        <span 
                        style={{color:'blue',
                        marginRight:'5px'}}>
                        2
                        </span>-
                        <span style={{
                         color:'red',
                        marginLeft:'5px'}}>
                        1
                        </span>
                    </Header>
               </List.Content>               
             </List.Item>       
         
       ) : null }

       {this.state.checked9 ? (
              <List.Item >
                <List.Content floated='right'>
                    <Input                               
                            placeholder='Value in Ether'
                            value={this.state.checked9Contribution}
                            onChange={ event=> this.setState({
                            checked9Contribution: event.target.value})}
                        />
                    <Button
                     onClick={()=>{
                         this.setState((prevState , props)=>({
                            checked9: !this.state.checked9,
                            checked9Contribution: ''
                            }));
                        }}
                      icon='close'/>
                </List.Content>

                

                <List.Content >
                    <Header as='h3'>
                        <span 
                        style={{color:'blue',
                        marginRight:'5px'}}>
                        2
                        </span>-
                        <span style={{
                         color:'red',
                        marginLeft:'5px'}}>
                        2
                        </span>
                    </Header>
               </List.Content>               
             </List.Item>       
         
       ) : null }

       {this.state.checked10 ? (
              <List.Item >
                <List.Content floated='right'>
                    <Input                               
                            placeholder='Value in Ether'
                            value={this.state.checked10Contribution}
                            onChange={ event=> this.setState({
                            checked10Contribution: event.target.value})}
                        />
                    <Button
                     onClick={()=>{
                         this.setState((prevState , props)=>({
                            checked10: !this.state.checked10,
                            checked10Contribution: ''
                            }));
                        }}
                      icon='close'/>
                </List.Content>

                

                <List.Content >
                    <Header as='h3'>
                        <span 
                        style={{color:'blue',
                        marginRight:'5px'}}>
                        Wins Left Team  
                        </span>
                    </Header>
               </List.Content>               
             </List.Item>       
         
       ) : null }

       {this.state.checked11 ? (
              <List.Item >
                <List.Content floated='right'>
                    <Input                               
                            placeholder='Value in Ether'
                            value={this.state.checked11Contribution}
                            onChange={ event=> this.setState({
                            checked11Contribution: event.target.value})}
                        />
                    <Button
                     onClick={()=>{
                         this.setState((prevState , props)=>({
                            checked11: !this.state.checked11,
                            checked11Contribution: ''
                            }));
                        }}
                      icon='close'/>
                </List.Content>

                

                <List.Content >
                    <Header as='h3'>
                        <span 
                        style={{color:'gray',
                        marginRight:'5px'}}>
                        TIED
                        </span>
                    </Header>
               </List.Content>               
             </List.Item>       
         
       ) : null }

       {this.state.checked12 ? (
              <List.Item >
                <List.Content floated='right'>
                    <Input                               
                            placeholder='Value in Ether'
                            value={this.state.checked12Contribution}
                            onChange={ event=> this.setState({
                            checked12Contribution: event.target.value})}
                        />
                    <Button
                     onClick={()=>{
                         this.setState((prevState , props)=>({
                            checked12: !this.state.checked12,
                            checked12Contribution: ''
                            }));
                        }}
                      icon='close'/>
                </List.Content>

                

                <List.Content >
                    <Header as='h3'>
                        <span style={{
                         color:'red',
                        marginLeft:'5px'}}>
                        Wins Right Team
                        </span>
                    </Header>
               </List.Content>               
             </List.Item>       
         
       ) : null }
 
 <List.Content>
                    <Dimmer active={this.state.loading} >
                        <Loader  indeterminate>Procesando Transaccion</Loader>
                    </Dimmer>
                    <Form onSubmit= {this.onSubmit} 
                    error={!!this.state.errorMessage}>
                    <Form.Field>
                    <label>Minimo aporte </label>
                    </Form.Field>

                    <Input 
                            action={{
                                    color: 'teal',
                                    labelPosition: 'left',
                                    icon: 'thumb tack',
                                    content: 'Crear' }
                                }
                            
                            actionPosition='left'
                            placeholder='Value in Wei'
                            value={this.state.tryValue}
                            onChange={ event=> this.setState({
                            tryValue : event.target.value})}
                    />  
                    <Message error header="Opps!" 
                    content={this.state.errorMessage}/>
                     </Form>
    </List.Content>
    </List>
    <Segment>
            <Header
                block
                color= 'teal'
                as='h5'
                
                style={{
                    fontSize:  '1.3em',
                    fontWeight: 'normal',
                    marginTop: '1.5em',
                }}>
                Total bet:
                <span > {
                (+this.state.checked1Contribution) +
                (+this.state.checked2Contribution) +
                (+this.state.checked3Contribution) +
                (+this.state.checked4Contribution) +
                (+this.state.checked5Contribution) +
                (+this.state.checked6Contribution) +
                (+this.state.checked7Contribution) +
                (+this.state.checked8Contribution) +
                (+this.state.checked9Contribution) +
                (+this.state.checked10Contribution) +
                (+this.state.checked11Contribution) +
                (+this.state.checked12Contribution) 
                }
                </span> 
            </Header>
            <Checkbox 
                style={{float:'right'}}
                 onChange={()=> {
                            this.setState({ checked10: !this.state.checked10 });
                                }}  
                checked={this.state.checked10}
                label='Accept terms and conditions'
                />

            <Link href='https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en'>
            <a target='_blank'>
            <Button
                primary 
                disabled={!this.state.checked10}

                size='large'>
                Place bet NOW!
            </Button>  
            </a>
            </Link>  
    </Segment>  
</div>
    );

  
}
toggle = () => this.setState({
        checked1: false,
        checked2: false,
        checked3: false,
        checked4: false,
        checked5: false,
        checked6: false,
        checked7: false,
        checked8: false,
        checked9: false,
        checked10: false,
        checked11: false,
        checked12: false
})


    render(){
        const panes = [
            { menuItem: 'Bet', render: () =>
             <Tab.Pane >
             {this.renderBets()}
             </Tab.Pane> },
            { menuItem: 'My Bets', render: () => <Tab.Pane>{this.renderCampaigns()}</Tab.Pane> }
          ]
        return(
            <Layout>
                <Grid>
                    <Grid.Row>
                        <Header as='h2' color='teal' textAlign='center'>
                            02 SELECT YOUR POSSIBLE RESULT AND BET:
                        </Header>
                    </Grid.Row>

                    <Grid.Row>
                        <Choices/>
                    </Grid.Row>

                    <Grid.Row>
                        <Header as='h3' color='teal' >
                            RUSSIA 2018 - GROUP STAGE
                            <p style={{ fontSize:'15px'}}> ROOM N°15</p>

                        </Header>
                    </Grid.Row>

                    <Grid.Row columns='2' divided>
                            <Grid.Column>
                            <Container text>    
                                <Flag name={'eg'} />Egypt 
                                <span>   VS</span>
                                <Flag style={{padding: '10px'}} name={'sa'} />   Saudi Arabia<br/>
                                <Icon  name='calendar' />14 Jun 2018         
                                <Icon style={{padding: '0 10px'}}name='clock' />18:00 GTM-5
                            </Container>
                            </Grid.Column >
                             
                            <Grid.Column >
                                <Container>
                                TOTAL POOL 9 ETH
                                </Container>
                            </Grid.Column>

                    </Grid.Row>

                    <Grid.Row columns='2' divided>
                        <Grid.Column>

                            <Grid columns='3'>
                            
                            <Grid.Row>
                                <Grid.Column>
                                    <Segment>    
                                        <Checkbox 
                                        style={{float:'right'}}
                                        onChange={()=> {
                                            this.setState({ checked1: !this.state.checked1 });
                                            }
                                        }  
                                        checked={this.state.checked1} />
                                        <Header as='h3'>
                                            <span 
                                                style={{color:'blue',
                                                marginRight:'5px'}}>
                                                0
                                            </span>-
                                            <span style={{
                                                color:'red',
                                                marginLeft:'5px'}}>
                                                0
                                            </span>
                                        </Header>
                                   </Segment>
                                </Grid.Column>

                                <Grid.Column>
                                    <Segment>    
                                        <Checkbox
                                        style={{float:'right'}}
                                        onChange={()=> {
                                            this.setState({ checked2: !this.state.checked2 });
                                            }
                                        } 
                                        checked={this.state.checked2} />
                                        <Header as='h3'>
                                            <span 
                                                style={{color:'blue',
                                                marginRight:'5px'}}>
                                                0
                                            </span>-
                                            <span style={{
                                                color:'red',
                                                marginLeft:'5px'}}>
                                                1
                                            </span>
                                        </Header>
                                    </Segment> 
                                </Grid.Column>    

                                <Grid.Column>
                                    <Segment>    
                                        <Checkbox
                                        style={{float:'right'}} 
                                        onChange={()=> {
                                            this.setState({ checked3: !this.state.checked3 });
                                            }
                                        } 
                                        checked={this.state.checked3} />
                                        <Header as='h3'>
                                            <span 
                                                style={{color:'blue',
                                                marginRight:'5px'}}>
                                                0
                                            </span>-
                                            <span style={{
                                                color:'red',
                                                marginLeft:'5px'}}>
                                                2
                                            </span>
                                        </Header>
                                    </Segment>
                                </Grid.Column>
                            </Grid.Row> 

                            <Grid.Row>
                                <Grid.Column>
                                <Segment>    
                                    <Checkbox 
                                    style={{float:'right'}}
                                    onChange={()=> {
                                        this.setState({ checked4: !this.state.checked4 });
                                        }
                                    }  
                                    checked={this.state.checked4} />
                                    <Header as='h3'>
                                        <span 
                                            style={{color:'blue',
                                            marginRight:'5px'}}>
                                            1
                                        </span>-
                                        <span style={{
                                            color:'red',
                                            marginLeft:'5px'}}>
                                            0
                                        </span>
                                    </Header>
                                </Segment>
                                </Grid.Column>

                                <Grid.Column>
                                <Segment>    
                                    <Checkbox
                                    style={{float:'right'}}
                                    onChange={()=> {
                                        this.setState({ checked5: !this.state.checked5 });
                                        }
                                    } 
                                    checked={this.state.checked5} />
                                    <Header as='h3'>
                                        <span 
                                            style={{color:'blue',
                                            marginRight:'5px'}}>
                                            1
                                        </span>-
                                        <span style={{
                                            color:'red',
                                            marginLeft:'5px'}}>
                                            1
                                        </span>
                                    </Header> 
                                </Segment>
                                </Grid.Column>    

                                <Grid.Column>
                                <Segment>    
                                    <Checkbox
                                    style={{float:'right'}} 
                                    onChange={()=> {
                                        this.setState({ checked6: !this.state.checked6 });
                                        }
                                    } 
                                    checked={this.state.checked6} />
                                    <Header as='h3'>
                                        <span 
                                            style={{color:'blue',
                                            marginRight:'5px'}}>
                                            1
                                        </span>-
                                        <span style={{
                                            color:'red',
                                            marginLeft:'5px'}}>
                                            2
                                        </span>
                                    </Header>
                                </Segment>
                                </Grid.Column>
                            </Grid.Row> 

                            <Grid.Row>
                                <Grid.Column>
                                <Segment>    
                                    <Checkbox 
                                    style={{float:'right'}}
                                    onChange={()=> {
                                        this.setState({ checked7: !this.state.checked7 });
                                        }
                                    }  
                                    checked={this.state.checked7} />
                                    <Header as='h3'>
                                        <span 
                                            style={{color:'blue',
                                            marginRight:'5px'}}>
                                            2
                                        </span>-
                                        <span style={{
                                            color:'red',
                                            marginLeft:'5px'}}>
                                            0
                                        </span>
                                    </Header>
                                </Segment>
                                </Grid.Column>

                                <Grid.Column>
                                <Segment>    
                                    <Checkbox
                                    style={{float:'right'}}
                                    onChange={()=> {
                                        this.setState({ checked8: !this.state.checked8 });
                                        }
                                    } 
                                    checked={this.state.checked8} />
                                    <Header as='h3'>
                                        <span 
                                            style={{color:'blue',
                                            marginRight:'5px'}}>
                                            2
                                        </span>-
                                        <span style={{
                                            color:'red',
                                            marginLeft:'5px'}}>
                                            1
                                        </span>
                                    </Header> 
                                </Segment>
                                </Grid.Column>    

                                <Grid.Column>
                                <Segment>    
                                    <Checkbox
                                    style={{float:'right'}} 
                                    onChange={()=> {
                                        this.setState({ checked9: !this.state.checked9 });
                                        }
                                    } 
                                    checked={this.state.checked9} />
                                    <Header as='h3'>
                                        <span 
                                            style={{color:'blue',
                                            marginRight:'5px'}}>
                                            2
                                        </span>-
                                        <span style={{
                                            color:'red',
                                            marginLeft:'5px'}}>
                                            2
                                        </span>
                                    </Header>
                                </Segment>
                                </Grid.Column>
                            </Grid.Row>

                            <Grid.Row>
                                <Grid.Column>
                                <Segment>    
                                    <Checkbox 
                                    style={{float:'right'}}
                                    onChange={()=> {
                                        this.setState({ checked10: !this.state.checked10 });
                                        }
                                    }  
                                    checked={this.state.checked10} />
                                    <Header as='h3'>
                                        <span 
                                            style={{
                                                fontSize:12,
                                                color:'blue',
                                            marginRight:'5px'}}>
                                            Wins Left Team
                                        </span>
                                       
                                    </Header>
                                </Segment>
                                </Grid.Column>

                                <Grid.Column>
                                <Segment>    
                                    <Checkbox
                                    style={{float:'right'}}
                                    onChange={()=> {
                                        this.setState({ checked11: !this.state.checked11 });
                                        }
                                    } 
                                    checked={this.state.checked11} />
                                    <Header as='h3'>
                                        <span 
                                            style={{color:'gray',
                                            marginRight:'5px'}}>
                                            TIED 
                                        </span>
                                     
                                    </Header>
                                </Segment> 
                                </Grid.Column>    

                                <Grid.Column>
                                <Segment>    
                                    <Checkbox
                                    style={{float:'right'}} 
                                    onChange={()=> {
                                        this.setState({ checked12: !this.state.checked12 });
                                        }
                                    } 
                                    checked={this.state.checked12} />
                                    <Header as='h3'>
                                       
                                        <span style={{
                                            fontSize:12,
                                            color:'red',
                                            marginLeft:'5px'}}>
                                            Wins Right Team
                                        </span>
                                    </Header>
                                </Segment>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>  
                        <Button
                            style={{marginTop:'15px'}}
                            floated='right'
                            onClick={this.toggle}>
                            Uncheck all
                        </Button>                            

                        </Grid.Column>
                        
                        <Grid.Column>
                            <Tab
                             menu={{
                                 inverted: true,
                                 compact:true,
                                }}
                               panes={panes} />

                        </Grid.Column>



                    </Grid.Row>
                    
                </Grid>
               
            </Layout>
        );
    }
}

export default MyBets;
