import React from "react";
import { Link, Outlet} from "react-router-dom"

function Main (){
    return(
        <div className="main">
            
            <Link to = "Home" className = "btn btn-success mx-2">Home </Link>
            <Link to = "About" className = "btn btn-success mx-2">About </Link>
            <Link to = "Contact" className = "btn btn-success mx-2">Contact </Link>

            <Outlet/>

        </div>
    )
}

export default Main;