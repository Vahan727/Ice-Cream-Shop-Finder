import React from "react";
import Header from "./Header";
import ShopPage from "./ShopPage";
import ShopForm from "./ShopForm";
// import ShopDetails from "./ShopDetails";
import { Route, Switch, useLocation} from "react-router-dom";
/*
import ShopAddReview from "./ShopAddReview"
import ShopForm from "./ShopForm"
*/
// import Footer from "./Footer"


function App() {

  let location = useLocation();

  console.log(location)

  return (
    <div className="App">
      <Header />
        <Switch>
            <Route exact path="/"><ShopPage location={location} /></Route>
            <Route exact path="/new"><ShopForm location={location}/></Route>
        </Switch>
      {/* <ShopDetails /> */}
      {/*<ShopAddReview />*/}
      {/*<ShopForm />*/}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
