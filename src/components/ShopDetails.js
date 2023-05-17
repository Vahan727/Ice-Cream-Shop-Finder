

function ShopDetail(){



    return(
        <><div>
            <figure>
                <img src="shop image" alt="shop name" />
                <img src="flavor image" alt="flavor name" />
            </figure>
        </div><div>
                <p className="name"> Name: </p>
                <p className="description">Description: </p>
                <p className="cost">Cost: </p>
                <p className="location">Location: </p>
                <p className="rating">Rating: </p>
            </div>
            <section>
                <ul>
                    <p className="reviews">Review here</p>
                </ul>

            </section>
            </>
    
    
        
    )
}

export default ShopDetail;