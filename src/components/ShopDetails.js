import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom'

function ShopDetails(){

const [shop, setShop] = useState([])

useEffect(() => {
    getShop()
}, [])

const {id} = useParams()

function getShop() {
    fetch(`http://localhost:3000/shops/${id}`)
    .then(resp => resp.json())
    .then(data => setShop(data))
}

    return(
        <>
        <div>
            <figure>
                <img src={shop.store_image} alt={shop.name} />
                <img src={shop.favflavor_image} alt={shop.favflavor_name} />
            </figure>
        </div>
        <div>
                <p className="name"> Name: {shop.name}</p>
                <p className="description">Description: {shop.description}</p>
                <p className="location">Location: {shop.location}</p>
                <p className="flavFlavor">Rating: {shop.flavFlavor}</p>
                <p className="rating">Rating: {shop.rating}</p>
                <p className="reviews">Reviews: {shop.reviews}</p>
                {/*button that routes to the ShopAddReview component*/}
            </div>
            <section>
                <ul>
                <Link to={`/addreview/${shop.id}`}>
                    <button className="primary" >Add Review</button>
                </Link> 
                </ul>

            </section>
            </>
        
    )
}

export default ShopDetails;