import React,{Component} from 'react';
import Layout from '../../components/layout1';
import{Link} from '../../routes';
import web3 from '../../ethereum/web3';
import {Text,Grid, Form, Message, Image, Header,Button, Embed, Icon, Segment, Divider, Menu} from 'semantic-ui-react';
import Router from 'next/router';

let firstAcc = " ";
function validate(name, email) {
  // true means invalid, so our conditions got reversed
  return {
    name: name.length === 0,
    email: email.length === 0,
  };
};

class SignUp extends Component{
  constructor(props) {
    super(props);
    this.state = {
        name:'',
        email:'', 
        address:'', 
        touched: {
          name: false,
          email: false,
        }
    };
  };
  api_call = async function(path, method){
    const rest = await fetch(path,{
        method: method
    });
    const response = await rest.json();
    return response;
  };
  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  };
  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };
  canBeSubmitted() {
    const errors = validate(this.state.name, this.state.email);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  };
  componentDidMount(){

    let current = this;
    let server_api = 'http://api.gainmers.io/api/users/find';

    web3.eth.getAccounts().then(e => {
      firstAcc=e;
      //document.querySelector(".sign-up-account").innerHTML=firstAcc;
      current.setState({
        address: firstAcc[0]
      });

      server_api = server_api+'?address='+firstAcc[0];
      current.api_call(server_api, 'GET').then(function(response){
          if(response.length === 1){
            current.setState({
              name: response[0].name,
              email: response[0].email
            });
          }
      });

    });
  };
  sign_up = (event) =>{
    event.preventDefault();
    event.stopPropagation();
    /*
    if(this.state.name === '' || this.state.email === ''){
      console.log("empty!");
      return false;
    }
    */
    if (!this.canBeSubmitted()) {
      return;
    }
    let form = {
      name: this.state.name,
      email: this.state.email,
      password: 'password',
      address: this.state.address
    };

    //http://api.gainmers.io/api/users.json
    //http://localhost:8000/api/users.json
    fetch('http://api.gainmers.io/api/users.json', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form)
    })
    .then((response) => response.json())
    .then((responseJson) => {
      if(responseJson.id){
        alert("Successfully!");
        Router.pushRoute('/betting');
      }else{
        alert("Please, try later");
        //Router.pushRoute('/login/sign-up');
      }
    });
  };


    render() {

      const errors = validate(this.state.name, this.state.email);
      const isDisabled = Object.keys(errors).some(x => errors[x]);
      const shouldMarkError = (field) => {
        const hasError = errors[field];
        const shouldShow = this.state.touched[field];
        
        return hasError ? shouldShow : false;
      };

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
            ETH Account: <a className='sign-up-account' >{this.state.address}</a>
            </Message>
            <h4 style={{textAlign:'left', paddingLeft:'20px'}}> E-mail</h4>
            <Form.Input
              fluid
              icon='mail'
              iconPosition='left'
              placeholder='meetliquid@hotmail.com' 
              name='email' 
              value={this.state.email} 
              onChange={e => this.handleChange(e)} 
              onBlur={this.handleBlur('email')} 
              className={shouldMarkError('email') ? "error" : ""}
            />
            <h4 style={{textAlign:'left' , paddingLeft:'20px'}}> Username</h4>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='Developer10' 
              name='name' 
              value={this.state.name} 
              onChange={e => this.handleChange(e)} 
              onBlur={this.handleBlur('name')} 
              className={shouldMarkError('name') ? "error" : ""}
            />
            <Button 
                color='teal' 
                fluid 
                size='large' 
                onClick={(e) => this.sign_up(e)} 
                disabled={isDisabled}
                > 
                Finish
            </Button>
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