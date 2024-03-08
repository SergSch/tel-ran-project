import classes from './CategoriesBlockMain.module.css';
import TitleH2 from '../../../components/TitleH2/TitleH2';
import Line from '../../../UI/Line/Line';
import SmallButton from '../../../UI/SmallButton/SmallButton';
import { Link } from 'react-router-dom';
import { useGetAllCategoriesQuery } from '../../../store/reducers/apiCatigoriesSlice';
import SingleCategoryCard from './../../../components/SingleCategoryCard/SingleCategoryCard';
import { useSelector } from 'react-redux';

const CategoriesBlockMain = () => {
  const { data } = useGetAllCategoriesQuery();
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className={` ${theme === 'dark' ? classes.dark : ''}`}>
      <div className="container">
        <div className={classes.wrapper}>
          <div className={classes.title_block}>
            <TitleH2 text="Categories" />
            <div className={classes.btn_block}>
              <Line />
              <div className={classes.topSmallBtn}>
                <Link to={'/categories'}>
                  <SmallButton text="All categories" />
                </Link>
              </div>
            </div>
          </div>
          <div className={classes.categoriesWrapper}>
            {data?.slice(0, 4).map((category) => (
              <SingleCategoryCard key={category.id} {...category} size />
            ))}
          </div>
          <div className={classes.bottomSmallBtn}>
            <Link to={'/categories'}>
              <SmallButton text="All categories" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoriesBlockMain;
