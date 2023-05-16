import {NavLink} from "react-router-dom";


function NavBar(){


    return(
        <div>
            <NavLink className="navigationBar" exact to="/">Home</NavLink>
            <NavLink className="navigationBar" exact to="/AddShop" >AddShop</NavLink>
            <NavLink className="navigationBar" exact to="/AddReview">AddReview</NavLink>
        </div>
    )
}

export default NavBar;