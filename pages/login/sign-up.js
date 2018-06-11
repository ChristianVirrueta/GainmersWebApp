import React,{Component} from 'react';
import Layout from '../../components/layout1';
import{Link} from '../../routes';
import {Text,Grid, Form, Message, Image, Header,Button, Embed, Icon, Segment, Divider, Menu} from 'semantic-ui-react';


class SignUp extends Component{
    
     
    render() {


        return (
            <Layout>
          <div className='login-form'>
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    <style jsx>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 'auto';
      }
    `}</style>
    <Grid
      textAlign='center'
      style={{ height: '100%', 
                padding:'60px' }}
      verticalAlign='middle'
    >
    
      <Grid.Column style={{ maxWidth: 700 }}>
        <Header as='h2' color='teal' textAlign='center'>
        <h1>You’re almost done</h1>
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Message>
            ETH Account: <a href='#'>0x52652654523</a>
            </Message>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='Email'
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='User name'
              type='password'
            />

            <Button color='teal' fluid size='large'>Finish</Button>
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