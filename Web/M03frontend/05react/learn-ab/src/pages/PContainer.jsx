import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PLayout from './PLayout';
import PHome from './PHome';
import PBlogs from './PBlogs';
import PContact from './PContact';
import PNoPage from './PNoPage';


export default function PContainer() {

    return (

        <div>
            <BrowserRouter>

                <Routes>

                    <Route path ='/' element={<PLayout/>}>

                        <Route index element = {<PHome/>}/>

                        <Route path = 'blogs' element = {<PBlogs/>}/>

                        <Route path = 'contact' element = {<PContact/>} />

                        <Route path = '*' element = {<PNoPage/>}/>


                    </Route>

                </Routes>
            </BrowserRouter>
        </div>
    )
}
