
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './component/Home';
import Navbar from './component/Navbar';
import Products from './component/Products';
import Product from './component/Product';
import Cart from './component/Cart';

import UserProfile from './component/UserProfile';

import img from "./assets/bg.jpg";



function App() {

  return (

    <>
       <Navbar/> 


      <BrowserRouter>

        <Routes>
          
          <Route exact path='/' element={<Home img={img} />} />
          <Route exact path='products' element={<Products />} />
          <Route exact path='products/:id' element={<Product />} />
          <Route exact path='cart' element={<Cart />} />

        </Routes>

      </BrowserRouter>



      <div>
        <Home img={img} />
        <Product />

        <UserProfile />
      </div>


    </>


  );
}

export default App;
