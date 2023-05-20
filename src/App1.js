
import { AppProvider } from "./AppContext";
import Product from "./Components/products/Product";
import Cart from "./Components/Cart/Cart";
import { Routes, Route } from "react-router-dom";
function App1() {
    return (
      <div>
        <AppProvider>
          <Product />
          <Routes>
             <Route path="/product" element={<Product />}>
            </Route>
            
            <Route path="/cart" element={<Cart />}></Route>
            </Routes>
        </AppProvider>
    </div>
        
    )
  }
  
  export default App1;