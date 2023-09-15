
import NavBar from "./Components/NavBar";
import Products from "./Components/Products";
import Cart from "./Components/Cart";


const App = () => {

  return (

    <div>

      <NavBar />

      <div className="my-0 mx-auto p-4 max-w-[140rem] md:p-12">
        
        <Products />
      </div>

      <Cart />

    </div>
  )
}

export default App;