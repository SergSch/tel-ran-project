import CategoriesBlockMain from '../../layout/HomePageLayouts/CategoriesBlockMain/CategoriesBlockMain';

import MainBanner from '../../layout/HomePageLayouts/MainBanner/MainBanner';

import SalesBlock from '../../layout/HomePageLayouts/SalesBlock/SalesBlock';



import classes from './HomePage.module.css';


const HomePage = () => {
  return (
    <div>

      <MainBanner />


      <CategoriesBlockMain />


      <SalesBlock/>


    </div>
  );
};
export default HomePage;
