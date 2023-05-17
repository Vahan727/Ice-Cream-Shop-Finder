import {NavLink} from "react-router-dom";


function NavBar(){


    return(
        <div>
            <NavLink className="navigationBar" exact to="/">Header</NavLink>
            <NavLink className="navigationBar" exact to="/new" >AddShop</NavLink>
            <NavLink className="navigationBar" exact to="/review">AddReview</NavLink>
        </div>
    )
}

export default NavBar;