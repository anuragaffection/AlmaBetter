import React, { useEffect, useState } from 'react';


export default function LearnHooks() {

    const [count, setCount] = useState(0);

    const [calculation, setCalculation] = useState(0);



    const timer = () => {
        setTimeout(() => {
            setCount((count) => count + 1)
        }, 1000)
    }




    /*
  
      --without empty array
      --here, infinite calling
  
      useEffect(() => {
          setTimeout(() => {
              setCount((count) => count + 1)
          }, 1000)
  
      })
  
    */


    // useEffect = doing auto calling 
    // similar kind of behavior - like componentDidUpdate()


    /*
     useEffect(() => {
         setTimeout(() => {
             setCount((count) => count + 1)
         }, 1000)
 
     }, [])


     // [] = this protecting it from further calling
   */





    /*
      useEffect(() => {

      setCalculation( () => count * 2);

       }, [count])

    */


    useEffect(() => {

        setCalculation(() => count * 2);

        return () => {


            // we will do clean kind of things here
        }

    }, [count])









    return (
        <div>
            LearnHooks
            <br />

            <button onClick={timer}>Click working due to timer </button>
            <br />

            <button onClick={timer}>Click working due to timer </button>
            <br />

            <h1>{count}</h1>
            <br />


            <button type="button" onClick={() => setCount((c) => c + 1)}>Add </button>
            <h1>{calculation}</h1>


            <br />
            <h2>Learning Hooks</h2>
        </div>
    )
}
