import { BASE_URL } from '../../utils/constants';
import GoodsCategoriesTitle from '../GoodsCategoriesTitle/GoodsCategoriesTitle';
import classes from './SingleCategoryCard.module.css';

const SingleCategoryCard = ({ title, image, size }) => {
  return (
    <div className={classes.wrap}>
      <div
        className={size ? classes.mainPageWrapper : classes.wrapper}
        style={{ backgroundImage: `url(${BASE_URL}/${image})` }}
      ></div>
      <GoodsCategoriesTitle text={title} />
    </div>
  );
};
export default SingleCategoryCard;
