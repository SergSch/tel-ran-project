import CategoriesBlockMain from '../../layout/HomePageLayouts/CategoriesBlockMain/CategoriesBlockMain';
import ProduktsBlockMain from '../../layout/HomePageLayouts/ProduktsBlockMain/ProduktsBlockMain';

import classes from './HomePage.module.css';

const HomePage = () => {
  return (
    <div>
      <CategoriesBlockMain />
      <ProduktsBlockMain/>
    </div>
  );
};
export default HomePage;
