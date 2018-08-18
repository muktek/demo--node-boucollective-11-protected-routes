import React from 'react';
class ShopCard extends React.Component {

    render(){
      return (
        <div className="shop-card">
         <img src={this.props.image_link} />
         <h3 className="shop-card__name">{this.props.name}</h3>
       </div>
      )

    }

}

export default ShopCard
