


function ShopForm(){


    return (
        <div className="new-plant-form">
          <h2>New Plant</h2>
          <form >
            <input type="text" name="name" placeholder="Shop name" />
            <input type="text" name="location" placeholder="Shop location" />
            <input type="text" name="image" placeholder="Image URL" />
            <input type="number" name="rating" step="1.0" placeholder="Shop Rating" />
            <button type="submit">Add Shop</button>
          </form>
        </div>
      );
}

export default ShopForm