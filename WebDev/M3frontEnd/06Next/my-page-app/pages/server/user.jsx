import React from 'react'


export default function user(props) {

    return (

        <div>
            User in server folder

            {
                props.jsonData.users.map(oneUser =>
                    <li key={oneUser.id} >
                        {oneUser.firstName}
                    </li>
                )
            }

        </div>

    )
}





// we are fetching data at server, then we are showing it to clinet, 

export const getServerSideProps = async () => {

    const data = await fetch('https://dummyjson.com/users');

    const jsonData = await data.json();

    return {
        props: {
            jsonData,
        },
    }

}