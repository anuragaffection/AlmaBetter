import logo from './logo.svg';
import './App.css';
import { deposit, withdraw } from './Redux/State/action'
import { useDispatch, useSelector } from 'react-redux';
import { useState, useCallback, memo } from 'react';


function App2() {

    // const accountBalance = useSelector((state)=>state.accountBalance)
    // const dispatch = useDispatch();

    const [counter, setCounter] = useState(0);
    const someFunction = useCallback(() => {
        console.log("getting called from some function")
    }, [])

    return (
        <div className="App">
            {/* <h3>{accountBalance}</h3>
     <button onClick={()=>dispatch(deposit(1000))}>Desposit 1000</button>
     <button onClick={()=>dispatch(withdraw(500))}>Withdraw 500</button> */}
            <h1>UseCallBackComponent{counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>
                Click me
            </button>
            <ComponentA someFunction={someFunction} />
        </div>
    );
}

export default App2;

const ComponentA = memo((props) => {
    console.log("componentA rendered")
    return (
        <div>
            <h1>Component A</h1>
            {props.someFunction()}
        </div>
    )
})