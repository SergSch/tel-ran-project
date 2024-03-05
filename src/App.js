import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CategoriesPage from './pages/CategoriesPage/CategoriesPage';
import SuppliesFromCategoryPage from './pages/SuppliesFromCategoryPage/SuppliesFromCategoryPage';
import SingleSupplyPage from './pages/SingleSupplyPage/SingleSupplyPage';
import CartPage from './pages/CartPage/CartPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
import AllProductsPage from './pages/AllProductsPage/AllProductsPage';
import AllSalesPage from './pages/AllSalesPage/AllSalesPage';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/allproducts" element={<AllProductsPage />} />
        <Route path="/allsales" element={<AllSalesPage />} />
        <Route path="/supllies" element={<SuppliesFromCategoryPage />} />
        <Route path="/single" element={<SingleSupplyPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
