import React from 'react';
import { useContext } from 'react';

import LearnContext from './LearnContext';

// provider & consumer 


function LearnContextAPI() {

    const data = { user: 'India' };

    // const [user, setUser] = useState({name : 'Bharat'});

    return (
        <div>
            <LearnContext.Provider value={data}>

                <NavBar />
                <MainPage />

            </LearnContext.Provider>

        </div>
    )
}



function NavBar() {
    return (
        <div>Nav Bar </div>
    )
}





function MainPage() {
    return (
        <div>
            Main page
            <ContentPage />
        </div>

    )
}




function ContentPage() {
    return (
        <div>
            Content Page
            <MessagePage />
        </div>

    )
}



function MessagePage() {

    const data = useContext(LearnContext);
    return (
        <div>
            Message page

            <LearnContext.Consumer>
                {value => <h4>{value.user}</h4>}
               
            </LearnContext.Consumer>

            {data.user} 

            {/* because for this, it is must to use - useContext */}

        </div>
    )
}



export default LearnContextAPI;




