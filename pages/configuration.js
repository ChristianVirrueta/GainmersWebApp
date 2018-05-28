import React, {Component} from 'react';
import {Form,Message,Segment,Header,Grid,Button,Card} from 'semantic-ui-react';
import Layout from '../components/layout';
import factory from '../ethereum/factory.js';

import Choices from '../components/choices';
import web3 from '../ethereum/web3';

let firstAcc = " ";

class userConfig extends Component {
    componentDidMount(){

        web3.eth.getAccounts().then(e => {
            firstAcc=e;
                document.querySelector(".cuenta").innerHTML=firstAcc;     
           
        });
    }
   
    static async getInitialProps(){
        const campaigns =  await factory.methods.getDeployedCampaigns().call();
        return {campaigns: campaigns};// e devuelve como props
        //return {campaigns}
    }  
    renderCampaigns(){

        const items = this.props.campaigns.map( address => {
            return {
                header: address,
                description: (
                
                <a> Detalles de Campaña</a>
          
                ),
                fluid: true //para que se alargue
            };
        });

        return <Card.Group items={items}/>;
    } 
    
render() {




return (
    <Layout>
    <div className='login-form'>
{/*
Heads up! The styles below are necessary for the correct render of this example.
You can do same with CSS, the main idea is that all the elements up to the `Grid`
below must have a height of 100%.
*/}

<Grid
textAlign='center'
style={{ height: '100%', 
          padding:'80px' }}
verticalAlign='middle'
>

<Grid.Column style={{ maxWidth: 450 }}>
  <Header as='h2' color='orange' textAlign='center'>
  Your Gainmers Account
  <p style={{ fontSize:'15px'}}> Edit your account details here</p>

  </Header>

  <Form size='large'>
    <Segment stacked>
      <Message >
      ETH Account: <a className='cuenta' >{firstAcc}</a>
      </Message>
      <h4 style={{textAlign:'left'}}> E-mail</h4>

      <Form.Input
        fluid
        icon='mail'
        iconPosition='left'
        placeholder='meetliquid@hotmail.com'
      />
      <h4 style={{textAlign:'left'}}> Username</h4>
      <Form.Input
        fluid
        icon='user'
        iconPosition='left'
        placeholder='Developer10'
      />

      <Button color='teal' fluid size='large'>Save Account Info</Button>
    </Segment>
  </Form>
  
</Grid.Column>
</Grid>
{this.renderCampaigns()}
</div>

       </Layout>
  );
}       
}


export default userConfig;