import React, {Component} from 'react';
import {Form,Message,Segment,Header,Grid,Button,Card} from 'semantic-ui-react';
import Layout from '../components/layout';
import web3 from '../ethereum/web3';

let firstAcc = " ";
function validate(name, email) {
  // true means invalid, so our conditions got reversed
  return {
    name: name.length === 0,
    email: email.length === 0,
  };
};

class userConfig extends Component {
    constructor(props) {
      super(props);
      this.state = {
          id: '',
          name: '',
          email: '',
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
          //document.querySelector(".cuenta").innerHTML=firstAcc;
          current.setState({
            address: firstAcc[0]
          });

          server_api = server_api+'?address='+firstAcc[0];
          current.api_call(server_api, 'GET').then(function(response){
              if(response.length === 1){
                current.setState({
                  id: response[0].id,
                  name: response[0].name,
                  email: response[0].email
                });
              }
          });
      });
    }
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
        id: this.state.id,
        name: this.state.name,
        email: this.state.email,
        address: this.state.address
      };
      //http://api.gainmers.io/api/users.json
      //http://localhost:8000/api/users.json
      fetch('http://api.gainmers.io/api/users.json', {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form)
      })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        if(responseJson){
          alert("Successfully!");
          location.reload();
        }else{
          alert("Please, try later");
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
      <Grid
      textAlign='center'
      style={{ height: '100%', 
                padding:'80px' }}
      verticalAlign='middle'
      >

      <Grid.Column style={{ maxWidth: 900 }}>
        <Header textAlign='center' style={{ fontSize:'30px !important', fontWeight: 'bold'}}>
          <h1 style={{background: 'transparent !important;', backgroundImage: 'none !important'}}>Your Gainmers Account</h1>
        <p style={{ fontSize:'20px'}}> Edit your account details here</p>

        </Header>

        <Form size='large'>
          <Segment stacked>
            <h4 style={{textAlign:'left', paddingLeft:'40px', fontFamily: 'pluto-sans-regular', fontWeight: 'normal', fontSize:'20px'}}>Wallet address</h4>
            <Message style={{marginTop:'0px'}}>
            ETH Account: <a className='cuenta' >{this.state.address}</a>
            </Message>
            <h4 style={{textAlign:'left', paddingLeft:'40px', fontFamily: 'pluto-sans-regular', fontWeight: 'normal', fontSize:'20px'}}> Email</h4>
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
            <h4 style={{textAlign:'left' , paddingLeft:'40px', fontFamily: 'pluto-sans-regular', fontWeight: 'normal', fontSize:'20px'}}> Username</h4>
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
                  style={{width:'45% !important', fontWeight: 'normal', marginTop:'50px'}}
                  > 
                  Save Account Info
              </Button>
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