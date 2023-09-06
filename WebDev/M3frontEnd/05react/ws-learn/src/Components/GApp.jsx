import React, { Component } from "react";
import GRegister from "./GRegister";
import Greet from "./Greet";


class GApp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isRegistered: false,
            name : null,
            email : null,
            password : null,

        };
    }


    registrationHandler = (event) => {
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        this.setState({name, email, password, isRegistered:true})

        event.preventDefault();
    }


    render() {
        return (
            <div>
                {
                    this.state.isRegistered ? (
                    <Greet name = {this.state.name} email = {this.state.email}></Greet>
                    )  : (
                    <GRegister submit ={this.registrationHandler} ></GRegister>
                    ) 
                }

            </div>
        );
    }
}


export default GApp;