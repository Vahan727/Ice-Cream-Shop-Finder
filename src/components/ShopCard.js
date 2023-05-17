import React from "react";

function ShopCard({shop}) {

  return (
    <ul className="card">
      <img src={shop.store_image} alt={shop.name} />
      <h4>{shop.name}</h4>
      <p>Location {shop.location}</p>
        <button className="primary" >Shop Details</button> 
    </ul>
  );
}


export default ShopCard;