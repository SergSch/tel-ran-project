import React from 'react';
import { ReactComponent as HeartIcon } from '../../assets/images/header/like.svg';
import { ReactComponent as BasketIcon } from '../../assets/images/cart.svg';
import classes from './SingleProductCard.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/reducers/cartSlice';
import { BASE_URL } from '../../utils/constants';

const SingleProduktCard = ({ id, title, discont_price, price, image, size }) => {

  const dispatch = useDispatch();
// Если discont_price пусто или не определено, используем price
const effectiveDiscontPrice = discont_price || price;

// Рассчитываем процент скидки, если discont_price не равно null и не пусто
const discountPercent = discont_price ? ((price - effectiveDiscontPrice) / price) * 100 : 0;

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
              {/* discont_price не пусто, отображается и цена со скидкой, и оригинальная цена. Если discont_price пусто, отображается только price со стилем .discountPrice. Это обеспечивает, что стиль .discountPrice применяется только к цене со скидкой или к обычной цене, если скидка отсутствует */}
    {discont_price ? (
      <>
        <p className={`${classes.discountPrice} ${theme === 'dark' ? classes.discountPrice_dark : ''}`}>
          ${effectiveDiscontPrice}
        </p>
        <p className={classes.originalPrice}>${price}</p>
      </>
    ) : (
      <p className={`${classes.discountPrice} ${theme === 'dark' ? classes.discountPrice_dark : ''}`}>
        ${price}
      </p>
    )}
  </div>
      </div>
     
      </div>
    </div>
  );
};

export default SingleProduktCard;