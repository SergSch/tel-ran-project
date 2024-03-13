import CategoriesBlockMain from '../../layout/HomePageLayouts/CategoriesBlockMain/CategoriesBlockMain';
import SalesBlock from '../../layout/HomePageLayouts/SalesBlock/SalesBlock';
import StartBlockMain from '../../layout/HomePageLayouts/StartBlockMain/StartBlockMain';

import classes from './HomePage.module.css';

const HomePage = () => {
  return (
    <div>
      <StartBlockMain />
      <CategoriesBlockMain />
      <SalesBlock />
    </div>
  );
};
export default HomePage;
