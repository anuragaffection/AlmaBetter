import React from "react";

class LifeCycleComponent extends React.Component {

    el = document.createElement('section');


    // automatically calling 
    componentDidMount() {
        // this.test();

        setTimeout(() => {
            this.setState({ data: 'test data updated using setState' })
        }, 3000)
    }



    state = {
        data: 'test '
    }


    /*
     // automatically calling after - componentDidMount

       componentDidUpdate(prevProps, prevState) {
          console.log("life cycle update method called ");
          console.log("Previous state == " + prevState);
          console.log("Previous state in json == " + JSON.stringify(prevState));
          console.log("Previous Props " + prevProps);
          console.log("Previous Props in json == " + JSON.stringify(prevProps));
        }
    */



    test() {
        document.querySelector('#test').appendChild(this.el);
    }



    render() {
        // this.test()
        return (
            <div id="test">
                Hello {this.state.data}
            </div>
        )

    }
}

export default LifeCycleComponent;