import { useState } from "react";
import Card from "./components/Card";
import Color from "./components/Color";
import Password_generator from "./components/Password_generator";
import { CurrencyLayout } from "./components";
// not neceessary to mention index.js , as by default it export from index.js 


function App() {

  let [counter, setCounter] = useState(15);

  // let counter = 15;
  const addValue = () => {
    if (counter <= 20) {
      counter++;
      setCounter(counter)
    }
  }

  const removeValue = () => {
    if (counter >= 0) {
      counter--;
      setCounter(counter);
    }
  }



  return (
    <>
      <h1>Chai aur React with HC sir | Anurag Affection </h1>
      <h2>Counter value : 5 </h2>

      <button onClick={addValue}>Add value {counter} </button>
      <br />
      <button onClick={removeValue}> Remove value {counter} </button>

      <h1 className="bg-green-400 text-3xl font-bold">Tailwind test </h1>

      <Card userName={'Anu'} pText={"Anu is the world in React "}/>
      <Card userName={'Anvi'} pText={"Anvi Exploring React with Chai "}/>

      <Color/>
      <Password_generator/>

      {/* currency converter layout  importing from index file  */}
      <CurrencyLayout/>

      
    </>

  )
}

export default App;
