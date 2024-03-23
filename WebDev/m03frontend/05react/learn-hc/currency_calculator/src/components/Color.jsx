import React, { useState } from 'react'

function Color() {
    const [color, setColor] = useState("olive");

  return (

    <div className='w-full h-96 duration-200' style={ {backgroundColor : color}}>

        <div className='flex flex-wrap justify-center py-3 px-2'>

            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-gray-200 px-3 py-2 rounded-2xl">

                <button onClick={ () => setColor("red")} className='outline-none px-4 text-red-200' style={{backgroundColor : "red "}}>Red </button>
                
                <button onClick={ () => setColor("purple")} className='outline-none px-4 text-purple-200 ' style={{backgroundColor : "purple"}}>purple </button>
                
                <button onClick={ () => setColor('blue')} className='outline-none px-4 text-blue-200 ' style={{backgroundColor : "blue"}}>Blue </button>
                
                <button onClick={ () => setColor('green')} className='outline-none px-4 text-green-200' style={{backgroundColor : "green"}}>Green  </button>
                
                <button onClick={ () => setColor('yellow')} className='outline-none px-4 text-yellow-900' style={{backgroundColor : "yellow"}}>Yellow </button>

            </div>
        </div>

    </div>
  )
}

export default Color


/* 
    - onClick = {someFunction}
    - onClick = {someFunction()}

    - what is difference between using someFunction & someFunction()

    - someFunction = will give function to onClick
    - someFunction() = will give value returned by someFunction to onClick
*/