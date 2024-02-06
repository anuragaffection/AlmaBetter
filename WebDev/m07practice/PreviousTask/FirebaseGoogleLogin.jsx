import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { RiGoogleFill } from 'react-icons/ri'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { firebaseApp } from '../firebase.js'
import context from '../context/MyContext.jsx'


function FirebaseGoogleLogin() {

    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();
    const firebaseAuth = getAuth(firebaseApp);
    const accessingState = useContext(context);


    const handlerSignInWithPopup = async () => {
        try {
            const result = await signInWithPopup(firebaseAuth, googleProvider);
            const firebaseUser = result.user;
            accessingState.setIsAuthenticated(true);
            accessingState.setFirebaseUser(firebaseUser);

            setTimeout(() => {
                navigate('/profile')
            }, 1000);

        } catch (error) {
            console.error("error = ", error);
            accessingState.setIsAuthenticated(false);
        }
    }


    const container = `bg-gray-900 text-gray-200 p-4`;
    const wrapper = `flex flex-col gap-7 md:justify-center md:items-center my-3`;
    const loginForm = `flex flex-row gap-6 bg-gray-950 hover:bg-lime-700 p-9 rounded-lg `;
    
    return (

        <div
            className={container}
            onClick={handlerSignInWithPopup}>

            <div className={wrapper}>

                <div className={loginForm}>
                    <RiGoogleFill />
                    <span>Login in with Google</span>
                </div>

            </div>
        </div>
    )

}

export default FirebaseGoogleLogin