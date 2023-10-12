// pages/users/[id].js

import { useRouter } from 'next/router';


// my adhuri kahani 
// example of server side routing 




const UserDetailPage = ({ user }) => {

    const router = useRouter();  // wil find the route 

    if (router.isFallback) {        // when data is un available 
        return <div>Loading...</div>;
    }


    return (

        <div>
            <h1>User Details</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>

    );

};




export async function getServerSideProps(context) {

    const { id } = context.query;
  
    const user = await fetchUserById(id);   // Fetch user data using the 'id' from the server
    
    return {
        props: {user,},
    };

}




export default UserDetailPage;