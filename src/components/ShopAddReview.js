import React, {useState, useEffect} from 'react';
import {useParams, Link, useHistory} from 'react-router-dom'


function ShopAddReview() {

    const [shop, setShop] = useState({})

    const {id} = useParams()
    const {history} = useHistory()

    useEffect(() => {
      getShop()
    }, [])
    
    function getShop() {
      fetch(`http://localhost:3000/shops/${id}`)
      .then(resp => resp.json())
      .then(data => setShop(data))
    }

const [newReview, setNewReview] = useState('')

function handleOnChangeReview(e) {
    setNewReview(e.target.value)
} 


function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:3000/shops/${id}`, {
      method:"PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify([...shop.reviews, newReview])
    })
    .then(res=>res.json())
    .then(()=>history.push(`/shopdetails/${id}`))
    setNewReview()
}


    return (
        <div>
            <h1>New Review</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <textarea value={newReview} name="review" maxLength="200" placeholder="Write your review here!" onChange={handleOnChangeReview}></textarea>
                <Link to={`/shopdetails/${id}`}>
                <button type="button" >Add Review</button>
                </Link>
                
            </form>
        </div>
    )
}

export default ShopAddReview;