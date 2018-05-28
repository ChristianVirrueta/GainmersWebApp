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
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid
      textAlign='center'
      style={{ height: '100%', 
                padding:'80px' }}
      verticalAlign='middle'
    >
    
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
        You are almost done
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
              placeholder='E-mail address'
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
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