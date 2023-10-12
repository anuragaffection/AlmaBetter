import React from 'react'

import {useRouter} from 'next/router';


export default function Username() {

    const router = useRouter();  // this will provide lots of thing about, check console 
    
    // console.log('router = ', router);

    /**
     * some important thing that useRotuer() provide 
     * 
     * -- query
     * -- asPath
     * -- route 
     */


  return (

    <div>
        <h1>{router?.query.username} , Welcome to Next App </h1>

        {
          /* 
                why we used  -- router?  -- 
                because if user not found then it's going to be undefined

                
          */
        }


    </div>



    
  )
}
