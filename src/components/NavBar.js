import {NavLink} from "react-router-dom";


function NavBar(){

    return(
        <div>
            <NavLink className="navigationBar" exact to="/">Home</NavLink>
            <NavLink className="navigationBar" exact to="/new" >AddShop</NavLink>
            <NavLink className="navigationBar" exact to="/review">Contact Us</NavLink>
        </div>
    )
}

export default NavBar;