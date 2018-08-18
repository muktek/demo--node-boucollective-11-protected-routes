import React from 'react';
// Import superagent!
import request from 'superagent'

import {Link} from 'react-router-dom'
import ShopCard from './ShopCard.js'



class ShopsMulti extends React.Component {

  constructor (...args){
    super(...args)
    this.state = {
      shopsApiData : []
    }
  }

  componentWillMount(){
    request.
      get('/api/vendors')
      .then((serverRes)=>{
        console.log(serverRes.body)
        this.setState({
          shopsApiData : serverRes.body
        })
      })
  }

  render (){
    const shopsList = this.state.shopsApiData

    console.log(shopsList);
    return <div className="shops-multi-page">
      <header className="shops-multi-page__header">
        <h2>Shops</h2>
      </header>
      <div className="shops-multi-page__body">
        {
          shopsList.map( (shopObj) => {
            return <ShopCard  { ...shopObj }/>
          })
       }
      </div>
    </div>
  }
}

export default ShopsMulti

const shopsData = [
  {"id":1, "name":"Peridot"},
  {"id":2, "name":"Bside"},
  {"id":3, "name":"Thrift Attic"},
  {"id":4, "name":"Mono Vector"},
  {"id":5, "name":"Corner Store"}


]
