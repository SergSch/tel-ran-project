import classes from './CategoriesBlockMain.module.css';
import SmallButton from '../../../UI/SmallButton/SmallButton';
import { Link } from 'react-router-dom';
import { useGetAllCategoriesQuery } from '../../../store/reducers/apiCatigoriesSlice';
import SingleCategoryCard from './../../../components/SingleCategoryCard/SingleCategoryCard';
import { useSelector } from 'react-redux';
import TitleBlockWithLine from '../../../components/TitleBlockWithLine/TitleBlockWithLine';
import { ROUTES } from '../../../utils/routes';

const CategoriesBlockMain = () => {
  const { data } = useGetAllCategoriesQuery();
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className={` ${theme === 'dark' ? classes.dark : ''}`}>
      <div className="container">
        <div className={classes.wrapper}>
          <TitleBlockWithLine
            text="Categories"
            textSmallBtn="All categories"
            link={ROUTES.CATEGORIES}
          />
          <div className={classes.categoriesWrapper}>
            {data?.slice(0, 4).map((category) => (
              <SingleCategoryCard key={category.id} {...category} size />
            ))}
          </div>
          <div className={classes.bottomSmallBtn}>
            <Link to={ROUTES.CATEGORIES}>
              <SmallButton textSmallBtn="All categories" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoriesBlockMain;
