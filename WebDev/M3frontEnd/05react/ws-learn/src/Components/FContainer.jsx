import React, { Component } from 'react';
import FDetails from './FDetails';
import FQuestions from './FQuestions';
import { v4 as uuidv4 } from 'uuid';

import firebase from "firebase/compat/app";
import "firebase/compat/database";








const firebaseConfig = {
    apiKey: "AIzaSyCsWnJTTbTWqStBt0mC6ITB5HUGIZZFhY0",
    authDomain: "wslearn-40bd7.firebaseapp.com",
    databaseURL: "https://wslearn-40bd7-default-rtdb.firebaseio.com",
    projectId: "wslearn-40bd7",
    storageBucket: "wslearn-40bd7.appspot.com",
    messagingSenderId: "255676097789",
    appId: "1:255676097789:web:dd349970e2fc10e63aca94"
};


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}



export default class FContainer extends Component {



    constructor(props) {
        super(props)

        this.state = {

            id: uuidv4(),

            name: null,
            email: null,

            questions: {
                q3: null,
                other: null,
                q4: null,
                q5: null,
            },

            isSubmited: false,

        };
    }




    detailsSubmitHandler = (event) => {
        const name = event.target.yourName.value;
        const email = event.target.emailAddress.value;
        this.setState({ name, email }, () => {
            console.log(this.state);
        });

        event.preventDefault();
    }



    questionsSubmitHandler = (event) => {

        const questions = {};

        questions.q3 = event.target.q3.value;
        questions.other = event.target.other.value;
        questions.q4 = event.target.q4.value;
        questions.q5 = event.target.q5.value;

        const isSubmited = true;

        this.setState({ questions, isSubmited }, () => {
            console.log(this.state);
        });

        event.preventDefault();



        const database = firebase.database();

        database.ref('survey/' + this.state.id).set(
            {
                name: this.state.name,
                email: this.state.email,
                questions: this.state.questions,
            }
        );


    };




    render() {

        return (

            <>

                <div className='container-fluid'>
                    <div className='container card-mt-2'>
                        <h1 className='text-center text-light'>Ws Learn - Survey </h1>
                    </div>
                </div>


                {
                    this.state.isSubmited ? (

                        <div className='card container'>
                            <h1>Thank You for the Survey</h1>
                        </div>

                    ) : (

                        this.state.name === null && this.state.email === null ? (
                            <FDetails submit={this.detailsSubmitHandler} />
                        ) : (
                            <FQuestions submit={this.questionsSubmitHandler} />
                        )

                    )
                }




            </>
        )
    }






}
