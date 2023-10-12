
import React, { Component } from "react";
import Man from "./Man";
import './Person.css';


// this is class component
class Person extends Component {



    constructor(props) {

        super(props);
        
        this.props = props;

        this.state = {
            name: "Root",
            age: 22,
        };

        this.nameChangeHandler3 = this.nameChangeHandler3.bind(this);
    }




    nameChangeHandler() {
        this.setState({ name: 'Raj', age: 55 }, () => { });
        // setState is used to update the state 
        // it takes two parameters, object & handler 
        // syntax = setState (object, handler)
    }



    nameChangeHandler2() {
        this.setState({ name: 'Captain', age: 176 }, () => { });
        // setState is used to update the state 
        // it takes two parameters, object & handler 
        // syntax = setState (object, handler)
    }



    nameChangeHandler3() {
        this.setState({ name: 'Bruce', age: 1155 }, () => { });
        // setState is used to update the state 
        // it takes two parameters, object & handler 
        // syntax = setState (object, handler)
    }



    nameChangeHandler4 = () => {
        this.setState({ name: 'Karan', age: 35 }, () => { });
        // setState is used to update the state 
        // it takes two parameters, object & handler 
        // syntax = setState (object, handler)
    }


    render() {

        const styleInfinite = {
            fontSize: "25px",
            color: "red"
        }


        return (

            <div className="PersonBox">

                {/* Css styling  */}
                <h3 style={{ fontSize: "20px", color: "blue" }} >Name : India  </h3>
                <h3 style={styleInfinite}>Age : Infinite </h3>



                {/* Getting from props */}
                <h3> Namastey {this.props.name}, Welcome to Akhand Bharat </h3>


                {/* getting form state */}
                <h3>Dear {this.state.name}, {this.state.age} year old. Welcome to React World</h3>




                {/* event binding way 01 = using arrow function call  */}
                <button onClick={() => this.nameChangeHandler()}> click me to update </button>


                {/* event binding way 02 = using bind keyword */}
                <button onClick={this.nameChangeHandler2.bind(this)}> click me to update </button>

                { /* event binding way 03 = using bind in constructor */}
                <button onClick={this.nameChangeHandler3}> click me to update </button>


                { /* event binding way 04 = using arrow function */}
                {/* arrow function do automaic binding  */}
                <button onClick={this.nameChangeHandler4}> click me to update </button>


                <Man />


            </div>
        )


    }
}

export default Person;