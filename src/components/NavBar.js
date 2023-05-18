import {NavLink} from "react-router-dom";
import{HashLink as Link} from "react-router-hash-link";



function NavBar(){

    return(
        <div>
            <NavLink className="navigationBar" exact to="/">Home</NavLink>
            <NavLink className="navigationBar" exact to="/new" >Add A Shop</NavLink>
            <Link to="#contact" smooth>Contact us</Link>
           
            {/* <NavLink className="navigationBar" exact to="/review">Contact Us</NavLink> */}
        
        </div>
    )
}

export default NavBar;