import React from 'react';
import NotificationSystem from 'react-notification-system'
import request from 'superagent'


export default class RegisterForm  extends React.Component {

    _validateFields(emailStr, pwStr, confirmStr){
      if(emailStr.trim().length === 0 ) {
        this.refs.notificationSystem.addNotification({
          title: 'Incomplete Email Field',
          message: 'Please add your email to the to register field',
          level: 'error'
        })
        return false
      }

      if(pwStr.trim().length === 0  ) {
        this.refs.notificationSystem.addNotification({
          title: 'Incomplete Password Field',
          message: 'Please add your password to the to password field',
          level: 'error'
        })
        return false
      }

      if(pwStr !== confirmStr) {
        this.refs.notificationSystem.addNotification({
          title: 'Password Not Confirmed',
          message: 'Password field does not match confirm password field',
          level: 'error'
        })
        return false
      }

      return true

    }

   _handleResgisterClick(evt){
      evt.preventDefault()
      const theFormEl = evt.target
      console.log(theFormEl.email)
      const emailInput = theFormEl.email.value
      const pwInput = theFormEl.password.value
      const confirmPwInput = theFormEl.confirmpassword.value

      const allFieldsValid = this._validateFields(emailInput, pwInput, confirmPwInput)

      if( allFieldsValid === true ){
        request
          .post('/auth/register')
          .send({email: emailInput, password: pwInput })
          .then((serverRes)=>{
            const user = serverRes.body
            this.refs.notificationSystem.addNotification({
              title: `New Account Created`,
              message : `Please login, ${user.email}`,
              level : 'success'
            })
              setTimeout(()=>{
                this.props.history.push('/login')
            }, 3000)
          })
          .catch((err)=>{
            this.refs.notificationSystem.addNotification({
              title: `Whoops!`,
              message : `You really fucked up....`,
              level : 'error'
            })
        })
      }

    }





  render(){
    return   <div className="form form--register">
      <form onSubmit={ (evt)=>{ this._handleResgisterClick(evt) } }>
        <h2 className="form__title">Register</h2>
        <input ref="emailinput" className="form__field" type="text" name="email" placeholder="Email"/>
        <input className="form__field" type="password" name="password" placeholder="Password"/>
        <input className="form__field" type="password" name="confirmpassword" placeholder="Confirm Password"/>
        <input className="form__register-btn"type="submit" value="register"/>
      </form>

      <NotificationSystem ref="notificationSystem"/>

    </div>
}
}
