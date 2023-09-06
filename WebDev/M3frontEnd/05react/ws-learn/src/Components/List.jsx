import React, { Component } from "react";


class List extends Component {

    constructor(props) {

        super(props);

        this.state = {
            dataList: [
                {
                    name: "Captain America",
                    age: 123,
                },
                {
                    name: "Bruce Wayne",
                    age: 567,
                },
                {
                    name: "Steve Rogers",
                    age: 321,
                }
            ]
        };
    }




    render() {


        // let eachList = this.state.dataList.map((ele) => {
        //     let result = document.createElement('div');
        //     result.textContent = `Name = ${ele.name} & age = ${ele.age}`;
        //     return result;

        // })

        return (
            <div>
                <div id="divList"></div>
                <h3>Name = {this.state.dataList[0].name}</h3>
            </div>
        )
    }
}

export default List;