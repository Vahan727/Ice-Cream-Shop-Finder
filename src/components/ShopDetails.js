import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom'

function ShopDetails({location}){

const [shop, setShop] = useState({reviews: []})

const {id} = useParams()

useEffect(() => {
    getShop()
}, [location])



function getShop() {
    fetch(`https://shop-data-diyq.onrender.com/shops/${id}`)
    .then(resp => resp.json())
    .then(data => setShop(data))
}

const mappedReviews = shop.reviews.map((review, index) => <p key={index}>{review}</p>)


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
                <p className="rating">Rating: {shop.rating} / 5</p>
                <p className="cost">Cost: {shop.cost}</p>
                <p className="reviews"> Reviews: </p>
                <div className="review">
                   
                        <p>{shop.reviews.length === 0 ? "This shop doesn't have any reviews." : mappedReviews}</p>
                        
                        </div>
                
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