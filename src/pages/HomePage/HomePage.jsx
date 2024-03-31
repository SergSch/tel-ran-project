import CategoriesBlockMain from '../../layout/HomePageLayouts/CategoriesBlockMain/CategoriesBlockMain';
import MainBanner from '../../layout/HomePageLayouts/MainBanner/MainBanner';

import classes from './HomePage.module.css';

const HomePage = () => {
  return (
    <div>
      <CategoriesBlockMain />
      <MainBanner />
    </div>
  );
};
export default HomePage;
