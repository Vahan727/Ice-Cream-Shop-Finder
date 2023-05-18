import React, {useState} from 'react';
import { useHistory } from "react-router-dom";


function ShopForm(){

  const [formData, setFormData] = useState({name:"", location:"", store_image:"", description:"",favflavor: "",
          favflavor_image:"",rating: null,   cost: null, reviews:[]})
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
            <input type="text" name="name"  required placeholder="Shop name" value={formData.name} onChange={handleOnChange}/>
            <input type="text" name="image"  required placeholder="Image URL" value={formData.image} onChange={handleOnChange}/>
            <input type="text" name="favflavor_image"  required placeholder="favflavor image" value={formData.favflavor_image} onChange={handleOnChange}/>
            <input type="text" name="favflavor" required placeholder="Favflavor" value={formData.favflavor} onChange={handleOnChange}/>
            <input type="text" name="description" required placeholder="Flavor description" value={formData.description} onChange={handleOnChange}/>
            <input type="number" name="cost" required step="0.1" placeholder="Cost in $" value={formData.cost} onChange={handleOnChange}/>
            <input type="text" name="location" required placeholder="Shop location" value={formData.location} onChange={handleOnChange}/>
            <input type="number" name="rating" required  step="1" max= "5"  placeholder="Shop Rating- max is 5" value={formData.rating} onChange={handleOnChange}/>
            <button type="submit">Add Shop</button>
          </form>
        </div>
      );
}

export default ShopForm