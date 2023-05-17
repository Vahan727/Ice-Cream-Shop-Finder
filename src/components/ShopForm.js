import React from 'react';


function ShopForm(){

    return (
        <div className="new-shop-form">
          <h2>New Shop</h2>
          <form >
            <input type="text" name="name" placeholder="Shop name" />
            <input type="text" name="image" placeholder="Image URL" />
            <input type="text" name="flavor image" placeholder="Flavor image" />
            <input type="text" name="description" placeholder="Flavor description" />
            <input type="number" name="cost" step="1.0" placeholder="Cost" />
            <input type="text" name="location" placeholder="Shop location" />
            <input type="number" name="rating" step="1.0" placeholder="Shop Rating" />
            <button type="submit">Add Shop</button>
          </form>
        </div>
      );
}

export default ShopForm