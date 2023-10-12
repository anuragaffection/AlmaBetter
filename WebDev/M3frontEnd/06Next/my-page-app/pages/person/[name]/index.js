import { useRouter } from "next/router"

export default function Name() {

    const router = useRouter();


    // const useUser = () => ( {user : null, loading : false}); 
    // it is a custom hooks 
    // piyush garg 04 - 10.49 again = 





    return (

        <div>


            <h1>  Hey {router.query.name}, welcome to Name folder.  </h1>



            <button
                onClick={(e) => router.push(`/person/${router.query.name}/setting`)} className="bg-white text-red-600"
            >
                Open Setting Page - 
            </button>




            {/* some more ways to push router  */}
            <button
                onClick={(e) =>
                    router.push({
                        pathname: "/person/[name]/setting",
                        query: { name: router.query.name },
                    })
                }
                className="bg-white text-red-600 mx-4 "
            >
                Open Setting Page - pathname
            </button>




            <button
                onClick={(e) => router.push(`/`)}
                className="bg-white text-red-500 mx-4"

            >
                Go to Home
            </button>




            {/* replace = will not make history,  */}
            <button
                onClick={(e) => router.replace(`/`)}
                className="bg-white text-red-500 mx-4"

            >
                Go to Home - using replace
            </button>










        </div>
    )
}