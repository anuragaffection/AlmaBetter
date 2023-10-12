import React from "react";

const Userpage = (props) => {

    return (
        <div>
            <h1>Profile page of {props.jsonData.firstName} </h1>
        </div>
    );
};



// run this command  = npm run build = to execute this code 

// it generates = static file = after running build = in = .next = folder 
export const getStaticPaths = async () => {

    const data = await fetch('https://dummyjson.com/users');

    const jsonData = await data.json();

    const allUserId = jsonData.users.map((oneUser) => oneUser.id);


    return {
        paths: allUserId.map((userId) => ({ params: { idx: `${userId}` } })),
        fallback: false,
    };
};




export const getStaticProps = async (context) => {

    const id = context.params.idx;

    const data = await fetch(`https://dummyjson.com/users/${id}`);

    const jsonData = await data.json();

    return {
        props: {
            jsonData,
        },
    };
};




export default Userpage;
