import React from "react"
import {Switch, Route, useLocation} from "react-router-dom"
import Header from "./Header"
import ShopPage from "./ShopPage"
import ShopDetails from "./ShopDetails"
import ShopAddReview from "./ShopAddReview"
import ShopForm from "./ShopForm"
import Footer from "./Footer"


function App() {

  const location = useLocation()

  return (
    <div className="App">
      <Header />
      <Switch>
      <Route path="/new"> <ShopForm location={location}/> </Route>
      <Route path="/addreview/:id"> <ShopAddReview location={location}/> </Route>
      <Route path="/shopdetails/:id"> <ShopDetails location={location} /> </Route>
      <Route path="/"> <ShopPage location={location}/> </Route>
      </Switch>
      <Footer />
    </div>
  );
}

/*
<Routes>
				<Route path="/projects/:id" element={<ProjectDetails />} />
					<Route path="/projects/:id/edit" element={<EditProjectForm />} />
					<Route exact path="/home" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route exact path="/new" element={<CreateProjectForm />} />
					<Route exact path="/projects" element={<ProjectsPage />} />
					
					<Route exact path="/" element={<Home />} />
				</Routes>
*/


export default App;
