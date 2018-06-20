import React,{Component} from 'react';
import Layout from '../../components/layout';
import {Input,Dimmer,Divider,Loader,Form,Message,Card,Grid,List,Tab,Header,Flag,Icon,Container,Checkbox,Button,Segment} from 'semantic-ui-react';
import {Link,Router} from '../../routes';
import Choices from '../../components/choices';
import web3 from '../../ethereum/web3';
import generator from '../../ethereum/generator.js';
import SportEvent from '../../ethereum/sportevent.js';


class MyBets extends Component {

    static async getInitialProps(props){
     
        const bet = await generator.methods.getDeployedEvents().call();

        const sportevent = SportEvent(props.query.address);

        const summary = await sportevent.methods.getDetails().call();

        var splittedName = summary[0].split(",")
    
        return {
          address: props.query.address,
          eventName: splittedName[0],
          country1: splittedName[1],
          country2: splittedName[2],
          date:splittedName[3],
          hour:splittedName[4],
          name: splittedName,
          balance: summary[1],
          devFee: summary[2],
          bet: bet
        };
      }

      state = { 
        conditionsAccepted: false,
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
        loading: false
    }

onSubmit = async (event) =>{

        event.preventDefault();
        const sportevent = SportEvent(this.props.address);

        this.setState({loading : true,
             errorMessage:''});

        try{
            const accounts = await web3.eth.getAccounts();
            const actualbet = [
                (this.state.checked1Contribution == '') ? (+this.state.checked1Contribution) : web3.utils.toWei(this.state.checked1Contribution,"ether"),
                (this.state.checked2Contribution == '') ? (+this.state.checked2Contribution) : web3.utils.toWei(this.state.checked2Contribution,"ether"),
                (this.state.checked3Contribution == '') ? (+this.state.checked3Contribution) : web3.utils.toWei(this.state.checked3Contribution,"ether"),
                (this.state.checked4Contribution == '') ? (+this.state.checked4Contribution) : web3.utils.toWei(this.state.checked4Contribution,"ether"),
                (this.state.checked5Contribution == '') ? (+this.state.checked5Contribution) : web3.utils.toWei(this.state.checked5Contribution,"ether"),
                (this.state.checked6Contribution == '') ? (+this.state.checked6Contribution) : web3.utils.toWei(this.state.checked6Contribution,"ether"),
                (this.state.checked7Contribution == '') ? (+this.state.checked7Contribution) : web3.utils.toWei(this.state.checked7Contribution,"ether"),
                (this.state.checked8Contribution == '') ? (+this.state.checked8Contribution) : web3.utils.toWei(this.state.checked8Contribution,"ether"),
                (this.state.checked9Contribution == '') ? (+this.state.checked9Contribution) : web3.utils.toWei(this.state.checked9Contribution,"ether"),
                (this.state.checked10Contribution == '') ? (+this.state.checked10Contribution) : web3.utils.toWei(this.state.checked10Contribution,"ether"),
                (this.state.checked11Contribution == '') ? (+this.state.checked11Contribution) : web3.utils.toWei(this.state.checked11Contribution,"ether"),
                (this.state.checked12Contribution == '') ? (+this.state.checked12Contribution) : web3.utils.toWei(this.state.checked12Contribution,"ether")
            ];
                
            const TotalBet = 
            (+actualbet[0]) +
            (+actualbet[1]) +
            (+actualbet[2]) +
            (+actualbet[3]) +
            (+actualbet[4]) +
            (+actualbet[5]) +
            (+actualbet[6]) +
            (+actualbet[7]) +
            (+actualbet[8]) +
            (+actualbet[9]) +
            (+actualbet[10]) +
            (+actualbet[11]) 
            ;
            console.log(actualbet);
            await sportevent.methods
                  .enterEvent(actualbet)
                  .send({
                        from: accounts[0],
                        value: TotalBet
                  })
                  //Router.pushRoute('/');

        }catch(err){
            this.setState({errorMessage: err.message.split("\n")[0]});

        }
        this.setState({loading : false});

     }
     
renderCampaigns(){

        const items = this.props.bet.map( address => {
            
            return {
                header: address,
                description: (
                <Link route={`/campaigns/${address}`}>
                <a> Detalles del Evento</a>
                </Link>
                ),
                fluid: true //para que se alargue
            };
        });

        return <Card.Group items={items}/>;
}
renderBets(){

   return( <div>
         <Dimmer active={this.state.loading} >
                <Loader  indeterminate>Metamask is procesing the transaction</Loader>
            </Dimmer>
    <List divided relaxed >
  

        {this.state.checked1 ? (
              <List.Item >
                <List.Content floated='right'>
                    <Input className="miInput"                               
                            placeholder='Value in Ether'
                            value={this.state.checked1Contribution}
                            onChange={ event=> this.setState({
                            checked1Contribution: event.target.value})}
                        />
                    <Button className="miButton"
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
                        style={{color:'#bfbfbf',
                        marginRight:'5px' , fontSize:'16px'}}>
                         0
                        </span>-
                        <span style={{
                         color:'black',
                        marginLeft:'5px', fontSize:'16px'}}>
                        0
                        </span>
                    </Header>
               </List.Content>               
             </List.Item>       
         
       ) : null }

       {this.state.checked2 ? (
              <List.Item >
                <List.Content floated='right'>
                    <Input className="miInput"                               
                            placeholder='Value in Ether'
                            value={this.state.checked2Contribution}
                            onChange={ event=> this.setState({
                            checked2Contribution: event.target.value})}
                        />
                    <Button className="miButton"
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
                        style={{color:'#bfbfbf',
                        marginRight:'5px' , fontSize:'16px'}}>
                         0
                        </span>-
                        <span style={{
                         color:'black',
                        marginLeft:'5px' , fontSize:'16px'}}>
                        1
                        </span>
                    </Header>
               </List.Content>               
             </List.Item>       
         
       ) : null }

       {this.state.checked3 ? (
              <List.Item >
                <List.Content floated='right'>
                    <Input className="miInput"                               
                            placeholder='Value in Ether'
                            value={this.state.checked3Contribution}
                            onChange={ event=> this.setState({
                            checked3Contribution: event.target.value})}
                        />
                    <Button className="miButton"
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
                        style={{color:'#bfbfbf',
                        marginRight:'5px' , fontSize:'16px'}}>
                         0
                        </span>-
                        <span style={{
                         color:'black',
                        marginLeft:'5px' , fontSize:'16px'}}>
                        2
                        </span>
                    </Header>
               </List.Content>               
             </List.Item>       
         
       ) : null }

       {this.state.checked4 ? (
              <List.Item >
                <List.Content floated='right'>
                    <Input className="miInput"                               
                            placeholder='Value in Ether'
                            value={this.state.checked4Contribution}
                            onChange={ event=> this.setState({
                            checked4Contribution: event.target.value})}
                        />
                    <Button className="miButton"
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
                        style={{color:'#bfbfbf',
                        marginRight:'5px' , fontSize:'16px'}}>
                        1
                        </span>-
                        <span style={{
                         color:'black',
                        marginLeft:'5px' , fontSize:'16px'}}>
                        0
                        </span>
                    </Header>
               </List.Content>               
             </List.Item>       
         
       ) : null }
       
       {this.state.checked5 ? (
              <List.Item >
                <List.Content floated='right'>
                    <Input className="miInput"                               
                            placeholder='Value in Ether'
                            value={this.state.checked5Contribution}
                            onChange={ event=> this.setState({
                            checked5Contribution: event.target.value})}
                        />
                    <Button className="miButton"
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
                        style={{color:'#bfbfbf',
                        marginRight:'5px' , fontSize:'16px'}}>
                        1
                        </span>-
                        <span style={{
                         color:'black',
                        marginLeft:'5px' , fontSize:'16px'}}>
                        1
                        </span>
                    </Header>
               </List.Content>               
             </List.Item>       
         
       ) : null }

       {this.state.checked6 ? (
              <List.Item >
                <List.Content floated='right'>
                    <Input className="miInput"                             
                            placeholder='Value in Ether'
                            value={this.state.checked6Contribution}
                            onChange={ event=> this.setState({
                            checked6Contribution: event.target.value})}
                        />
                    <Button className="miButton"
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
                        style={{color:'#bfbfbf',
                        marginRight:'5px' , fontSize:'16px'}}>
                        1
                        </span>-
                        <span style={{
                         color:'black',
                        marginLeft:'5px' , fontSize:'16px'}}>
                        2
                        </span>
                    </Header>
               </List.Content>               
             </List.Item>       
         
       ) : null }

       {this.state.checked7 ? (
              <List.Item >
                <List.Content floated='right'>
                    <Input className="miInput"                              
                            placeholder='Value in Ether'
                            value={this.state.checked7Contribution}
                            onChange={ event=> this.setState({
                            checked7Contribution: event.target.value})}
                        />
                    <Button className="miButton"
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
                        style={{color:'#bfbfbf',
                        marginRight:'5px' , fontSize:'16px'}}>
                        2
                        </span>-
                        <span style={{
                         color:'black',
                        marginLeft:'5px' , fontSize:'16px'}}>
                        0
                        </span>
                    </Header>
               </List.Content>               
             </List.Item>       
         
       ) : null }

       {this.state.checked8 ? (
              <List.Item >
                <List.Content floated='right'>
                    <Input className="miInput"                              
                            placeholder='Value in Ether'
                            value={this.state.checked8Contribution}
                            onChange={ event=> this.setState({
                            checked8Contribution: event.target.value})}
                        />
                    <Button className="miButton"
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
                        style={{color:'#bfbfbf',
                        marginRight:'5px' , fontSize:'16px'}}>
                        2
                        </span>-
                        <span style={{
                         color:'black',
                        marginLeft:'5px' , fontSize:'16px'}}>
                        1
                        </span>
                    </Header>
               </List.Content>               
             </List.Item>       
         
       ) : null }

       {this.state.checked9 ? (
              <List.Item >
                <List.Content floated='right'>
                    <Input className="miInput"                              
                            placeholder='Value in Ether'
                            value={this.state.checked9Contribution}
                            onChange={ event=> this.setState({
                            checked9Contribution: event.target.value})}
                        />
                    <Button className="miButton"
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
                        style={{color:'#bfbfbf',
                        marginRight:'5px' , fontSize:'16px'}}>
                        2
                        </span>-
                        <span style={{
                         color:'black',
                        marginLeft:'5px' , fontSize:'16px'}}>
                        2
                        </span>
                    </Header>
               </List.Content>               
             </List.Item>       
         
       ) : null }

       {this.state.checked10 ? (
              <List.Item >
                <List.Content floated='right'>
                    <Input className="miInput"                               
                            placeholder='Value in Ether'
                            value={this.state.checked10Contribution}
                            onChange={ event=> this.setState({
                            checked10Contribution: event.target.value})}
                        />
                    <Button className="miButton"
                     onClick={()=>{
                         this.setState((prevState , props)=>({
                            checked10: !this.state.checked10,
                            checked10Contribution: ''
                            }));
                        }}
                      icon='close'/>
                </List.Content>

                

                <List.Content >
                    <Header as='h3' className="miHeight">
                        <span 
                        style={{color:'#bfbfbf',
                        marginRight:'5px' , fontSize:'16px'}}>
                        Another<br/>
                        result<br/>
                        wins <span>{this.props.country1}</span>.  
                        </span>
                    </Header>
               </List.Content>               
             </List.Item>       
         
       ) : null }

       {this.state.checked11 ? (
              <List.Item >
                <List.Content floated='right'>
                    <Input className="miInput"                               
                            placeholder='Value in Ether'
                            value={this.state.checked11Contribution}
                            onChange={ event=> this.setState({
                            checked11Contribution: event.target.value})}
                        />
                    <Button className="miButton"
                     onClick={()=>{
                         this.setState((prevState , props)=>({
                            checked11: !this.state.checked11,
                            checked11Contribution: ''
                            }));
                        }}
                      icon='close'/>
                </List.Content>

                

                <List.Content >
                    <Header as='h3' className="miHeight">
                        <span 
                        style={{color:'#034bf8',
                        marginRight:'5px' , fontSize:'16px'}}>
                        Another<br/> 
                        result<br/>
                        tied
                        </span>
                    </Header>
               </List.Content>               
             </List.Item>       
         
       ) : null }

       {this.state.checked12 ? (
              <List.Item >
                <List.Content floated='right'>
                    <Input className="miInput"                               
                            placeholder='Value in Ether'
                            value={this.state.checked12Contribution}
                            onChange={ event=> this.setState({
                            checked12Contribution: event.target.value})}
                        />
                    <Button className="miButton"
                     onClick={()=>{
                         this.setState((prevState , props)=>({
                            checked12: !this.state.checked12,
                            checked12Contribution: ''
                            }));
                        }}
                      icon='close'/>
                </List.Content>

                

                <List.Content >
                    <Header as='h3' className="miHeight">
                        <span style={{
                         color:'black'}}>
                        Another<br/>
                        result <br/>
                        wins <span>{this.props.country2}</span>.

                        </span>
                    </Header>
               </List.Content>               
             </List.Item>       
         
       ) : null }
 
 
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
                <span className="total">Total bet:</span>
                <span className="total-eter"> {
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
                } Ether.
                </span> 
                  <br/>
                {/* <Checkbox
                 onChange={()=> {
                            this.setState({ conditionsAccepted: !this.state.conditionsAccepted });
                                }}  
                checked={this.state.conditionsAccepted}
                            label='Accept terms and conditions' className="label-align"/>*/}
                <Button className="place-bet"
                primary 
               // disabled={!this.state.conditionsAccepted}
                onClick= {this.onSubmit}               
                size='large'>
                Place bet!
            </Button>
            </Header>
            <br/>
            <p style={{textAlign:'right'}}>*Service Fee: {this.props.devFee}%</p>
            

    </Segment>
</div>);  
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
            //{ menuItem: 'My Bets', render: () => <Tab.Pane>{this.renderCampaigns()}</Tab.Pane> }
          ]
        return(
            <Layout>
                <Grid>
                    <Grid.Row>
                        <div className="titulo-02">
                    <div className="titulo-number">
                        <div className="mask-number">02</div>
                    </div>
                    <div className="titulo-content">SELECT YOUR POSSIBLE RESULT AND BET:</div>
                    <span className="subtitulo">Select one or more options from the table</span>
                </div>
                    </Grid.Row>

                    <Grid.Row>
                        <Choices/>
                    </Grid.Row>

                    <Grid.Row className="box-room">
                        <Header as='h3' color='teal' >

                        <p className="room-name"></p>
    

                        <span className="name-group">RUSSIA 2018 - {this.props.eventName}</span>
                         <span className="user-room"></span>   
                        </Header>
                    </Grid.Row>

                    <Grid.Row columns='2' divided>
                            <Grid.Column>
                            <Container text>    
                                <div className="fecha-d">
                                <Icon  name='calendar' />{this.props.date}         
                                <Icon style={{padding: '0 10px'}}name='clock' />{this.props.hour}
                                </div>
                                <div className="titulo-pais" >
                                  <div style={{display:'inline-block', verticalAlign:'middle'}}>
                                 <Flag className={this.props.country1}  />{this.props.country1}
                                 <span style={{display:'block', fontSize:'16px'}}>(Left side)</span> 
                                  </div>
                                 <div style={{display:'inline-block', verticalAlign:'top', margin:'0 20px'}}>
                                <span>   VS</span>
                                </div>
                                <div style={{display:'inline-block', verticalAlign:'middle'}}>
                                <Flag style={{padding: '10px'}} className={this.props.country2} />{this.props.country2}

                                <span style={{display:'block', fontSize:'16px'}}>(Right side)</span>
                                </div>
                                <br/>
                                
                                
                                </div>
                            </Container>
                            </Grid.Column >
                             
                            <Grid.Column >
                                <Container>
                                  <div className="mieter">
                                    <span className="text-eter">Accumulated<br/> 
                                  total of betting (ETH):</span>
                                   <span className="valor-eter"><span className="mskh">{web3.utils.fromWei(this.props.balance, 'ether')}</span></span>
                                  </div> 
                                </Container>
                            </Grid.Column>

                    </Grid.Row>

                    <Grid.Row columns='2' divided>
                        <Grid.Column >

                            <Grid columns='3'>
                            
                            <Grid.Row>
                                <Grid.Column>
                                    <Segment className="box-layout">    
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
                                                fontSize:'20px',
                                                marginRight:'5px'}}>
                                                0
                                            </span>-
                                            <span style={{
                                                color:'red',
                                                fontSize:'20px',
                                                marginLeft:'5px'}}>
                                                0
                                            </span>
                                        </Header>
                                   </Segment>
                                </Grid.Column>

                                <Grid.Column>
                                    <Segment className="box-layout">    
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
                                                fontSize:'20px',
                                                marginRight:'5px'}}>
                                                0
                                            </span>-
                                            <span style={{
                                                color:'red',
                                                fontSize:'20px',
                                                marginLeft:'5px'}}>
                                                1
                                            </span>
                                        </Header>
                                    </Segment> 
                                </Grid.Column>    

                                <Grid.Column>
                                    <Segment className="box-layout">    
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
                                                fontSize:'20px',
                                                marginRight:'5px'}}>
                                                0
                                            </span>-
                                            <span style={{
                                                color:'red',
                                                fontSize:'20px',
                                                marginLeft:'5px'}}>
                                                2
                                            </span>
                                        </Header>
                                    </Segment>
                                </Grid.Column>
                            </Grid.Row> 

                            <Grid.Row>
                                <Grid.Column>
                                <Segment className="box-layout">    
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
                                            fontSize:'20px',
                                            marginRight:'5px'}}>
                                            1
                                        </span>-
                                        <span style={{
                                            color:'red',
                                            fontSize:'20px',
                                            marginLeft:'5px'}}>
                                            0
                                        </span>
                                    </Header>
                                </Segment>
                                </Grid.Column>

                                <Grid.Column>
                                <Segment className="box-layout">    
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
                                            fontSize:'20px',
                                            marginRight:'5px'}}>
                                            1
                                        </span>-
                                        <span style={{
                                            color:'red',
                                            fontSize:'20px',
                                            marginLeft:'5px'}}>
                                            1
                                        </span>
                                    </Header> 
                                </Segment>
                                </Grid.Column>    

                                <Grid.Column>
                                <Segment className="box-layout">    
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
                                            fontSize:'20px',
                                            marginRight:'5px'}}>
                                            1
                                        </span>-
                                        <span style={{
                                            color:'red',
                                            fontSize:'20px',
                                            marginLeft:'5px'}}>
                                            2
                                        </span>
                                    </Header>
                                </Segment>
                                </Grid.Column>
                            </Grid.Row> 

                            <Grid.Row>
                                <Grid.Column>
                                <Segment className="box-layout">    
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
                                            fontSize:'20px',
                                            marginRight:'5px'}}>
                                            2
                                        </span>-
                                        <span style={{
                                            color:'red',
                                            fontSize:'20px',
                                            marginLeft:'5px'}}>
                                            0
                                        </span>
                                    </Header>
                                </Segment>
                                </Grid.Column>

                                <Grid.Column>
                                <Segment className="box-layout">    
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
                                            fontSize:'20px',
                                            marginRight:'5px'}}>
                                            2
                                        </span>-
                                        <span style={{
                                            color:'red',
                                            fontSize:'20px',
                                            marginLeft:'5px'}}>
                                            1
                                        </span>
                                    </Header> 
                                </Segment>
                                </Grid.Column>    

                                <Grid.Column>
                                <Segment className="box-layout">    
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
                                            fontSize:'20px',
                                            marginRight:'5px'}}>
                                            2
                                        </span>-
                                        <span style={{
                                            color:'red',
                                            fontSize:'20px',
                                            marginLeft:'5px'}}>
                                            2
                                        </span>
                                    </Header>
                                </Segment>
                                </Grid.Column>
                            </Grid.Row>

                            <Grid.Row>
                                <Grid.Column>
                                <Segment className="box-layout">    
                                    <Checkbox 
                                    style={{float:'right'}}
                                    onChange={()=> {
                                        this.setState({ checked10: !this.state.checked10 });
                                        }
                                    }  
                                    checked={this.state.checked10} />
                                    <Header as='h3' style={{textAlign:'left', display:'table', height:'100%'}}>
                                        <span 
                                            style={{
                                                fontSize:12,
                                                color:'#bfbfbf',
                                                fontSize:'15px !important',
                                                lineHeight:'22px',
                                                display:'table-cell',
                                            verticalAlign:'middle',
                                            paddingLeft:'25px'}}>
                                            Another<br/> 
                                            result<br/> 
                                            wins <span>{this.props.country1}</span>.

                                        </span>
                                       
                                    </Header>
                                </Segment>
                                </Grid.Column>

                                <Grid.Column>
                                <Segment className="box-layout">    
                                    <Checkbox
                                    style={{float:'right'}}
                                    onChange={()=> {
                                        this.setState({ checked11: !this.state.checked11 });
                                        }
                                    } 
                                    checked={this.state.checked11} />
                                    <Header as='h3' style={{textAlign:'left', display:'table', height:'100%'}}>
                                        <span 
                                            style={{color:'#034bf8',
                                            fontSize:'15px !important',
                                            lineHeight:'22px',
                                            display:'table-cell',
                                            verticalAlign:'middle',
                                            paddingLeft:'25px'}}>
                                            Another<br/> 
                                            result<br/>
                                            tied
                                        </span>
                                     
                                    </Header>
                                </Segment> 
                                </Grid.Column>    

                                <Grid.Column>
                                <Segment className="box-layout">    
                                    <Checkbox
                                    style={{float:'right'}} 
                                    onChange={()=> {
                                        this.setState({ checked12: !this.state.checked12 });
                                        }
                                    } 
                                    checked={this.state.checked12} />
                                    <Header as='h3' style={{textAlign:'left', display:'table', height:'100%'}}>
                                       
                                        <span style={{
                                            fontSize:'15px !important',
                                            color:'#1b1b1b',
                                            lineHeight:'22px',
                                            display:'table-cell',
                                            verticalAlign:'middle',
                                            paddingLeft:'25px'}}>
                                            Another<br/>
                                            result<br/>
                                            wins <span>{this.props.country2}</span>.
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
                        
                        <Grid.Column className="box-padding">
                            <Tab
                            defaultActiveIndex={0}
                             menu={{
                                 inverted: true,
                                 compact:true,
                                }}
                               panes={panes} />

                        </Grid.Column>



                    </Grid.Row>
                    
                </Grid>

                <style>{`
      .group-stage{
        background:#000000  !important;
        color:#ffffff !important;
      }
      .miHeight {
        line-height:22px !important;
        padding-top: 30px !important;
        
      }
.ui.header.miHeight>span  {
        font-size:16px !important;
      }
.ui.teal.header {
  color:#000 !important;
}
.ui.block.header {
  padding:30px !important;
  width:490px;
  height:200px;
  position:relative;
  display:table;
}
.place-bet {
    width: 265px;
    height: 65px;
    border-radius: 60px !important;
    background:rgba(6,44,238, 1) !important;
    position:absolute;
    bottom: -45px;
    left: 20%;
    z-index:99999 !important;
    color:#ffffff !important;
    font-family: 'pluto-sans-regular' !important;
    font-size: 22px !important;
    text-transform:capitalize !important;
}
.ui.disabled.button {
  opacity:1 !important;
  color:#ffffff !important;
  font-family: 'pluto-sans-regular' !important;
    font-size: 22px !important;
    text-transform:capitalize !important;
    background:#005fff !important;
}
label {
  color:#0156fc !important;
}

i.flag:not(.icon) {
    width: 41px !important;
    height: 31px !important;
    vertical-align: middle;
    margin: 0 5px !important;
    margin-top: -10px !important;
}

.titulo-pais {
    color: #ffffff;
    font-family: 'pluto-sans-regular' !important;
    font-size: 30px !important;
    vertical-align: middle;
}

i.icon:first-child {
  padding-left:5px !important;
}

    `}</style>
               
            </Layout>
        );
    }
}

export default MyBets;