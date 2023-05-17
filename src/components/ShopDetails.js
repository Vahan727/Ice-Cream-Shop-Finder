import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'

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
                <img src="image" alt="imagename" />
                <img src="image" alt="imagename" />
            </figure>
        </div>
        <div>
                <p className="name"> Name: {shop.name}</p>
                <p className="description">Description: {shop.description}</p>
                <p className="location">Location: {shop.location}</p>
                <p className="rating">Rating: {shop.rating}</p>
                <p className="reviews">Reviews: {shop.reviews}</p>
                {/*button that routes to the ShopAddReview component*/}
            </div>
            <section>
                <ul>
                    <p className="reviews">Review here</p>
                </ul>

            </section>
            </>
        
    )
}

export default ShopDetails;