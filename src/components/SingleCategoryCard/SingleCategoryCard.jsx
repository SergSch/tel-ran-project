import GoodsCategoriesTitle from '../GoodsCategoriesTitle/GoodsCategoriesTitle';
import classes from './SingleCategoryCard.module.css';

const SingleCategoryCard = ({ title, image }) => {
  console.log(image);
  return (
    <div className={classes.wrapper}>
      <img src={`http://localhost:3333/${image}`} alt={title} />
      <GoodsCategoriesTitle text={title} />
    </div>
  );
};
export default SingleCategoryCard;
