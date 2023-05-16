import {NavLink} from "react-router-dom";


function NavBar(){


    return(
        <div>
            <NavLink className="navigationBar" exact to="/">Home</NavLink>
            <NavLink className="navigationBar" exact to="/addshop" >AddShop</NavLink>
            <NavLink className="navigationBar" exact to="/addreview">AddReview</NavLink>
        </div>
    )
}

export default NavBar;