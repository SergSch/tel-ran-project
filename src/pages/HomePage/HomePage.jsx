import CategoriesBlockMain from '../../layout/HomePageLayouts/CategoriesBlockMain/CategoriesBlockMain';
import GoodsBlockMain from '../../layout/HomePageLayouts/GoodsBlockMain/GoodsBlockMain';

import classes from './HomePage.module.css';

const HomePage = () => {
  return (
    <div>
      <CategoriesBlockMain />
      <GoodsBlockMain/>
    </div>
  );
};
export default HomePage;
