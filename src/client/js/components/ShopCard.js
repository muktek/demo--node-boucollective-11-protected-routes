import React from 'react';

const ShopCard = ()=>{
  render (){
    return <div className="shop-card">
      <img src={`https://ui-avatars.com/api/?background=0D8ABC&color=fff&size=300&name=`${o.name.split(' ').join('+')}}/>
      <h3 className="shop-card__name">{o.name}</h3>
    </div>
  }
}

export default ShopCard
