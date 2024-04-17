import CategoriesBlockMain from '../../layout/HomePageLayouts/CategoriesBlockMain/CategoriesBlockMain';

import MainBanner from '../../layout/HomePageLayouts/MainBanner/MainBanner';

import GoodsBlockMain from '../../layout/HomePageLayouts/GoodsBlockMain/GoodsBlockMain';



import classes from './HomePage.module.css';
import FormBlock from '../../layout/HomePageLayouts/FormBlock/FormBlock';

const HomePage = () => {
  return (
    <div>

      <MainBanner />


      <CategoriesBlockMain />

      <FormBlock/>
      <GoodsBlockMain/>


    </div>
  );
};
export default HomePage;
