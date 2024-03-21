import React from 'react';
import { ReactComponent as HeartIcon } from '../../assets/images/header/like.svg';
import { ReactComponent as BasketIcon } from '../../assets/images/cart.svg';
import classes from './SingleGoodsCard.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/reducers/cartSlice';
import { BASE_URL } from '../../utils/constants';

const SingleProduktCard = ({ id, title, discont_price, price, image, size }) => {

  const dispatch = useDispatch();
    // Рассчитываем процент скидки, если discount_price не равно null
  const discountPercent = discont_price ? ((price - discont_price) / price) * 100 : 0;

    const { theme } = useSelector((state) => state.theme);
     // Функция для добавления товара в корзину
  const handleAddToCart = () => {
    const product = { id, title, price: discont_price || price, image, quantity: 1 };
    dispatch(addProduct(product));
  };

  return (
    <div className={classes.wrap}>
    <div className={size ? classes.mainPageWrapper : classes.wrapper}>

         {/* Флажок скидки */}
         {discountPercent > 0 && (
        <div className={classes.discountFlag}>
          -{discountPercent.toFixed(0)}%
        </div>
        )}
        <div  className={classes.photo} style={{ backgroundImage: `url('${BASE_URL}/${image}')` }}>
            <div className={classes.heartIcon}><HeartIcon className={classes.heartIcon} /></div>

            <div className={classes.basketIcon} onClick={handleAddToCart}><BasketIcon className={classes.basketIcon} /></div>
        </div>
      
      <div className={classes.info}>
             <h4 className={`${classes.title} ${theme === 'dark' ? classes.title_dark : ''}`}>
                {title}
            </h4> 

            <div className={classes.priceSection}>
          <p className={`${classes.discountPrice} ${theme === 'dark' ? classes.discountPrice_dark: ''}`}>${discont_price}</p>
          <p className={classes.originalPrice}>${price}</p>
        </div>
      </div>
     
      </div>
    </div>
  );
};

export default SingleProduktCard;