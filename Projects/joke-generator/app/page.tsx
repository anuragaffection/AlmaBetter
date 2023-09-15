

export default function Home() {


  return (


    <div className='min-h-screen min-w-screen bg-gray-700 text-white'>


      <div className="border-b border-gray-600 pb-3">

        <h1 className="flex justify-center font-extrabold text-2xl pt-4 md:pt-8 px-2 sm:text-4xl md:text-6xl text-indigo-400">Welcome to Joke Generator </h1>


        <div className="flex justify-center align-middle p-2 md:p-4 md:mt-2">

          <p className=" md:text-2xl italic" >You are Programmer & this is also a joke !</p>

        </div>

      </div>





      <div className="flex flex-col md:flex-row mt-8 justify-center">

        <button className=" text-white text-center bg-indigo-500 border-0 mb-3 mx-3 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
          Generate Joke 1
        </button>



        <button className="text-centre text-white bg-indigo-500 border-0 mb-3 mx-3 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
          Generate Joke 2
        </button>



        <button className="text-centre text-white bg-indigo-500 border-0 mb-3 mx-3 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
          Generate Joke 3
        </button>


        <button className="text-centre text-white bg-indigo-500 border-0 mb-3 mx-3 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
          Generate Joke 4
        </button>


      </div>


    </div>
  )
}