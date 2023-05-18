import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom'

function ShopDetails({location}){

const [shop, setShop] = useState([])

const {id} = useParams()

useEffect(() => {
    getShop()
}, [location])



function getShop() {
    fetch(`http://localhost:3000/shops/${id}`)
    .then(resp => resp.json())
    .then(data => setShop(data))
}


    return(
        <>
        <div>
            <figure className="detailsImg">
                <img src={shop.store_image} alt={shop.name} />
                <img src={shop.favflavor_image} alt={shop.favflavor_name} />
            </figure>
        </div>
        <div className="detailsContainer" >
                <p className="name">  {shop.name}</p>
                <p className="description"> {shop.description}</p>
                <div className="inline">
                <p className="location">Located at  {shop.location}</p>
                <p className="favFlavor">We recommend trying the  {shop.favflavor}</p>
                </div>
                <p className="rating">Rating: {shop.rating}</p>
                <p className="reviews">Reviews: {shop.reviews} </p>
                <ul className="reviews">Reviews: {shop.reviews.map((review)=>
                    <li>{review}</li>)}</ul>
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