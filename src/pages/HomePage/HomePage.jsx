import CategoriesBlockMain from '../../layout/HomePageLayouts/CategoriesBlockMain/CategoriesBlockMain';
import SalesBlock from '../../layout/HomePageLayouts/SalesBlock/SalesBlock';

import classes from './HomePage.module.css';

const HomePage = () => {
  return (
    <div>
      <CategoriesBlockMain />
      <SalesBlock />
    </div>
  );
};
export default HomePage;
