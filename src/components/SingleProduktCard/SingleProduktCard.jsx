import React from 'react';
import { ReactComponent as HeartIcon } from '../../assets/images/header/like.svg';
import { ReactComponent as BasketIcon } from '../../assets/images/header/cart.svg';
import classes from './SingleProduktCard.module.css';
import GoodsCategoriesTitle from '../GoodsCategoriesTitle/GoodsCategoriesTitle';

const SingleProduktCard = ({ id, title, discount_price, original_price, image, size }) => {
  return (
    <div className={classes.wrap}>
    <div className={size ? classes.mainPageWrapper : classes.wrapper}>
        <div  className={classes.photo} style={{ backgroundImage: `url('http://localhost:3333/${image}')` }}>
            <div className={classes.heartIcon}><HeartIcon className={classes.heartIcon} /></div>

            <div className={classes.basketIcon}><BasketIcon className={classes.basketIcon} /></div>
        </div>
      
      <div className={classes.info}>

        <GoodsCategoriesTitle text={title} />
        <div className={classes.priceSection}>
          <span className={classes.discountPrice}>{discount_price}</span>
          <span className={classes.originalPrice}>{original_price}</span>
        </div>
      </div>
     
      </div>
    </div>
  );
};

export default SingleProduktCard;