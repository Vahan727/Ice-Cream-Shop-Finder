import React, {useState} from 'react';
import { useHistory } from "react-router-dom";


function ShopForm(){

  const [formData, setFormData] = useState({name:"", location:"", store_image:"", description:"",favflavor: "",
          favflavor_image:"",rating:0,   cost: 0, reviews:[]})
  const history = useHistory()

  function handleOnChange(e){
    setFormData({...formData, [e.target.name]: e.target.value});

  }

  function handleOnSubmit(e){
    e.preventDefault();
    fetch(`http://localhost:3000/shops/`, {
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(res=>res.json())
    .then(()=>history.push("/"))
  }


    return (
        <div className="new-shop-form">
          <h2>New Shop</h2>
          <form onSubmit={(e)=>{handleOnSubmit(e)}}>
            <input type="text" name="name" placeholder="Shop name" value={formData.name} onChange={handleOnChange}/>
            <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleOnChange}/>
            <input type="text" name="favflavor_image" placeholder="favflavor image" value={formData.favflavor_image} onChange={handleOnChange}/>
            <input type="text" name="favflavor" placeholder="Favflavor" value={formData.favflavor} onChange={handleOnChange}/>
            <input type="text" name="description" placeholder="Flavor description" value={formData.description} onChange={handleOnChange}/>
            <input type="number" name="cost" step="1.0" placeholder="Cost" value={formData.cost} onChange={handleOnChange}/>
            <input type="text" name="location" placeholder="Shop location" value={formData.location} onChange={handleOnChange}/>
            <input type="number" name="rating" step="1.0" placeholder="Shop Rating" value={formData.rating} onChange={handleOnChange}/>
            <button type="submit">Add Shop</button>
          </form>
        </div>
      );
}

export default ShopForm