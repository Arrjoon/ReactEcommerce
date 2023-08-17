
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header'
import Home from './modules/Home';
import Product from './modules/Product';
import Products from './modules/Products';
import CategoriesProducts from './modules/CategoriesProducts';
function App() {
  return (
    <h1>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/categories/:name" element={<CategoriesProducts />} />
      </Routes>
      <Footer></Footer>
    </h1>
  );
}

export default App;
