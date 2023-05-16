import React from "react"
import Header from "./Header"
import ShopPage from "./ShopPage"
import ShopDetails from "./ShopDetails"
import ShopAddReview from "./ShopAddReview"
import ShopForm from "./ShopForm"
import Footer from "./Footer"


function App() {

  return (
    <div className="App">
      <Header />
      <ShopPage />
      <ShopDetails />
      {/*<ShopAddReview />*/}
      {/*<ShopForm />*/}
      <Footer />
    </div>
  );
}

export default App;
