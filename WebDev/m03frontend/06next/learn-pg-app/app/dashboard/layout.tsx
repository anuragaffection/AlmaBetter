import React from "react";

const DashboardLayout = ( {children } : {children: React.ReactNode}) => {

    return (

        <div>
            <nav> Navbar </nav>

            <div>
                {children}
            </div>
        </div>
    )
}


export default DashboardLayout;