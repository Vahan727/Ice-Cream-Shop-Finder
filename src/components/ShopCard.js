import React from "react";
import {Link} from 'react-router-dom'

function ShopCard({shop}) {

  return (
    <ul className="card">
      <img src={shop.store_image} alt={shop.name} />
      <h4>{shop.name}</h4>
      <p>Location {shop.location}</p>
      <Link to={`/shopdetails/${shop.id}`}>
        <button className="primary" >Shop Details</button>
        </Link> 
    </ul>
  );
}


export default ShopCard;