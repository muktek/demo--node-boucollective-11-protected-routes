import React from 'react';
const request = require('superagent')


export default class Dashboard  extends React.Component {



  render(){
    return   <div className="dashboard">
        <h1 className="dashboard__header">User Dashboard</h1>
        <h3 className="dashboard__user">
          <span className="acct">Account:</span>
          {this.props.appState.currentUser.email}
        </h3>
        <img className="dashboard__demo-img" src="https://png.icons8.com/metro/1600/dashboard.png"/>
      </div>
  }
}
