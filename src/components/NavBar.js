import {NavLink} from "react-router-dom";


function NavBar(){

     
    const linkStyles = {
        display: "inline-block",
        width: "50px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "#1F6521",
        textDecoration: "none",
        color: "white",
      };


    return(
        <nav>
            <NavLink className="navigationBar" exact to="/"  style={linkStyles}
        activeStyle={{
          background: "#53900F",
        }}>Home</NavLink>
            <NavLink className="navigationBar" to="/new"  style={linkStyles}
        activeStyle={{
          background: "#53900F",
        }} >AddShop</NavLink>
        </nav>
    )
}

export default NavBar;