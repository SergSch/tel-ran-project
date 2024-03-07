import GoodsCategoriesTitle from '../GoodsCategoriesTitle/GoodsCategoriesTitle';
import classes from './SingleCategoryCard.module.css';

const SingleCategoryCard = ({ title, image, size }) => {
  return (
    <div className={classes.wrap}>
      <div
        className={size ? classes.mainPageWrapper : classes.wrapper}
        style={{ backgroundImage: `url('http://localhost:3333/${image}')` }}
      ></div>
      <GoodsCategoriesTitle text={title} />
    </div>
  );
};
export default SingleCategoryCard;
