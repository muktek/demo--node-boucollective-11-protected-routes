import React from 'react';
import {Link} from 'react-router-dom'



class ShopsMulti extends React.Component {
  render (){
    return <div className="shops-multi-page">
      <header className="shops-multi-page__header">
        <h2>Shops</h2>
      </header>
      <div className="shops-multi-page__body">
          {/* iterate + create ShopCards*/}
      </div>
    </div>
  }
}

export default ShopsMulti

const shopsData = [
  {"id":1,"name":"Peridot"},
  {"id":2,"name":"Bside"},
  {"id":3,"name":"Thrift Attic"},
  {"id":4,"name":"Mono Vector"},
  {"id":5,"name":"Corner Store"}


]
