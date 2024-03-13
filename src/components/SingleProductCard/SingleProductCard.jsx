import ElementDiscount from '../../UI/ElementDiscount/ElementDiscount';
import { BASE_URL } from '../../utils/constants';
import GoodsCategoriesTitle from '../GoodsCategoriesTitle/GoodsCategoriesTitle';
import ImagesOnProductCard from '../ImagesOnProductCard/ImagesOnProductCard';
import TitleThrough from '../TitleThrough/TitleThrough';
import classes from './SingleProductCard.module.css';
import ProductAndCartTitle from './../ProductAndCartTitle/ProductAndCartTitle';
import { useSelector } from 'react-redux';

const SingleProductCard = ({ title, image, price, discont_price, size }) => {
  const { theme } = useSelector((state) => state.theme);

  const percentDiscount = Math.round(((price - discont_price) / price) * 100);

  return (
    <div className={classes.wrap}>
      <div
        className={size ? classes.modalWrapper : classes.wrapper}
        style={{ backgroundImage: `url(${BASE_URL}/${image})` }}
      >
        <div className={classes.elemDiscontWrap}>
          <ElementDiscount discount={percentDiscount} />
        </div>
        <div className={classes.imagesWrap}>
          <ImagesOnProductCard />
        </div>
      </div>
      <div
        className={`${classes.aboutBlock} ${
          theme === 'dark' ? classes.dark : ''
        }`}
      >
        <GoodsCategoriesTitle text={`${title.substring(0, 17)}...`} />
        <div className={classes.priceBlock}>
          <ProductAndCartTitle
            text={discont_price ? `$${discont_price}` : `$${price}`}
            weight
          />
          <TitleThrough text={`${'$' + price}`} smallText />
        </div>
      </div>
    </div>
  );
};
export default SingleProductCard;
