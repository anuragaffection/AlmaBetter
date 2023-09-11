import React, { useState } from 'react'
import UserInfo from './UserInfo'

export default function UserProfile() {

    const [userCast, setUserCast] = useState(
        {
            name: 'Steve Rogers',
            email: 'captainAmericaAKAsteveRogers@gmail.com',
            age: '123',
        }
    );


    function handleChange(event){
        setUserCast( (prevState) => {
            return {...prevState, name: event.target.value}
        }
        )
            
    }



    return (

        <div className='container card bg-light my-3 py-3 px-3'>
            <h1>User Profile Page </h1>
            <UserInfo
                name={userCast.name}
                email={userCast.email}
                age={userCast.age}
                handleChange = {handleChange}
               
            />

        </div>
    )
}
