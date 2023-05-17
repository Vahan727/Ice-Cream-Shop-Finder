import {NavLink} from "react-router-dom";


function NavBar(){


    return(
        <div >
            <NavLink className="navigationBar" exact to="/">Home</NavLink>
            <NavLink className="navigationBar" exact to="/addshop" >Add a Shop</NavLink>
            <NavLink className="navigationBar" exact to="/addreview">Add a Review</NavLink>
        </div>
    )
}

export default NavBar;