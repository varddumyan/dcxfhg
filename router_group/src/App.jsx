import Home from "./pages/Home";
import Products from "./pages/Products";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Layouts from "./components/Layouts";
import SinglePage from "./pages/SinglePage";
import "./App.css";

function App() {
  return <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Layouts/>}>
          <Route path="/" element = {<Home/>}/>
          <Route path="/products" element = {<Products/>}/>
          <Route path="/products/:productId" element = {<SinglePage/>}/>
        </Route>
      </Routes>
  </BrowserRouter>;
}

export default App;
