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

<Grid.Column style={{ maxWidth: 900 }}>
  <Header textAlign='center' style={{ fontSize:'30px !important', fontWeight: 'bold'}}>
    <h1 style={{backgroundColor: 'transparent !important;', backgroundImage: 'none !important'}}>Your Gainmers Account</h1>
  <p style={{ fontSize:'20px'}}> Edit your account details here</p>

  </Header>

  <Form size='large'>
    <Segment stacked>
      <h4 style={{textAlign:'left', paddingLeft:'40px', fontFamily: 'pluto-sans-regular', fontWeight: 'normal', fontSize:'20px'}}>Wallet address</h4>
      <Message style={{marginTop:'0px'}}>
      ETH Account: <a className='cuenta' >{firstAcc}</a>
      </Message>
      <h4 style={{textAlign:'left', paddingLeft:'40px', fontFamily: 'pluto-sans-regular', fontWeight: 'normal', fontSize:'20px'}}> Email</h4>

      <Form.Input
        fluid
        icon='mail'
        iconPosition='left'
        placeholder='meetliquid@hotmail.com'
      />
      <h4 style={{textAlign:'left' , paddingLeft:'40px', fontFamily: 'pluto-sans-regular', fontWeight: 'normal', fontSize:'20px'}}> Username</h4>
      <Form.Input
        fluid
        icon='user'
        iconPosition='left'
        placeholder='Developer10'
      />

      <Button color='teal' fluid size='large' style={{width:'45% !important', fontWeight: 'normal'}}>Save Account Info</Button>
    </Segment>
  </Form>
  
</Grid.Column>
</Grid>
<style>{`
      h1 {
        -webkit-text-fill-color:inherit !important;
        font-size: 50px !important;
      }

      p {
        color:#000 !important;
        font-weight: bold !important;
      }

      .ui .header {
        line-height:normal !important;
      }


    `}</style>
       </Layout>
  );
}       
}


export default userConfig;