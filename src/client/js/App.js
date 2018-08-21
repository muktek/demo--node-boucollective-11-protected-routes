
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, withRouter} from 'react-router-dom';

import NoMatch404 from './components/NoMatch404.js'
import ListingsMulti from './components/ListingsMulti.js'
import ShopsMulti from './components/ShopsMulti.js'

import RegisterForm from './components/RegisterForm.js'
import LoginForm from './components/LoginForm.js'

import Dashboard from './components/Dashboard'

import Navbar from './components/Navbar.js'

import request from 'superagent'
// PART 2 - Import components + configure to router

const NavBarWithRouter = withRouter(Navbar)

class App extends React.Component {
  constructor(...args){
    super(...args)
    this.state = {
      currentUser : {}
      // currentUser : {id: 8, email: 'coolguyme@mail.com'}
    }
  }

  _setAppState(stateObj){
    this.setState(stateObj)
  }

  componentWillMount(){
    this._getCurrentUser()
  }

  _getCurrentUser(){
    const component = this
    request.get('/auth/current')
      .then((serverRes)=>{
        const userInfo = serverRes.body
        component.setState({
          currentUser : userInfo
        })
      })
  }

  render (){
    const appComponent = this
    const _setAppStateWithAppContext = this._setAppState.bind(this)
    return <div>
      <NavBarWithRouter
        {...this.props}
        setAppState={_setAppStateWithAppContext}
        appState={this.state}
      />
      <Switch>
        <Route path='/dashboard' component={(thePropsWithRouterInfo)=>{
          return <Dashboard
                  {...thePropsWithRouterInfo}
                  appState={this.state}
                />
        }}
        />
        <Route path='/signup' component={RegisterForm}/>
        <Route path='/login'
          component={ (thePropsWithRouterInfo) => {
              return <LoginForm
                {...thePropsWithRouterInfo}
                setAppState={ _setAppStateWithAppContext }
                />
          }}
        />
        <Route path='/shops' component={ShopsMulti}/>
        <Route path='/listings' component={ListingsMulti}/>
        <Route component={NoMatch404}/>
      </Switch>
    </div>
  }
}

ReactDOM.render(<BrowserRouter>
  <App/>
</BrowserRouter>, document.getElementById('app-container'));
