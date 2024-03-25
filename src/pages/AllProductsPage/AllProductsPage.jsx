import classes from './AllProductsPage.module.css';
import { Link, useLocation  } from 'react-router-dom';
import { useGetAllGoodsQuery } from '../../store/reducers/apiGoodsSlice';
import SingleGoodsCard from '../../components/SingleGoodsCard/SingleGoodsCard';
import { useSelector, useDispatch } from 'react-redux';
import { ROUTES } from '../../utils/routes';
import StartBlockButton from '../../UI/StartBlockButton/StartBlockButton';
import { addProduct, countTotalSum } from '../../store/reducers/cartSlice';
import toast from 'react-hot-toast';

import TitleH2 from '../../components/TitleH2/TitleH2';
import Line from '../../UI/Line/Line';
import SmallButton from '../../UI/SmallButton/SmallButton';
import { useEffect, useState } from 'react';
import FiltrationBar from '../../components/FiltrationBar/FiltrationBar';


export default function AllProductsPage() {

// opened page is displayed at the top
useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  const { data } = useGetAllGoodsQuery();
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  // // Get id of category
  // let location = useLocation();

  //   // Get number of passed category for initialization group of products
  //   const params = new URLSearchParams(location.search);
  //   let category = params.get('category');

  
//   отбор рендомной последовательности

const shuffledProducts = data ? [...data].sort(() => Math.random() - 0.5) : [];


// Добавление в корзину
  const handleAddToCart = (event, product) => {
    event.preventDefault();
    dispatch(addProduct(product));
    dispatch(countTotalSum());
    toast.success('Added to Cart successfully');
  };
  return (
    <div className={` ${theme === 'dark' ? classes.dark : ''}`}>
      <div className="container">
        <div className={classes.wrapper}>


          <div className={classes.breadCrumbs}>
            <Link to={ROUTES.HOME}>
              <StartBlockButton textSmallBtn="Main Page" />
            </Link>
            <Line short />
            <StartBlockButton textSmallBtn="All products" dontClick />


            
          </div>
         
         <TitleH2 text="All products" />

        <FiltrationBar/>


          <div className={classes.goodsWrapper}>
          {shuffledProducts?.map((product) => (
              <Link
                key={product.id}
                to={`${ROUTES.PRODUCT.replace(':id', product.id)}`}
              >
                
                <SingleGoodsCard
                  {...product}
                  handleAddToCart={(event) => handleAddToCart(event, product)}
                />
              </Link>
            ))}
        </div>
        <div className={classes.bottomSmallBtn}>
            <Link to={`${ROUTES.ALLPRODUCTS}?category=2`}>
              <StartBlockButton textSmallBtn="All sales" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
