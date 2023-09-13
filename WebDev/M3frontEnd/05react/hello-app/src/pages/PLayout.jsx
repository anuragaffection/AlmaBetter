import React from 'react';
import { Outlet, Link } from 'react-router-dom';


export default function PLayout() {

    return (
        <>
            <nav>
                <ul>

                    <li>
                        <Link to='/'>Home </Link>
                    </li>

                    <li>
                        <Link to ='/blogs'> Blogs </Link>
                    </li>

                    <li>
                        <Link to ='/contact'>Contact </Link>
                    </li>

                </ul>
            </nav>

            <Outlet/>
        </>
    )

}


// we will use     <Link>    instead of     <a href="">

// The     <Outlet>      renders the current route selected.
