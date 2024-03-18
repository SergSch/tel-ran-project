import React from 'react';
import { ReactComponent as HeartIcon } from '../../assets/images/header/like.svg';
import { ReactComponent as BasketIcon } from '../../assets/images/cart.svg';
import classes from './SingleGoodsCard.module.css';
import GoodsCategoriesTitle from '../GoodsCategoriesTitle/GoodsCategoriesTitle';
import { useSelector } from 'react-redux';

const SingleProduktCard = ({  title,
  image,
  price,
  discont_price,
  size,
  handleAddToCart }) => {
    // Рассчитываем процент скидки
    const discountPercent = ((price - discont_price) / price) * 100;

    const { theme } = useSelector((state) => state.theme);


  return (
    <div className={classes.wrap}>
    <div className={size ? classes.mainPageWrapper : classes.wrapper}>

         {/* Флажок скидки */}
         <div className={classes.discountFlag}>-{discountPercent.toFixed(0)}%</div>

        <div  className={classes.photo} style={{ backgroundImage: `url('http://localhost:3333/${image}')` }}>
            <div className={classes.heartIcon}><HeartIcon className={classes.heartIcon} /></div>

            <div className={classes.basketIcon}><BasketIcon className={classes.basketIcon} /></div>
        </div>
      
      <div className={classes.info}>

        {/* <div className={classes.info_text}> */}
             {/* <GoodsCategoriesTitle text={title} /> */}

             <h4 className={`${classes.title} ${theme === 'dark' ? classes.title_dark : ''}`}>
                {title}
            </h4> 

        {/* </div> */}
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