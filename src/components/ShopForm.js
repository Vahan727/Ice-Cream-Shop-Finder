import React, {useState} from 'react';
import { useHistory } from "react-router-dom";


function ShopForm(){

const formOutline = {name:"", location:"", store_image:"", description:"",favflavor: "",
favflavor_image:"",rating: null,   cost: null, reviews:[]}

  const [formData, setFormData] = useState(formOutline)
  const history = useHistory()

  function handleOnChange(e){
    setFormData({...formData, [e.target.name]: e.target.value});

  }

  function handleOnSubmit(e){
    e.preventDefault();
    fetch(`https://shop-data-diyq.onrender.com/shops/`, {
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(res=>res.json())
    .then(()=>history.push("/"))
    setFormData(formOutline)
  }


    return (
        <div className="new-shop-form">
          <h2>New Shop</h2>
          <form onSubmit={(e)=>{handleOnSubmit(e)}}>
            <input type="text" name="name"  required placeholder="Shop name" value={formData.name} onChange={handleOnChange}/>
            <input type="text" name="store_image"  required placeholder="Image URL" value={formData.store_image} onChange={handleOnChange}/>
            <input type="text" name="favflavor_image"  required placeholder="favflavor image" value={formData.favflavor_image} onChange={handleOnChange}/>
            <input type="text" name="favflavor" required placeholder="Favflavor" value={formData.favflavor} onChange={handleOnChange}/>
            <input type="text" name="description" required placeholder="Description" value={formData.description} onChange={handleOnChange}/>
            <select type="text" name="cost" value={formData.cost} placeholder="Cost in $" onChange={handleOnChange}>
                <option value="" disabled selected>Select Cost</option>
                <option value="$"> $ </option>
                <option value="$$"> $$ </option>
                <option value="$$$"> $$$ </option>
            </select> 
            <input type="text" name="location" required placeholder="Shop location" value={formData.location} onChange={handleOnChange}/>
            <input type="number" name="rating" required  step="1" max= "5"  placeholder="Shop Rating- max is 5" value={formData.rating} onChange={handleOnChange}/>
            <button type="submit">Add Shop</button>
          </form>
        </div>
      );
}

export default ShopForm