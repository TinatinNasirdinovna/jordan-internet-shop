import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Man from './components/Man';
import Women from './components/Women';
import Kids from './components/Kids';
import AddProduct from './components/AddProduct';
import BuyNow from './components/BuyNow';
import Basket from './components/Basket';
import Search from './components/Search';
import ProductDetails from './components/PoductDetais';

function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/man' element={<Man/>}/>
      <Route path='/woman' element={<Women/>}/>
      <Route path='/kids' element={<Kids/>}/>
      <Route path='/addProduct' element={<AddProduct/>}/>
      <Route path='/buyNow' element={<BuyNow/>}/>
      <Route path='/basket' element={<Basket/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/productDetails' element={<ProductDetails/>}/>
     </Routes>
    </div>
  );
}

export default App;
