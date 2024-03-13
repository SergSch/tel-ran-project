import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CategoriesPage from './pages/CategoriesPage/CategoriesPage';
import SuppliesFromCategoryPage from './pages/SuppliesFromCategoryPage/SuppliesFromCategoryPage';
import CartPage from './pages/CartPage/CartPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
import AllProductsPage from './pages/AllProductsPage/AllProductsPage';
import AllSalesPage from './pages/AllSalesPage/AllSalesPage';
import SingleProductPage from './pages/SingleProductPage/SingleProductPage';

import { FaAnglesUp } from 'react-icons/fa6';
import { useEffect } from 'react';
import { ROUTES } from './utils/routes';

function App() {
  useEffect(() => {
    const scrollButton = document.querySelector('.scroll-to-top');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        scrollButton.classList.remove('d-none');
      } else {
        scrollButton.classList.add('d-none');
      }
    });
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.CATEGORIES} element={<CategoriesPage />} />
        <Route path={ROUTES.ALLPRODUCTS} element={<AllProductsPage />} />
        <Route path={ROUTES.PRODUCT} element={<SingleProductPage />} />
        <Route path={ROUTES.ALLSALES} element={<AllSalesPage />} />
        <Route path={ROUTES.CATEGORY} element={<SuppliesFromCategoryPage />} />
        <Route path={ROUTES.CART} element={<CartPage />} />
        <Route path={ROUTES.NOTFOUNDPAGE} element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <button
        className="scroll-to-top"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <FaAnglesUp />
      </button>
    </div>
  );
}

export default App;
