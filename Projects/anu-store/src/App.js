import Cart from "./Components/Cart";
import NavBar from "./Components/NavBar";
import Products from "./Components/Products";


const App=()=>{
    return(
        <div>
        <NavBar/>
        <div className="my-0 mx-auto p-4 max-w-[140rem] md:p-12">
          <Products />
        </div>
        <Cart />
      </div>
    )
}

export default App;