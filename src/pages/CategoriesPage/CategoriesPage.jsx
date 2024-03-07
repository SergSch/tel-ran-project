import SingleCategoryCard from '../../components/SingleCategoryCard/SingleCategoryCard';
import TitleH2 from '../../components/TitleH2/TitleH2';
import { useGetAllCategoriesQuery } from '../../store/reducers/apiCatigoriesSlice';
import classes from './CategoriesPage.module.css';
import { useSelector } from 'react-redux';

const CategoriesPage = () => {
  const { data, isLoading, isError } = useGetAllCategoriesQuery();

  const { theme } = useSelector((state) => state.theme);
  return (
    <div className={`${classes.wrap} ${theme === 'dark' ? classes.dark : ''}`}>
      <div className="container">
        <div className={classes.wrapper}>
          <div className="breadCrumbs"></div>
          <TitleH2 text="Categories" />
          {isLoading && (
            <div className="loading">
              <div className="loading_content"></div>
            </div>
          )}
          <div className={classes.categoryWrapper}>
            {/* {data?.map((category) => (
              <SingleCategoryCard key={category.id} {...category} />
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoriesPage;
