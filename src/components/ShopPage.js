import React, {useState, useEffect} from 'react';
import ShopCard from './ShopCard'

function ShopPage() {

    const [shops, setShops] = useState([])

    useEffect(() => {
      getShops()
    }, [])
    
    function getShops() {
      fetch('http://localhost:3000/shops')
      .then(resp => resp.json())
      .then(data => setShops(data))
    }

    const mappedShops = shops.map((shop) => {
        return (
        <ShopCard 
          key={shop.id}
          shop={shop}
          />
        )
      })   

    return (
        <main>
            {mappedShops}
        </main>
    )
}

export default ShopPage