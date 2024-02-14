import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
    return(
        <div>
            <Link to='/home'><button>Home</button></Link>
            <Link to='/create'><button>New driver</button></Link>
            <Link to='/about'><button>About me</button></Link>
        </div>

    )
}

export default NavBar;