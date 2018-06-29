import Layout from '../../client/layouts/layoutMain'
import Router from 'next/router'
import Auth from '../../client/session/authSession'
import $ from 'jquery'
import { validateEmail } from '../../client/utils/Functions'
import { currentUserLogin, validEthNet, renderizeRoutes } from '../../client/actions/authActions'
import { API_URL } from '../../client/actions/types'
import {Grid, Form, Message, Header, Button, Segment} from 'semantic-ui-react';

class SignUp extends Auth{

  componentDidMount(){
    const current = this
    current.sessionValidate(Router)

    $('button[name="submit-form"]').attr('disabled', 'disabled')

    $(document).on('keyup', 'form input', function(e){
      var $input = $(this);
      var $field = $input.parent().parent()
      var $button = $('button[name="submit-form"]')
      var $user = $('input[name="user"]')
      var $email = $('input[name="email"]')

      $button.attr('disabled', 'disabled')

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
          $button.text('Finish')
          $button.before('<h4 class="form-message" style="color: #9f3a38;">Haven\'t account selected</h4>')
          return false
        }
        if($user.val() === '' || $email.val() === ''){
          $button.text('Finish')
          $button.before('<h4 class="form-message" style="color: #9f3a38;">Please complete all fields</h4>')
          return false
        }

        var data_post = {
          name: $user.val(),
          email: $email.val(),
          password: 'password',
          address: $address.val()
        }
        $.post(API_URL+'/api/users.json', data_post, function(res){
          $button.text('Finish')
          if(res && res.id){
            $button.before('<h4 class="form-message">Thanks for register</h4>')
            $button.attr('disabled', 'disabled')

            current.setState({ email: res.email, user: res.name })
            currentUserLogin(res.id, current.state)

            const UsrJSON = validEthNet(999, 1)
            current.setState({ netRoute: UsrJSON.netRoute })
            renderizeRoutes(Router, current.state)
          }else{
            $button.before('<h4 class="form-message" style="color: #9f3a38;">An error has occurred, please try later</h4>')
          }
        })

      }, 2000)

    })
  }
  render() {
    return (
      <Layout {...this.props} style={'default'} navbar={true} footer={false} session={this.state}>
        <div className='login-form'>
          <Grid textAlign='center' style={{ height: '100%', padding:'60px' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 900 }}>
              <Header  color='teal' textAlign='center'><h1>You’re almost done</h1></Header>
              <Form size='large'>
                <Segment stacked>
                  <Message>ETH Account: <a className='sign-up-account' >{this.state.account}</a></Message>
                  <input type="hidden" name="address" value={this.state.account} />
                  <h4 style={{textAlign:'left', paddingLeft:'20px'}}> E-mail</h4>
                  <Form.Input
                    fluid
                    icon='mail'
                    iconPosition='left'
                    placeholder='meetliquid@hotmail.com' 
                    name='email'
                  />
                  <h4 style={{textAlign:'left' , paddingLeft:'20px'}}> Username</h4>
                  <Form.Input
                    fluid
                    icon='user'
                    iconPosition='left'
                    placeholder='Developer10' 
                    name='user'
                  />
                  <Button color='teal' fluid size='large' name="submit-form">Finish</Button>
                </Segment>
              </Form>
            </Grid.Column>
          </Grid>
        </div>
      </Layout>
    );
  }
}
export default SignUp;