import React, { Component } from "react";


class Control extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'Ws Cube Tech '
        }
    }

    changeHandler = (event) => {
        console.log("old state = ", this.state);
        const name = event.target.value;
        this.setState({name}, () => {
            console.log("new state = ", this.state);
        });

    }

    render() {
        return (
            <div>
                <form action="">
                    <input type="text" name="user_name" id="" value={this.state.name} onChange={this.changeHandler} />

                </form>
            </div>
        )

    }
}

export default Control;