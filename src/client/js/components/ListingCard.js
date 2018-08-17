import React from 'react';

class ListingCard extends React.Component {

    render(){
      console.log(this.props)

      return (
        <div className="listing-card">
          <img src={`https://github.com/identicons/${this.props.id}.png`}/>
          <h4 className="listing-card__name">{this.props.name}</h4>
          <p className="listing-card__price">${this.props.price}</p>

        </div>
      )

    }

}

export default ListingCard
