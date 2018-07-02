import Layout from '../client/layouts/layoutMain'
import Router from 'next/router'
import Auth from '../client/session/authSession'
import $ from 'jquery'
import { validateEmail } from '../client/utils/Functions'
import { currentUserLogin, getCurrentToken } from '../client/actions/authActions'
import { API_URL } from '../client/actions/types'
import { Form, Message, Segment, Header, Grid, Button } from 'semantic-ui-react';

class userConfig extends Auth {

  constructor(props) {
    super(props);
    this.state.form_user = ''
    this.state.form_email = ''
    this.state.form_address = ''
    this.state.touched = {
      user: false,
      email: false
    }
  }

  componentDidMount(){
    const current = this
    current.sessionValidate(Router, { onSession: true })

    $('button[name="submit-form"]').attr('disabled', 'disabled')

    $(document).on('keyup', 'form input', function(e){
      var $input = $(this);
      var $field = $input.parent().parent()
      var $button = $('button[name="submit-form"]')
      var $user = $('input[name="user"]')
      var $email = $('input[name="email"]')

      $button.attr('disabled', 'disabled')
      $('.form-message').remove();

      if($(this).val() === ''){
        $field.addClass('error')
        $input.addClass('error')
      }else{
        $field.removeClass('error')
        $input.removeClass('error')

        if($(this).attr('name') === 'email'){
          if(!validateEmail($(this).val())){
            $field.addClass('error')
            $input.addClass('error')
          }else{
            $field.removeClass('error')
            $input.removeClass('error')
          }
        }
      }

      if((!$user.hasClass('error') && !$email.hasClass('error'))
      && ($user.val()!=='' && $email.val()!=='')){
        $button.removeAttr('disabled')
      }
    })

    $(document).on('click', 'button[name="submit-form"]', function(e){
      e.preventDefault()
      $('.form-message').remove();

      var $button = $(this)
      var $user = $('input[name="user"]')
      var $email = $('input[name="email"]')
      var $address = $('input[name="address"]')

      $button.attr('disabled', 'disabled')
      $button.text('Loading...')

      setTimeout(function(){
        if($address.val() === ''){
          $button.text('Save Account Info')
          $button.before('<h4 class="form-message" style="color: #e0b4b4;">Haven\'t account selected</h4>')
          return false
        }
        if($user.val() === '' || $email.val() === ''){
          $button.text('Save Account Info')
          $button.before('<h4 class="form-message" style="color: #e0b4b4;">Please complete all fields</h4>')
          return false
        }

        let local = getCurrentToken(localStorage.jwtToken)
        var data_post = {
          id: local.token_.id,
          name: $user.val(),
          email: $email.val(),
          address: $address.val()
        }

        $.ajax({
          url: API_URL+'/api/users.json',
          type: 'PUT',
          data: data_post,
          success: function(res) {
            $button.text('Save Account Info')
            if(res){
              $button.before('<h4 class="form-message">Your register has been updated.</h4>')
              current.setState({ email: data_post.email, user: data_post.name })
              currentUserLogin(data_post.id, current.state)
            }else{
              $button.before('<h4 class="form-message" style="color: #9f3a38;">An error has occurred, please try later</h4>')
            }
          }
        })

      }, 2000)

    })
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }
  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    })
  }

  render() {
    return (
      <Layout {...this.props} style={'session'} navbar={true} footer={true} session={this.state}>
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
                <Message style={{marginTop:'0px'}}>ETH Account: <a className='cuenta' >{this.state.account}</a></Message>
                <input type="hidden" name="address" value={this.state.account} />
                <h4 style={{textAlign:'left', paddingLeft:'40px', fontFamily: 'pluto-sans-regular', fontWeight: 'normal', fontSize:'20px'}}> E-mail</h4>
                <Form.Input
                  fluid
                  icon='mail'
                  iconPosition='left'
                  placeholder='meetliquid@hotmail.com' 
                  name='email' 
                  onChange={e => this.handleChange(e)} 
                  onBlur={this.handleBlur('email')} 
                  value={this.state.email}
                />
                <h4 style={{textAlign:'left' , paddingLeft:'40px', fontFamily: 'pluto-sans-regular', fontWeight: 'normal', fontSize:'20px'}}> Username</h4>
                <Form.Input
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='Developer10' 
                  name='user' 
                  onChange={e => this.handleChange(e)} 
                  onBlur={this.handleBlur('user')} 
                  value={this.state.user}
                />
                <Button color='teal' fluid size='large' style={{width:'45% !important', fontWeight: 'normal', marginTop:'50px'}} name="submit-form"> Save Account Info</Button>
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