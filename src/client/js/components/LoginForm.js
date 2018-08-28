import React from 'react';
import request from 'superagent'
import NotificationSystem from 'react-notification-system'

export default class LoginForm  extends React.Component {


  _handleLogin(evt){
    evt.preventDefault()
    const formEl = evt.target
    const emailInput = formEl.email.value
    const pwInput = formEl.password.value
    const component = this

    request
      .post('/auth/login')
      .send({email: emailInput, password: pwInput})
      .then((serverRes)=>{
          this // --> request
          component.props.setAppState({
            currentUser : serverRes.body
          })

          component.props.history.push('/dashboard')

      })
      .catch((e)=>{
        console.log(e);
        // this.... refefs to 'request'
        component.refs.notificationSystem.addNotification({
            title: 'Unauthorized',
            message: 'Your email or password was incorrect',
            level: 'error'
          })
      })
  }

  render(){
    console.log(this.props);
    return   <div className="form form--login">
        <form onSubmit={ (evt)=>{ this._handleLogin(evt) }}>
          <h2 className="form__title">Login</h2>
          <input className="form__field" type="text" name="email" placeholder="Email"/>
          <input className="form__field" type="password" name="password" placeholder="Password"/>
          <input className="form__login-btn"type="submit" value="login"/>
        </form>

        <NotificationSystem ref="notificationSystem" />
      </div>
  }
}
