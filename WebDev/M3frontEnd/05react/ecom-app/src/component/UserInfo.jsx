import React from 'react'

export default function UserInfo(props) {

    return (
        <div>
            <h2>User Information </h2>
            <p>
                Name : {props.name}
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder='Update the name'
                    onChange={props.handleChange}
                    className='mx-2'
                />
            </p>
            <p>Email : {props.email} </p>
            <p>Age : {props.age} </p>
        </div>
    )
}
