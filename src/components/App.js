import React, {useState, useEffect} from "react"
import Header from "./Header"
import ShopPage from "./ShopPage"
import Footer from "./Footer"

function App() {

const [shops, setShops] = useState([])

function getShops() {
  fetch('')
  .then(resp => resp.json())
  .then(data => setShops(data))
}

  return (
    <div className="App">
      <Header />
      <ShopPage />
      <Footer />
    </div>
  );
}

export default App;
