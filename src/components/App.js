import React from "react"
import {Switch, Route} from "react-router-dom"
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
      <Switch>
      <Route path="/addshop" element={<ShopForm />}/>
      <Route path="/addreview/:id" element={<ShopAddReview />}/>
      <Route path="/shopdetails/:id" element={<ShopDetails />}/>
      <Route path="/" element={<ShopPage />}/>
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
