import React from 'react';
import request from 'superagent'

import {Link} from 'react-router-dom'
import ListingCard from './ListingCard.js'

class Listings extends React.Component {

  constructor(...args){
    super(...args)

    this.state = {
      productsApiData : []
    }
  }

  componentWillMount(){
    request
      .get('/api/products')
      .then((serverRes)=>{
        this.setState({
          productsApiData: serverRes.body
        })
      })
  }

  render (){
    const listingsData = this.state.productsApiData

    return <div className="listings-multi-page">
      <header className="listings-multi-page__header">
        <h2>Listings</h2>
      </header>
      <div className="listings-multi-page__body">
         {/* iterate + create ListingCards */}
         {
           listingsData.map( (listingObj) => {
             return <ListingCard
               {...listingObj}
               key={listingObj.id+listingObj.name}
              />
          })
        }

      </div>
    </div>
  }
}

export default Listings

const listingsDataOnStateSomeday = [
  {"id":1, "name":"Rainbow Purse", "price":73, "created_at":"2018-08-13T18:44:52.523Z","updated_at":"2018-08-13T18:44:52.523Z","vendor_id":2,"vendor":{"id":2,"name":"St. John Knits","year_established":2000,"image_link":"http://www.creativehunt.co/wp-content/uploads/2016/02/Submarine.png","premium_user":false,"created_at":"2018-08-13T18:44:52.518Z","updated_at":"2018-08-13T18:44:52.518Z"}},
  {"id":2,"name":"Neon See Through Fanny","price":27,"created_at":"2018-08-13T18:44:52.523Z","updated_at":"2018-08-13T18:44:52.523Z","vendor_id":3,"vendor":{"id":3,"name":"Wild Bloom","year_established":1983,"image_link":"http://www.creativehunt.co/wp-content/uploads/2016/02/Tornado-Simple.png","premium_user":false,"created_at":"2018-08-13T18:44:52.518Z","updated_at":"2018-08-13T18:44:52.518Z"}},
  {"id":3,"name":"Pronounce Skincare","price":43,"created_at":"2018-08-13T18:44:52.523Z","updated_at":"2018-08-13T18:44:52.523Z","vendor_id":1,"vendor":{"id":1,"name":"Peridot","year_established":2014,"image_link":"http://www.creativehunt.co/wp-content/uploads/2016/02/Church.png","premium_user":true,"created_at":"2018-08-13T18:44:52.518Z","updated_at":"2018-08-13T18:44:52.518Z"}},
  {"id":4,"name":"Matcha Specialty Tea","price":13,"created_at":"2018-08-13T18:44:52.523Z","updated_at":"2018-08-13T18:44:52.523Z","vendor_id":1,"vendor":{"id":1,"name":"Peridot","year_established":2014,"image_link":"http://www.creativehunt.co/wp-content/uploads/2016/02/Church.png","premium_user":true,"created_at":"2018-08-13T18:44:52.518Z","updated_at":"2018-08-13T18:44:52.518Z"}},{"id":5,"name":"Joico Hair Product","price":23,"created_at":"2018-08-13T18:44:52.523Z","updated_at":"2018-08-13T18:44:52.523Z","vendor_id":2,"vendor":{"id":2,"name":"St. John Knits","year_established":2000,"image_link":"http://www.creativehunt.co/wp-content/uploads/2016/02/Submarine.png","premium_user":false,"created_at":"2018-08-13T18:44:52.518Z","updated_at":"2018-08-13T18:44:52.518Z"}},{"id":6,"name":"Parseley Seed Eye Serum","price":31,"created_at":"2018-08-13T18:44:52.523Z","updated_at":"2018-08-13T18:44:52.523Z","vendor_id":3,"vendor":{"id":3,"name":"Wild Bloom","year_established":1983,"image_link":"http://www.creativehunt.co/wp-content/uploads/2016/02/Tornado-Simple.png","premium_user":false,"created_at":"2018-08-13T18:44:52.518Z","updated_at":"2018-08-13T18:44:52.518Z"}},{"id":7,"name":"Rubber Duck Socks","price":12,"created_at":"2018-08-13T18:44:52.523Z","updated_at":"2018-08-13T18:44:52.523Z","vendor_id":3,"vendor":{"id":3,"name":"Wild Bloom","year_established":1983,"image_link":"http://www.creativehunt.co/wp-content/uploads/2016/02/Tornado-Simple.png","premium_user":false,"created_at":"2018-08-13T18:44:52.518Z","updated_at":"2018-08-13T18:44:52.518Z"}},{"id":8,"name":"Parseley Seed Eye Serum","price":31,"created_at":"2018-08-13T18:44:52.523Z","updated_at":"2018-08-13T18:44:52.523Z","vendor_id":2,"vendor":{"id":2,"name":"St. John Knits","year_established":2000,"image_link":"http://www.creativehunt.co/wp-content/uploads/2016/02/Submarine.png","premium_user":false,"created_at":"2018-08-13T18:44:52.518Z","updated_at":"2018-08-13T18:44:52.518Z"}},{"id":9,"name":"Kendall Stockton Baby Dress","price":65,"created_at":"2018-08-13T18:44:52.523Z","updated_at":"2018-08-13T18:44:52.523Z","vendor_id":3,"vendor":{"id":3,"name":"Wild Bloom","year_established":1983,"image_link":"http://www.creativehunt.co/wp-content/uploads/2016/02/Tornado-Simple.png","premium_user":false,"created_at":"2018-08-13T18:44:52.518Z","updated_at":"2018-08-13T18:44:52.518Z"}},{"id":10,"name":"Elyx Bronze Chalice Set","price":48,"created_at":"2018-08-13T18:44:52.523Z","updated_at":"2018-08-13T18:44:52.523Z","vendor_id":1,"vendor":{"id":1,"name":"Peridot","year_established":2014,"image_link":"http://www.creativehunt.co/wp-content/uploads/2016/02/Church.png","premium_user":true,"created_at":"2018-08-13T18:44:52.518Z","updated_at":"2018-08-13T18:44:52.518Z"}}]
