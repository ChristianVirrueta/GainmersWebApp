import React,{Component} from 'react';
import Layout from '../../components/layout1';
import{Link} from '../../routes';
import web3 from '../../ethereum/web3';
import {Text,Grid, Form, Message, Image, Header,Button, Embed, Icon, Segment, Divider, Menu} from 'semantic-ui-react';

let firstAcc = " ";
class SignUp extends Component{
  componentDidMount(){

    web3.eth.getAccounts().then(e => {
        firstAcc=e;
            document.querySelector(".sign-up-account").innerHTML=firstAcc;     
       
    });
}


    render() {


        return (
            <Layout>
          <div className='login-form'>

    
    <Grid
      textAlign='center'
      style={{ height: '100%', 
                padding:'60px' }}
      verticalAlign='middle'
    >
    
      <Grid.Column style={{ maxWidth: 900 }}>
        <Header  color='teal' textAlign='center'>
        <h1>You’re almost done</h1>
        </Header>
        
        <Form size='large'>
          <Segment stacked>
            <Message>
            ETH Account: <a className='sign-up-account' >{firstAcc}</a>
            </Message>
            <h4 style={{textAlign:'left', paddingLeft:'20px'}}> E-mail</h4>
            <Form.Input
              fluid
              icon='mail'
              iconPosition='left'
              placeholder='meetliquid@hotmail.com'
            />
            <h4 style={{textAlign:'left' , paddingLeft:'20px'}}> Username</h4>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='Developer10'
            />
            <Link route="/betting">
                        <a>
                            <Button 
                                color='teal' 
                                fluid 
                                size='large' 
                                > 
                                Finish
                            </Button>
                        </a>
            </Link>
          </Segment>
        </Form>
        
      </Grid.Column>
    </Grid>
  </div>

             </Layout>
        );
    }       
}
export default  SignUp;