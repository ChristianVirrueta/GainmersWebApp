import React, {Component} from 'react';
import {Form,Message,Segment,Header,Grid,Button,Card} from 'semantic-ui-react';
import Layout from '../components/layout';
import web3 from '../ethereum/web3';

let firstAcc = " ";

class userConfig extends Component {
    componentDidMount(){

        web3.eth.getAccounts().then(e => {
            firstAcc=e;
                document.querySelector(".cuenta").innerHTML=firstAcc;     
           
        });
    }


    
render() {




return (
    <Layout>



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



       </Layout>
  );
}       
}


export default userConfig;