// making class based components

// this is must to import
import React, {Component}from "react";

import {Man} from "./man";





class Person extends Component{

    constructor(props){
        super(props)
    }


    render(){
        return(
            <div>
                <h3> Anurag Affection</h3>
                <h3>A family of Love & Affection</h3>

                <Man/>
                
            </div>
        );
    }
}



// default export 
export default Person;
